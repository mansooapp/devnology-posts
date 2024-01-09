## Yarn Berry 적용해보기

처음 NodeJS 를 접했을때는 Node Package Manager 의 종류가 npm 밖에 없었기 때문에 선택의 여지는 없었다.  
npm 을 잘 사용하던 중 2016년 Facebook 에서 공식적으로 발표한 패키지 매니저가 yarn 이다.  
Facebook 에서 개발하고 유지보수하고 있는 React 와 더불어 좋은 패키지 매니저가 출시되었나 싶어 넘어갈까도 생각해보였지만,  
초반에 yarn 이 내세우던 성능상의 장점은 npm 이 금새따로잡아버렸고 npm 이던 yarn 이던 동일한 저장소를 쓰기때문에 어느쪽으로던 마이그레이션이나 호환성에 큰 이슈가 없어 굳이 넘어갈 필요가 없어보였다.  

물론 팀이나 프로젝트의 기본 셋업을 따라가기는 했지만 개인적으로는 npm 을 default 로 하되 그때그때 필요한 패키지 매니저를 사용해왔었다...  

## 하지만 Berry 라면?

**[Yarn Installation](https://yarnpkg.com/getting-started/install)**

**[Yarn Berry Github](https://github.com/yarnpkg/berry)**


하지만 berry 가 출시된 후, yarn 이 내세우는 zero install 과 node_modules 로 부터의 해방, 의존성 모듈들을 버전관리에 포함시켜줌으로서 셋업의 간편함 등등... 도저히 시도해보지 않을 수 없었다.  

아무튼... 궁금한건 글로서는 해결되지 않는다... 직접 셋업해보자..  


일단 제일 먼저 필요한건... 역시 yarn 이다... yarn 을 한번도 접해보지 못한 사람들은 yarn 이 설치되어 있지 않을테니깐
npm 으로 yarn 을 먼저 설치해주자.  

```
# npm i -g yarn
```



```
# yarn create react-app myapp --template typescript
or
# npx create-react-app myapp --template typescript

# cd myapp
# yarn add typescript @types/node @types/react @types/react-dom @types/jest
or
# npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

일단 실행이나 한번 해보고...
```
# yarn start
```

![width=500px](http://static.devnology.co.kr/files/posts/yarnberry/yarnberry2.png)

잘 뜬다...  

그런데 yarn 으로 최초 설치해주었는데도 node_modules 가 남아있다. yarn 의 기본 버전은 berry 가 아닌가 보다.  
![width=500px](http://static.devnology.co.kr/files/posts/yarnberry/yarnberry1.png)

프로젝트 생성 후에 version 을 지정해주어야 하나보다.  
create-react-app 이나 init 시에 옵션으로 yarn version 을 지정해 줄 수 있으면 편할 것 같다.  
그러면 yarn version 을 berry 로 바꿔주자.  
```
# yarn set version berry
```

그런데 node_modules 도 남아있고 .yarnrc.yml 파일도 생기지 않는다... 왠지 기본으로 생성해주어야 할 것 같은데 안생기네?  
일단 수동으로 만들어주었다.
```
.yarnrc.yml

nodeLinker: pnp
yarnPath: .yarn/releases/yarn-3.2.0.cjs
```

그리고 yarn install 을 실행시켜주면... 
```
# yarn install
```
![width=500px](http://static.devnology.co.kr/files/posts/yarnberry/yarnberry3.png)

야호! pnp.cjs 와 pnp.loader.mjs 가 자동 생성되었고 node_modules 가 삭제되었다.  
그리고 역시 잘 뜬다!  

![width=500px](http://static.devnology.co.kr/files/posts/yarnberry/yarnberry4.png)


그런데 이상하다? app 을 실행하면 node_modules 가 생성되어 버린다...  
그리고 그 안에는 babel-loader 하나만 들어있다. 넌 무엇인고?  

![width=500px](http://static.devnology.co.kr/files/posts/yarnberry/yarnberry5.png)

몇시간 동안 서치해봤지만 이거 도무지 없앨 수가 없다.  
그런데 이상한 점은 다른 프로젝트 (yarn 으로 세팅한...) 들에는 node_modules 가 없는데 create-react-app 으로 생성한 프로젝트에는 node_modules 가 전부 남아있다는 점이다. (babel-loader 와 함께)  

아마 react-scripts 가 실행할 때 npm 으로 뭔가 하는게 아닐까 싶은데...  
이 부분은 좀더 살펴봐야겠다... 너무나도 신경쓰여서 견딜수가... ㅠㅠ  

## Zero Install 설정

.gitignore 파일에 아래 설정을 추가해주면 zero-install 이 적용된다.  
yarn 의 의존성 모듈들을 버전관리에 추가해주고 안해주고의 차이  

**Zero Install 적용시**
```
.yarn/unplugged
.yarn/build-state.yml
```

**Zero Install 미적용시**
```
.yarn/*
!.yarn/releases
!.yarn/plugins
.pnp.*
```

이렇게 필수모듈만 설치한 후 yarn berry 를 적용했을 때와 적용하지 않았을 때를 총 모듈의 용량을 비교해보면 그 차이가 꽤 큰 것을 알 수 있다.  
최초 설정 이후의 크기인 것을 감안해보면 프로젝트가 진행되어감에 따라 그 차이는 더욱 클 것으로 생각된다.  
크기가 작아졌기 때문에 모듈들을 버전관리에 포함시키는 것도 크게 무리가 없다.  
![width=300px](http://static.devnology.co.kr/files/posts/yarnberry/yarnberry6.png)
![width=300px](http://static.devnology.co.kr/files/posts/yarnberry/yarnberry7.png)


## 마치며  

결론은 이거 물건이네? 이다.  
npm 만 10년 가까이 썼지만 굳이 넘어갈 필요가 있을까? 에서 안넘어갈 이유가 없지로 생각이 바뀌었다.  
다만 앞서 내가 겪었던 몇가지 설정상의 이상한 점들... 예를 들면...
yarn 으로 프로젝트를 생성해주었을 때 default 로 berry 로 지정해주지 않아 yarnrc.yml 을 수동으로 생성해주어야 하는점.
create-react-app 으로 생성한 프로젝트에서 babel-loader 와 함께 node_modules 가 자동으로 생성이 되는 점.  
등을 빼면 나머지는 모두 장점이 될 정도로 매력적으로 다가왔다.  
의존성 모듈들을 버전관리에 포함시켜줌으로서 팀원들간에 초기 설정 시에 막히는 부분들도 없을 것 같고 배포 시간도 크게 단축될 것으로 생각된다.

> 물론 아직 겉핥기로만 알아보아 좀더 살펴볼 필요가 있다.

마이그레이션도 크게 어렵지 않았는데 구버전의 NodeJs 를 사용하고 있는 프로젝트에서는 쉽게 되지 않았다.  
하나의 이슈를 해결하면 또 다른 이슈가 튀어나와 시간을 꽤 잡아먹을 것 같아 일단은 손을 놓은 상태...  

앞으로 신규로 프로젝트를 설정 할 때에는 yarn berry 를 이용할 것 같다.  
물론 npm 진영에서도 좋은 패키지 매니저를 출시하기를 바란다. 그 때 가서 넘어갈지 안넘어갈지는 고려해봐야 겠지만 사용자 입장에서 경쟁에 의해 좋은 서비스를 사용할 수 있다면 더 할 나위가 없겠다.  
