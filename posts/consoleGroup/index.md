# console.group 기능 활용하여 로그 그룹화하기




* console.group 으로 로그를 구분하여 출력할 수 있다.
잘 사용하면 디버깅할 때 편할 것 같다.

[[**console: group() method**](https://developer.mozilla.org/en-US/docs/Web/API/console/group)]


```
console.log("### Log Starts ###");
console.group();
  console.log("#### Log");
  console.log("#### Log");
  console.log("#### Log");

  console.group();
    console.log("##### Log");
    console.log("##### Log");
    console.log("##### Log");

    console.group();
      console.log("###### Log");
      console.log("###### Log");
      console.log("###### Log");
    console.groupEnd();
  console.groupEnd();
console.groupEnd();

console.log("Some Log");
```
![width=300px](http://static.devnology.co.kr/files/posts/consoleGroup/1.png)


* groupEnd 를 누락하면 잘못된 그룹에 로그가 묶일 수 있다.
![width=300px](http://static.devnology.co.kr/files/posts/consoleGroup/2.png)


* groupCollapsed 를 사용하여 로그가 닫힌 채로 출력할 수 있다.
```
console.log("### Log Starts ###");
console.groupCollapsed();
  console.log("#### Log");
  console.log("#### Log");
  console.log("#### Log");

  console.group();
  ......
```
![width=300px](http://static.devnology.co.kr/files/posts/consoleGroup/3.png)

[[**console: groupCollapsed() method**](https://developer.mozilla.org/en-US/docs/Web/API/console/groupCollapsed)]

