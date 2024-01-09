# ReactNative 로 계산기를 만들어 보고 Expo 로 AppStore 배포하기

ReactNative 로 간단한 Hybrid App 를 만들고 Expo 로 실제로 AppStore 에 배포해보았다.  
React 로 간단한 웹앱을 제작할 수 있다길래 시작했는데 실제로 그리 어렵지 않게 만들수 있었다... 지만...  
그 외적인 부분에서 시간을 크게 잡아먹었다. AppStore 개발자 등록이나 배포 설정 및 심사, App 아이콘 제작 등...  
Android 로 배포하긴 했지만 AppStore 보단 간단했던 것 같다. 심사에 걸린 시간도...  
외적인 요소들을 해결하는데는 한달이상 걸린 것 같았다.  

> 제일 어려웠던 점은 아이콘 제작

아이콘 제작은 여러 사이트를 참고하였지만 아래 사이트가 가장 친절하게 알려주고 있는 듯 싶다.  

**>> [Figma 로 App 아이콘 제작](https://taehoon95.tistory.com/118)**

글론 한번에 되지는 않았다. 분명히 png 파일인데 expo build 시에 아이콘 이미지가 png 가 아니라는 에러메세지가 나온다던지,  
사이즈 오류라던지...  

허접하지만 개인적인 용도 (마누라랑 서로 개인 지출 요청할 때 증빙자료로...)로 사용중인데 꾀나 쓸만하다... ㅎㅎ
와이프랑은 공동계좌를 운영하고 있고 가끔 개인용돈으로 공동지출할 꺼리를 계산하는 경우가 있는데
이럴 때 개인 경비가 발생하였으니 돈주세요~ 할때... ㅎㅎㅎ


|**[개인지출이 발생하여 공동계좌에서 입금요청]**|**[혹은 여행경비 N빵]**|
|:---:|:---:|
| ![width=400px](http://static.devnology.co.kr/files/posts/varcal/varcal_image_1.jpeg) | ![width=400px](http://static.devnology.co.kr/files/posts/varcal/varcal_image_2.jpeg) |


우여곡절 끝에 완성된 App 은 여기서 확인해볼 수 있다.

**[Download VarCal in AppStore](https://apps.apple.com/kr/app/varcal/id1546728207)**