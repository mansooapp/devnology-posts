# Node.JS 의 Event Loop 이해하기

## 시작하기 앞서
이 포스트는 글쓴이도 정확한 지식을 갖고 있지 않기 때문에 수많은 웹검색을 통해 최대한 이해하려 노력하고,  
이를 정리해놓은 것이다.  
앞으로도 잘못된 점이나 이해가 부족한 부분들은 수정, 보완해나가겠지만 이 글을 읽으시는 분들은 Node.JS 의 Event Loop 를 이해하기 위해 거쳐가는 하나의 페이지라고 생각해주시면 좋겠다.  

## Node.JS 는 싱글 쓰레드?
우선 이 말은 반은 맞고 반은 틀리다. NodeJS 는 하나의 Main Thread 를 갖고 있다. 그렇기 때문에 하나의 Thread 로 하나의 실행흐름만을 가지고 있기 때문에 일련의 작업이 끝나기 전에는 아무것도 할 수 없어야만 한다. 하지만 네트워크, I/O 작업이 발생한 경우 이를 비동기 적으로 블로킹 없이 처리하고 있다.
그 기반에는 Event Loop 가 있다.

## Event Loop?
Java 나 기타 블로킹 언어체계에서 NodeJS 로 넘어온 개발자들이 가장 많이 헷갈려하는게 JavaScript 의 비동기 처리에 대한 이해이다.  
특별한 조치없이 동기처리 비즈니스 로직을 작성할 수 있었지만 JS 에서는 이와 동일하게 코드를 작성한다면 개발자가 의도한 대로 동작하지 않게 된다.  
File I/O 와 Loop 의 조합이 가장 큰 예가 되겠네요.  

Event-Driven 은 비동기처리와 함께 Java Script 를 수식하는 또다른 방식입니다.  
Event Driven 기반 시스템에서는 특정 이벤트가 발생할 때 할 행동을 미리 등록합니다.  
우리가 흔희 이야기 하는 Callback 이 그것이죠.


## libUV



## Node.JS 의 Event Loop


이벤트 루프(Event Loop) 는 노드에서 비동기 코드를 처리하는데 사용된다.  



```
# UV_THREADPOOL_SIZE=2 node thread.js
```


## 참고한 포스팅들
[nodejs-event-loop-workflow](https://evan-moon.github.io/2019/08/01/nodejs-event-loop-workflow/)
[NodeJS-Event-Loop](https://velog.io/@ckstn0777/NodeJS-Event-Loop)
[Mozilla - EventLoop](https://developer.mozilla.org/ko/docs/Web/JavaScript/EventLoop)
[Nodejs - the-nodejs-event-loop](https://nodejs.dev/learn/the-nodejs-event-loop)
[NodeJS 의 내부 동작원리](https://sjh836.tistory.com/149)