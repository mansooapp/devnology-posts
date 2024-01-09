# 이 블로그는...

&nbsp;

Next.JS + React.JS 로 제작된 Markdown 기반의 개인 블로그입니다.  
개인적인 생각정리와 관심사를 모아둘 블로그를 찾다가 이왕 하는거 직접 구현해보자는 생각으로  
관심있고 알고있는 기술을 기반으로 개발했습니다.  

&nbsp;

아무래도 서버에서만 할 수 있는게 많기 때문에 백엔드는 일단 운영해보려고 합니다.  
지금은 AWS EC2 에 올라가있는데 여러가지 크롤러나 Imagemagick 으로 이미지 수정툴도 만들어보고 싶네요...  
SEO... 는 그냥 취미 블로그인데 방문자가 늘어나면 안되니.. 일단은 하지 않고 있습니다.  
운영비용은 좀더 봐야겠지만 월 만원 이하 정도면 운영해볼 만 할 것 같은데 넘어가면... ㅠㅠ  
MD 파일이나 기타 정적 리소스들은 여전히 S3 에서 가져오고 있습니다.  

> 역시 EC2 비용이 많이 나오는군요...  
> S3 를 WebServer 로 이용하고 있고 Static Resource 들도 어느정도 운용하고 있고 비용이 거의 나오지 않았는데...  
> t3.medium 에 node 인스턴스 하나 운영하는데 이정도면 오래가지는 못하겠네요...  
> EC2 비용만 월 4.5만원이라면...
> CSR 로 운영하는 방향으로 다시 생각해봐야 할 것 같습니다... ㅠㅠ

![width=800px](http://static.devnology.co.kr/files/posts/about/aws_invoice_202205.png)

&nbsp;

## 관심가는 기술들...  

가장 관심이 많이 가고 공부도 많이 했던 것은 ReactJS 였습니다. 애초에 어떤 것을 공부해볼까 하는 시기에 커뮤니티도 활발하고
레퍼런스도 많은 프레임워크가 ReactJS 였고, Facebook 이라는 대기업에서 유지보수 한다는 점이 끌렸었고, 시장에서도 많이 찾는 기술이라는 점이 좋아서 시작은 React 였죠.  
React 를 배워두면 React-Native 도 손쉽게 접할 수 있어 Mobile Application 제작까지도 가능하다는 점이 끌렸던 것 같습니다.  

&nbsp;


![width=300px](http://static.devnology.co.kr/files/posts/about/NodeJS.png)
![width=300px](http://static.devnology.co.kr/files/posts/about/ReactJS.png)
![width=300px](http://static.devnology.co.kr/files/posts/about/VueJS.png)
![width=300px](http://static.devnology.co.kr/files/posts/about/AngularJS.jpg)
![width=300px](http://static.devnology.co.kr/files/posts/about/ReactNative.png)
![width=300px](http://static.devnology.co.kr/files/posts/about/Electron.png)

&nbsp;

프론트엔드 개발자로 10년 가까이 근무해오면서 (물론, 대부분의 조직이 풀스택을 요구하는 경우가 많아 대부분 풀스택으로 근무해왔지만...) 다양한 프레임워크를 접해보았지만 무엇하나 내 것이다 라고 내세울 만한 것은 없었던 것 같네요...  
예전 스타트업에서 근무했을 때 사용했던 이름없는 자체 UI 프레임워크 포함... 잊고 싶은 기억...  

그래서 이 블로그도 해보고 싶었던 것들, 잊혀져 가던 것들, 굳어져 가는 머리도 유연하게 할 겸 만든 하나의 실험실 입니다.  
역시 초반에 누군가가 세팅해둔 babel+webpack 이나 routing 같은 것들을 사용만 하다보니 초기 세팅같은 부분은 엄청 새롭네요.  
역시 이런식으로 처음부터 다시 시작하는 건 좋은 선택이었던 것 같습니다.  

그래도 언제 어디서 필요로 할지 모르고 개인적으로 관심이 많은 React 로 이 블로그를 제작해봅니다.  

이 블로그는 아래의 기술들을 사용하여 제작되었습니다.  

## Front-end
```
* NodeJS (v16.13.0)
* TypeScript (v4.5.2)
* ReactJS (v17.0.2)
* Babel (v7.16.0) + Webpack (v5.65.0)
* React-Router (v6.1.1)
* Redux (v7.2.6)
* Styled-Component (v5.3.3)
* Yarn (Berry)
```

## Back-end
```
* NodeJS (v16.13.0)
* TypeScript (v4.5.2)
* Next.JS
* Yarn (Berry)
* MongoDB ()
* Mongoose (v6.1.7)
```

입니다...  

TypeScript 는 큰 규모의 프로젝트이면 왠만하면 사용하는게 좋다고 생각하지만 막상 새로운 회사에 들어가보면 사용하지 않는 곳이 많이 있더라구요.  
그래서 이 블로그를 제작할때는 개인적으로 공부도 하고 까먹지 않으려고 씁니다만... 역시 TS 는 코딩량이 많네요. 프로젝트에 따라 잘 선택해서 사용해야 한다고 생각합니다.  

아무튼 차츰차츰 발전시켜 나갈 생각입니다...  
실험적인 것들을 공부하고 연구하며 올려두고 이를 어떻게 설계하고 해결하였는지도 포스팅하고...  
현재는 누가와서 보지도 않을 것 같지만요...  

실수로 들어오신 모든 분들...  
# 환영합니다!
