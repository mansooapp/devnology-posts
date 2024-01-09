# Session Management

* NodeJS
* MongoDB (Mongoose)
* JWT
* Access Token
* Refresh Token
* Redis




설정 중 모듈을 찾지 못하는 이슈가 있었는데 아래 모듈을 설치해줌으로서 해결하였다.

```
yarn add -D @yarnpkg/pnpify
```

import express from 'express';
Cannot find module 'express' or its corresponding type declarations.ts(2307)


tsconfig.json 에 
"paths": {
  "@/*": ["./src/*"]
},
설정 시 
Error: Cannot find module ‘src/config’ 같은 에러가 발생하면서 경로를 잘 찾지 못하는 경우가 있는데
tsconfig-paths 로 해결할 수 있다.
yarn add -D tsconfig-paths

모듈을 설치하고 package.json 에서 스타트 스크립트를 수정하자.

```
"dev": "tsc-watch --onSuccess \"ts-node -r tsconfig-paths/register dist/src/app.js\"",
```

해결 완료!
