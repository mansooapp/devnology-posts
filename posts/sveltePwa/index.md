# Svelte 로 PWA 만들기

심심풀이로 만든 "오늘 뭐 먹지?" 앱을 PWA 로 제작해보았다.
vite-plugin-pwa 로 별다른 설정없이 어렵지 않게 PWA 구현이 가능하다.

일단 플러그인 먼저 설치해주고
```
# yarn add vite-plugin-pwa -D
```


아래와 같이 PWA 빌드 옵션 (vite-plugin-pwa) 을 추가해준다.
vite 빌드시에 PWA 용 아이콘은 빌드에 포함이 안될 수 있으니 public 폴더에 넣어준다.
```
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      useCredentials: true,
      includeAssets: ['favicon.ico', 'favicon.svg','robots.txt','apple-touch-icon.png'],
      manifest: {
        name: 'whatToEatToday',
        short_name: 'wtet',
        description: 'what to eat today',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'whatToEatToday-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'whatToEatToday-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'whatToEatToday-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    })
  ],
})
```

* 아이콘은 웹 무료 아이콘을 이용하였다. 상업적 이용이 가능하지만 제작자를 명시하여야 한다.
![width=500px](http://static.devnology.co.kr/files/posts/sveltePwa/3.png)
[Flaticon](https://www.flaticon.com/)

* 브라우저에서 열었을 때 다음과 같은 설치 아이콘이 나오면 된다
![width=500px](http://static.devnology.co.kr/files/posts/sveltePwa/4.png)

## PWA 설치하기
---

일단 크롬에서 접속해주고
![width=500px](http://static.devnology.co.kr/files/posts/sveltePwa/1.png)

상단의 공유하기를 눌러서 "홈화면에 추가"를 해준다.
![width=500px](http://static.devnology.co.kr/files/posts/sveltePwa/2.png)

그러면 바탕화면에 PWA 앱 아이콘이 추가된다.
![width=500px](http://static.devnology.co.kr/files/posts/sveltePwa/home_icon.png)

그러면 이렇게 주소창과 브라우저 인터페이스가 제거된 형태로 PWA 가 구동된다.
![width=500px](http://static.devnology.co.kr/files/posts/sveltePwa/pwa-mo.png)

기본적으로 Web 이기 때문에 PC 도 기본적으로 지원한다.
![width=500px](http://static.devnology.co.kr/files/posts/sveltePwa/pwa-pc.png)

크롬 디버거로 살펴보면 빌드 옵션을 확인 할 수 있다.
![width=1000px](http://static.devnology.co.kr/files/posts/sveltePwa/debugger.png)







