# Expo X ReactNative App 제작 및 배포 #2 - AppStore에 Publish 하기
&nbsp;

> 지난번에 이어서 Expo 로 빌드한 App 을 AppStore 로 퍼블리시 해보자. 머나먼 고난의 길이 기다리고 있으니  
안전띠 졸라 매시고... ㄱㄱ  

&nbsp;
## 개발자 계정 등록
우선 개발자 계정을 등록해야 한다.  
1년에 129000이나 한다!!! 재미로 해보기에는 너무 비쌈!!!  
게다가 계정이 만료되면 AppStore 에서 App 이 내려간다. ㅠㅠ  
울며 겨자먹기로 등록 ㅠㅠ  

**-> [애플 개발자 계정 등록](https://wp.swing2app.co.kr/knowledgebase/apple-developer/)**

&nbsp;
## AppStore Connect 접속  
https://appstoreconnect.apple.com

MyApps 로 들어가자  
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-1.png)

그러면 그동안 배포했던 모든 App 들의 히스토리가 나오게 되는데 신규등록을 클릭해주자.  
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-2.png)

아래 정보 입력 후 Create  
Bundle ID 는 expo 로 App Build 시 자동으로 생성되는 값을 선택  
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-3.png)

&nbsp;
## App 퍼블리시 설정
이제부터 시작이다... ㅠㅠ 너무 어렵다... ㅠㅠ  
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-4.png)


이제 스크린샷을 올려야 하는데 정확한 사이즈를 요구한다. 폰에서 직접 캡쳐한건데도 사이즈가 다르다... ;;  
게다가 반응형 웹앱이라 모든 기종 다 지원하는데 기종별로 스크린샷 다 캡쳐해서 올려야한다.  
넘나 귀찮은거... ㅠㅠ  
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-5.png)
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-6.png)
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-7.png)
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-8.png)

모든 필수항목들을 입력해준다.  
스크린샷 같은 경우는 맥용 기본 툴인 Preview 를 사용해 사이즈를 조정해주었다.  
폰에서 맥으로 넘어오면서 사이즈가 변형된 듯하고 Width 를 요구하는 사이즈로 맞춰주니 Height 가 약간 모자르다.  
이미지가 찌그러지는 걸 감안하고 정확히 맞춰주자.  

다 등록됐다.  
![width=1000px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-9.png)

## 빌드된 App 을 업로드하기 (Transporter 이용)  
AppStore 에서 개발자 사이트로 전송하는 Transporter 앱을 다운받자.  
사이트 내에서는 불가능한 것 같고 몇가지 방법이 있는데 나는 Transporter 가 직관적이고 편해서 선택!  
(+) 버튼을 눌러 빌드된 버전을 업로드하고 Deliver 클릭!  
(그러고 보니 앱아이콘이 없넹...)  
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-10.png)

바로 에러 발생...  
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-11.png)


AppStore 아이콘은 Alpha 값을 0으로 주어야 한다.  
Preview App 에서 Alpha 값을 제거해주고 다시 빌드 ㄱㄱㄱ  

**Preview > File > Export > Un-click Alpha and export the file as png**  

![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-12.png)

성공!  
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-13.png)

Transpoter 에는 AppIcon 이 없는 걸로 나오는데 Apple 개발자 페이지에 가보면 정상적으로 표시된다.  
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-14.png)


&nbsp;
## 개인정보처리방침
샘플 URL 을 첨부한다. 개인 사이트가 없는 경우에는 블로그나 클라우드를 활용하자.  


&nbsp;
## 나머지 설정  
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-15.png)

Services, TestFlight, Xcode Cloud 탭의 설정은 따로 입력할 필요는 없다.  

모든 입력값을 완료한 후 Submit 버튼을 누르면 심사가 시작된다.  
경험상 이 과정에서 몇가지 입력값이 잘못되었거나 부적절한 컨텐츠가 있을 경우 심사에서 거절당한다.  
![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-16.png)


## 마치며
ㅎㅎㅎㅎㅎㅎㅎㅎㅎ  

결국 마지막에 심사에서 걸렸다.  
이유는 컨텐츠가 너무 빈약해서...  

![width=500px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-17.png)

![width=1000px](http://static.devnology.co.kr/files/posts/publishapp2/publishapp2-18.png)

너무 안일하게 생각했나? 그래도 WebView 하나에 html 하나있는 앱쪼가리가 통과될리가 없지...  
이래서 앱스토어 퀄리티가 좋다 싶다~  
여기까지 온게 아깝기도 하니깐 좀 더 컨텐츠를 보강해서 다시 심사받을 생각.  
