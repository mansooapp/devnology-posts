# JavaScript 의 동작원리

&nbsp;

## JavaScript as a Single Threaded Language
JavaScript 는 Single Thread 언어이다라고 많이들 말합니다. 이건 사실입니다.  
JavaScript 는 실제로 한번에 한개의 프로세스만 처리할 수 있습니다.  
그렇다면 JavaScript 는 어떻게 Ajax 호출을 보내고 브라우저를 렌더링하며 어떤 응답이 오기전에 일련의 비즈니스 로직들을 처리할 수 있는 것 처럼 멀티쓰레드같은 동작을 할 수 있을까요?  

## JS Engine, Event Loop and Call Stack
그 이유는 런타임으로서의 브라우저는 단순히 런타임 뿐만이 아니라 다른 많은 기능들을 제공해주고 있기 때문입니다.  
DOM Element 제어, Ajax 호출, setTimeout 이 그것인데 이것들을 통칭하여 WebAPIs 라고 합니다.  

이제 여기서 Event Loop 가 필요합니다. Event Loop 는 CallStack 과 CallbackQueue 를 끊임없이 감시하면서 한가지 작업을 합니다. CallStack 이 비어있을 경우 CallbackQueue 에 있는 Task 들을 CallStack 으로 Push 하는 것이죠.  

일단 아래 이미지를 보시죠. 

![width=800px](http://static.devnology.co.kr/files/posts/howDoesTheJsWork/structure_of_runtime.png)

[[**출처 - Rod Machen - JS 런타임(브라우저)의 구조**](https://codenotcode.com/my-event-loop-beebef81cd46)]


보시다시피 JS 엔진은 하나의 콜스택만을 가지고 있습니다. 싱글 쓰레드란 소리죠.  
콜스택은 코드가 실행되면 LIFO 의 형태로 Task 들을 처리하게 됩니다.  
이 콜스택에 쌓인 Task 중 브라우저의 WebAPIs 의 기능들(setTimeout, Ajax Call) 을 사용할 일이 있으면 WebAPIs 는 해당기능을 수행하고 호출 시 넘어온 콜백함수들을 콜백큐에 담습니다.

> Event Loop 는 여기서 콜스택과 콜백큐를 끊임없이 감시하면서 콜스택이 비었을 때 콜백큐에 있는 Task 들을 콜스택으로 이동시킵니다.

그런데 Call Stack 이란 용어는 어딘지 모르게 친숙하지 않나요?  
기억이 나지 않으시더라도 사실 저희가 자주 접하고 있는 용어입니다.  
console 에서요.  
![width=800px](http://static.devnology.co.kr/files/posts/howDoesTheJsWork/maximum_call_stack.png)

저희가 항상 마주하고 있던 용어입니다. 말그대로 call stack 에 너무많은 Task 가 쌓여 런타임이 자동적으로 프로세스를 종료시켜버린 겁니다.  
런타임마다 다르지만 CallStack 에 담을 수 있는 Task 의 최대치는  
* Chrome: 10,000
* Node.JS: 11,000
* Firefox: 50,994

정도라고 합니다. Chrome 과 Node.JS 는 같은 엔진을 사용하니 비슷하다고 쳐도 Firefox 는 의외네요.  
하지만 CallStack 에 5만건이상의 Task 가 쌓일 일은 없을 듯하니 크게 중요하지 않은 것 같습니다.  

## 예제를 한번 봐볼까요?
아래의 예제는 제가 공부했던 동영상 강좌에서 가져왔습니다.  

&nbsp;

* 아래와 같은 코드가 있다고 해볼까요? 간단한 코드라 실행순서를 예측하는 건 쉬울것 같네요.  
이제 좀 더 정확히 어떻게 구동되는 건지 알아보겠습니다.  
![width=800px](http://static.devnology.co.kr/files/posts/howDoesTheJsWork/example1.png)

* 처음으로 main 스크립트가 실행이 되고 첫번째 라인인 console.log 가 stack 에 쌓입니다.  
그리고 log 를 찍고 스택에서 빠져나옵니다.  
![width=800px](http://static.devnology.co.kr/files/posts/howDoesTheJsWork/example2.png)

* 그 다음은 setTimeout 이네요. 말씀드렸듯이 setTimeout 은 JS 엔진에서 실행되지 않습니다. 브라우저의 영역이죠.  
![width=800px](http://static.devnology.co.kr/files/posts/howDoesTheJsWork/example3.png)

* setTimeout 은 브라우저에서 제공하는 webapis 의 기능중 하나이기 때문에 js 엔진은 webapis 에게 실행을 일임합니다.  
![width=800px](http://static.devnology.co.kr/files/posts/howDoesTheJsWork/example4.png)

* 그리고 setTimeout 은 stack 에서 빠져나옵니다.  
![width=800px](http://static.devnology.co.kr/files/posts/howDoesTheJsWork/example5.png)

* 그 다음 명령줄은 다시 console.log 이네요. log 를 찍고 console.log 가 stack 에서 빠져나오고 stack 이 클리어 되며 스크립트가 종료됩니다.  
그런데 여기 보셨나요? setTimeout 이 webapis 에 의해 실행되고 아직 cb 이 호출되기 전인데 다음 라인인 console.log 로그가 실행되었습니다.  
5000ms 동안 블로킹되지 않구요. 이 부분이 JavaScript 의 블록/논블로킹, Sync/Async 프로세스입니다.  
그리고 이 부분이 JavaScript 가 멀티 쓰레드처럼 동작하는 원리입니다. 런타임의 도움을 받아 가능했었네요!  
![width=800px](http://static.devnology.co.kr/files/posts/howDoesTheJsWork/example6.png)

* 스크립트는 종료되었지만 아직 webapis 는 setTimeout 에 의해 5000ms 동안 대기를 하고 있었죠. 시간이 지나면 cb 를 CallbackQueue 에 Push 합니다.  
![width=800px](http://static.devnology.co.kr/files/posts/howDoesTheJsWork/example7.png)

* 그런데 Event Loop 가 Stack 을 계속 감시하다 보니 비어있습니다. 근데 마침 Callback Queue 에 Task 가 담겨있네요.  
![width=800px](http://static.devnology.co.kr/files/posts/howDoesTheJsWork/example8.png)

* 그래서 cb 는 다시 JS엔진의 영역인 Stack 으로 돌아옵니다.  
![width=800px](http://static.devnology.co.kr/files/posts/howDoesTheJsWork/example9.png)

## 좀 더 자세히

> Callback Queue 에 담기는 콜백함수들은 Micro Task Queue 와 Macro Task Queue 로 나뉘어 담기게 되고, 이 두개의 큐도 우선순위에 따라 Event Loop 에 의해 Call Stack 으로 옮겨지게 됩니다.  
(이 부분은 길어지게 될 것 같아 별도의 포스팅에 나누어 설명해야 할 것 같습니다. 예전에 본 좋은 동영상이 있는데 이 부분을 정리하면 좋을 것 같습니다.)

동영상에서도 다룬 내용이긴 한데... 만약에 말이죠...
동일한 코드에 setTimeout 의 delay 를 0으로 주면 어떨까요? setTimeout 이 즉시 실행되면서 cb 가 호출될까요? 그리고 그 다음으로 console.log('JSConf') 가 실행될까요?  

```
console.log('hi');
setTimtout(function cb() {
  console.log('there');
}, 0);
console.log('JSConf');
```

정답은 그렇지 않다 입니다. 동일한 코드에 setTimeout 의 delay 만 0으로 주었죠.  
setTimeout 이 webapis 에 의해 실행되고 cb 가 CallbackQueue 에 담기는 것까지는 동일합니다.  
그리고 Event Loop 는 CallStack 과 CallbackQueue 를 감시하고 있습니다.  
그런데 Event Loop 가 CallbackQueue 에 담긴 Task 를 CallStack 으로 가져오는데에는 한 가지 조건이 있습니다.  
그건 CallbackQueue 가 비어있어야 한다...  이죠.
그렇기 때문에 큐에 담긴 Task 는 main() 스크립트가 종료된 이후에 스택으로 Push 되어 실행되게 됩니다.

Output 은 이전 예제와 동일한
```
hi
JSConf
there
```
가 될 것 입니다.  

마찬가지로 setTimeout 이후에 JS 엔진에서 실행되지만 시간이 오래걸리는 for loop 가 있다고 가정해보죠.  
loop 의 예상시간이 대략 2000ms 라면?  
setTimeout 의 cb 는 2000ms 뒤에 실행되게 되겠죠.  
여기서 알 수 있는 점은 setTimeout 코드를 작성할 때 Callback Function 이 개발자가 인자로 넘겨준 delay 뒤에 실행되는 되는 것을 보장해주지 못한다는 겁니다.  

> setTimtout 의 delay 는 최소보장시간 입니다.

CallStack 에 담긴 Tasks 의 유무와 별개로 외부적인 요소, Network 나 CPU 의 성능, 기타 등등의 요소에 따라 cb 의 호출 시기가 정해지게 된다는 겁니다.  
더욱 사용에 조심해야 겠네요.  

**[setTimeout | Web API](https://developer.mozilla.org/ko/docs/Web/API/setTimeout)**  

![width=800px](http://static.devnology.co.kr/files/posts/howDoesTheJsWork/setTimeout_Web_API.png)

&nbsp;

---

## 마치며

제가 이해한 Event Loop 의 원리는 해당 동영상에서 대부분 차용되었습니다.  
여러번 보아도 좋을 훌륭한 강좌입니다. 재미도 있어요.  

**[What does the EventLoop? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ&list=PLELer7EJwt_zunr35lmkdIWCdfnNPdOWl&index=16)**

**[Jake Archibald | Event Loop & Micro Tasks | JSConf Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0)**

이로서 JS 가 비동기 작업을 처리하는 방식, 싱글쓰레드이지만 멀티쓰레드처럼 동작하는 원리를 겉핥기로 나마 이해하게 된 것 같습니다. JavaScript 런타임에 의해 가능했었네요. 이 포스트에서는 브라우저였죠.  

그런데 JS 진영에는 유명한 런타임이 하나 더 있죠. 바로 Node.JS 입니다.  

![width=500px](http://static.devnology.co.kr/files/posts/howDoesTheJsWork/nodejs.png)

NodeJS 는 Native Code 들을 V8 JS 엔진에 의해 실행시키고 브라우저의 WebAPIs 와 같은 라이브러리인 libUV 등에 의해 이벤트나 논블로킹 I/O 모델을 구현하고 있습니다.  
그리고 NodeJS 는 libUV 에 의해 실제로 멀티쓰레드를 구현하고 있습니다! 멀티쓰레드인 것 처럼 동작하는게 아니라요!  

이건 다음 포스트에 작성할게요. ㅎㅎㅎ

아직 많은 분들이 방문하지 않는 블로그이지만 개인적으로 이렇게 정리하면서 새로이 얻게 되는 정보들과 확립되는 지식들이 많은 것 같아요.  
개인적으로 이론을 더 명확히 하기 위해서라도 정리를 계속하려 합니다.  

그럼... 이만  