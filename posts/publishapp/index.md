# Expo X ReactNative App 제작 및 배포 #1 - Expo 프로젝트 생성


예전에 expo 로 app 을 만들어본적이 있다. 이번에도 단순한 웹앱을 WebView 에 넣고 App 으로 제작하고 싶어
Expo 를 다시 꺼내들었는데 돌아버리는줄 알았다.  
잘 돌아가던 App 이 빌드에서 막히질 않나... 하나 고치면 에러가 하나 터지고, 도저히 하다하다 안되서
Expo Init 으로 스켈레톤 Package 를 빌드하려고 해도 에러가 발생하는 정도여서 너무 스트레스를 받았다.

많이들 사용하고 있는 툴이라 나만의 문제일 수도 있겠지만 레퍼런스도 부족하고 공식문서에서 하라는 대로 해봐도 잘 안되는 경우가 많아 맨붕이었다...

쉽게 RN App 을 만들수있게 해주고 빌드에서의 편의성은 나처럼 간단한 하이브리드앱 제작자에게는 너무 고마운 것이지만서도
아쉬운점이 있긴 하다.


## Expo 설정

Expo 나 RN 의 버전이 예전버전이라 전부 새로 설치하기로 했다.  
(사실 그냥 예전버전으로 해보려다 에러가 자꾸 발생해서 처음부터 다시 하는거임...)  

* Expo 설치
```
# npm install -g expo-cli
# expo --version
5.4.3
```

* App.json 설정
예전에 성공한 설정을 가져왔다.

```
{
  "expo": {
    "name": "astar-simulator",
    "githubUrl": "https://github.com/cheonsoo/astar-simulator",
    "slug": "astar-simulator",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icons/ios/120.png",
    "splash": {
      "image": "./assets/icons/ios/AppScreen.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "astar-simulator",
      "buildNumber": "1.0.0"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/icons/android/ic_launcher_normal/res/mipmap-xxxhdpi/ic_launcher.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.astarsimulator",
      "versionCode": 1
    }
  },
  "web": {
    "favicon": "./assets/icons/favicon.png"
  },
  "name": "astar-simulator"
}

}
```

* Expo 프로젝트 초기화
```
# expo init myapp
```
![width=500px](http://static.devnology.co.kr/files/posts/publishapp/publishapp1.png)

아래와 같이 프로젝트가 초기화 되었다.

![width=500px](http://static.devnology.co.kr/files/posts/publishapp/publishapp2.png)

# WebView 에 외부 HTML embed 하기
간단한 웹뷰 제작이 목표이다.  
미리 제작한 html 을 embed 하여 배포까지 가보자!  
components 폴더에 에 WebView component 를 만들어주고 App.js 에 import 해주자.  
```
# npm i react-native-webview
```

* /components/WebView.jsx
```
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebView = () => {
  const uri = 'http://someurl.com/index.html';

  return (<View style={styles.container}>
    <WebView source={{ uri: uri }} style={styles.webview} />
  </View>);
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  webview: {}
});

export default AstarSimulator;
```

이러면 얼추 완성.  

## Expo IOS App Build
```
# expo build:ios
```

* App Icon 제작하기
여기에 너무 자세히 나와있다.
[Figma 로 App 아이콘 제작](https://taehoon95.tistory.com/118)

* IOS Build 결과
빌드를 시작하면 Expo 서버 큐에 대기하게 된다. 일단 큐에 들어가면 프로세스를 종료해도 된다.
시간은 좀 걸리지만 무료로 쉽게 빌드할 수 있는게 어딘가...
돌려놓고 자다 일어나면 다 되있겠지.

```
# expo build:ios
expo build:ios has been superseded by eas build. Learn more.

Run the following:

› npm install -g eas-cli
› eas build -p ios

expo build:ios will be discontinued on January 4, 2023 (245 days left).

✔ Choose the build type you would like: › archive
Checking if there is a build in progress...

Accessing credentials for bluejay in project astar-simulator
✔ Do you have access to the Apple account that will be used for submitting this app to the App Store? … yes

› Log in to your Apple Developer account to continue
✔ Apple ID: … mansoo1500@gmail.com
› Restoring session /Users/mansoo/.app-store/auth/mansoo1500@gmail.com/cookie
› Team Cheonsoo Park (SU25942D3L)
Apple servers threw an expected error from: https://appstoreconnect.apple.com/olympus/v1/session
› Session expired Local session
› Using password for mansoo1500@gmail.com from your local Keychain
  Learn more.
✔ Logged in New session
› Team Cheonsoo Park (SU25942D3L)
› Provider Cheonsoo Park (122503264)
✔ Bundle identifier registered astar-simulator
✔ Synced capabilities
✔ Fetched Apple distribution certificates
✔ Successfully validated Distribution Certificate against Apple Servers
✔ Fetched Apple push keys
✔ Successfully validated Push Key against Apple Servers
⠴ Getting Provisioning Profile info from Apple's Servers...
✔ Successfully fetched Provisioning Profile BQYG2GX8V4 from Apple Servers
✔ Updated provisioning profile (284G2QHD5G) with distribution certificate (554YS23WKX)
Successfully configured Provisioning Profile BQYG2GX8V4 on Apple Servers with Distribution Certificate 554YS23WKX
Successfully assigned Provisioning Profile to @bluejay/astar-simulator (astar-simulator)

Project Credential Configuration:
  Experience: @bluejay/astar-simulator, bundle identifier: astar-simulator
    Provisioning profile (ID: 284G2QHD5G)
    Apple Team ID: SU25942D3L,  Apple Team Name: Cheonsoo Park (Individual)

  Distribution Certificate - Certificate ID: 554YS23WKX
    Apple Team ID: SU25942D3L,  Apple Team Name: Cheonsoo Park (Individual)
  Push Notifications Key - Key ID: 3U2C33T8QX
    Apple Team ID: SU25942D3L,  Apple Team Name: Cheonsoo Park (Individual)

› Expo SDK: 44.0.0
› Release channel: default
› Workflow: Bare

- Optimization: Project may contain uncompressed images. Optimizing image assets can improve app size and performance.
  To fix this, run npx expo-optimize. Learn more.

Building optimized bundles and generating sourcemaps...
Starting Metro Bundler
Android Bundling complete 15409ms

Bundle                     Size
┌ index.ios.js           863 kB
├ index.android.js       864 kB
├ index.ios.js.map      3.37 MB
└ index.android.js.map  3.37 MB

💡 JavaScript bundle sizes affect startup time. Learn more.

Analyzing assets
Saving assets
No assets changed, skipped.

Processing asset bundle patterns:
- /Users/mansoo/Workspace/apps/astar-simulator/**/*

Uploading JavaScript bundles
Publish complete

📝  Manifest: https://exp.host/@bluejay/astar-simulator Learn more.

Checking if this build already exists...

Build started, it may take a few minutes to complete.
You can check the queue length at https://expo.dev/turtle-status

You can monitor the build at

 https://expo.dev/accounts/bluejay/projects/astar-simulator/builds/d8f0b4e8-a386-4b25-ba11-cc762e189b98

Waiting for build to complete.
You can press Ctrl+C to exit. It won't cancel the build, you'll be able to monitor it at the printed URL.
⠏ Build queued...^C
```

## Trouble Shooting

expo-cli 글로벌 최신버전으로 업데이트
```
Error: Problem validating fields in app.json. See https://docs.expo.io/workflow/configuration/
 • should NOT have additional property 'nodeModulesPath'.
```

app.json 에서 owner 필드 제거
```
You are not authorized to build @cheonsoo/astar-simulator. The account name provided under owner may be incorrect or invalid.
```

## 마치며
이렇게 Expo 와 ReactNative 로 간단한 웹앱을 만들어보았다.  
WebView 에 내부 정적 파일들을 불러올 수도 있지만 그렇게 되면 웹영역이 수정될 때마다 앱배포를 다시 해줘야 하기 때문에  
마침 S3 를 따로 운영하고 있기도 하기 때문에 외부에서 가져오도록 했다.  

Expo 는 초심자에게 아주 편리한 초기 설정과 디버깅 툴을 제공해주기 때문에 처음 접하는 사람들에게는 강추해볼만하다.  
하지만 Native 영역 제어에 한계가 있고 빌드시간이 오래걸린다는 점, 그리고 트러블 슈팅에 애 먹은 점들은 (레퍼런스가 좀 적은 느낌이다) 다음엔 expo 없이 React Native 만으로도 App 을 제작해보아야 겠다는 생각이 들게했다.  
물론 간단한 웹앱 제작에는 이만한 툴이 없는 것 같기도 하다.  

다음으로는 이렇게 빌드된 App 을 실제로 AppStore 에 Publish 를 해보도록 하자.  
