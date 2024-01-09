# Thread Pool in libUV

## Node.JS 가 멀티 쓰레드처럼 동작하게 해주는 libUV
libUV 는 리눅스의 커널을 추상화한 Wrapper 입니다. NodeJS 는 사용자의 코드를 위에서 부터 한줄한줄 CallStack 에 담아 실행을 하면서
어떤 코드를 동기로 처리할지 비동기로 처리할지 결정합니다.  
