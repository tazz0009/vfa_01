# vfa - vue firebase app with vuetify

Vue와 Firebase로 나만의 사이트 만들기 따라 만들기

## chap01 proejct setting (02/105)

## chap02 firebase setting/menu (22/105)

- firebase login
- firebase init
- npm i firebase
- npm i vuetify-toast-snackbar-ng
- menu 추가/수정/이동

## chap03 login / Firebase 인증 트리거 (25/105)

- Firebase 인증 트리거
- key down : 프로젝트 설정 > 서비스 계정
- key.json 생성
- firebase function 생성
- 배포 : firebase deploy --only functions

```
firebase functions:config:set admin.email=tazz0009@gmail.com admin.db_url=https://vfa01-98b8d-default-rtdb.firebaseio.com

firebase functions:config:get

firebase deploy --only functions
```

- database rule 변경 : level == 0 (관리자)만 쓸수있게
- database.rulse.json

```
firebase deploy --only database
```

## chap0 Firesotre 사용 / 게시판/페이징 구현(33/105)

- firebse.js

```
import "firebase/firestore";
```

- board 폴더/ router 추가
- lodash lib 추가

```
npm i --save lodash
```

## install

```
vue add vuetify
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
