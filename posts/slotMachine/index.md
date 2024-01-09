# CSS3 Transform 을 이용하여 슬롯머신 구현하기

CSS3 부터 애니메이션 요소가 강화되어 transform 속성으로 회전/이동/확대/축소 를 간편하게 구현할 수 있게 되었다.
그래서 간단하게 슬롯머신을 구현해보려하다가 도중에 회사 근처의 랜덤 맛집 추천 기능으로 기획을 틀게 되었다.

transform 은 Element 의 회전, 변경, 확대, 축소를 가능하게 해주는 CSS3 속성으로 작성은 아래와 같이 한다.
```
/* Keyword values */
transform: none;

/* Function values */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* Global values */
transform: inherit;
transform: initial;
transform: revert;
transform: revert-layer;
transform: unset;
```

[Developer.Mozilla - transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

이를 이용한 슬롯머신의 개념 및 구현자체는 매우 간단하다.
![width=500px](http://static.devnology.co.kr/files/posts/slotMachine/html_structure.png)

최초 위 구조와 같이 Slot 들을 나열시키고 하나의 Slot 만 노출되도록 container 와 box 로 감싸준다.
box 내부에 하나의 slot 만 노출되도록 조정하여 초기화를 완료한다.

```
<style>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.box {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: transform 1s ease-in-out;
}

.item {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  font-size: 40rem;
}

<html>
<div class="container">
  <div class="box">
    <div class="item">
      <span>오늘 뭐<br />먹지?</span>
    </div>
  </div>
</div>

```

이후 event 발생 시 box 를 특정위치로 transform 시켜주면 완료.
Slot 의 이동방향을 바꾸고 싶다면 translateY 를 반대로 시켜주면 된다.
```
box.style.transitionDuration = `2s`;
box.style.transform = `translateY([SlotHeight] * [SlotCount]px)`;
```

만약 슬롯들이 돌아가는 애니메이션을 극대화시키고 싶다면 최초 로딩된 데이터를 복제해서 덧붙여주면 된다.
(최초 transform 위치나 최종 위치 재계산 필요)

transition-duration 속성은 애니메이션이 완료될때까지의 시간을 의미한다.
초기값은 0초 이며 아래와 같이 부여할 수 있다.
```
/* <time> values */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;

/* Global values */
transition-duration: inherit;
transition-duration: initial;
transition-duration: revert;
transition-duration: revert-layer;
transition-duration: unset;
```

## 실제 구현된 <오늘 뭐먹지> 슬롯머신
<iframe style="width: 600px; height: 600px;" src="http://static.devnology.co.kr/files/apps/whatToEatToday/index.html" class="sc-cxabCf iuXnLX"></iframe>