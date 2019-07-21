일렉트론 리액트 앱
=================
1. react-create-app npm 으로 설치
2. electron-quick-start-typescript clone 및 npm install.
3. react-create-app의 `create-react-app {프로젝트명}` 으로 프로젝트를 만든다
4. electron-build를 package.json에 있는 버전으로 설치 (그렇게 하지 않으면 build시 에러가 난다)
5. electron-build와 react-create-app의 명령어가 겹치므로 package.json 수정.

***

# electron-build 설정 방법.
  ```
  "build": {
    "productName": "HelloElectronTest",
    "appId": "com.popsapple.dite",
    "win": {
      "target": [
        {
          "target": "nsis",
          "arch": [
            "x64",
            "ia32"
          ]
        }
      ],
      "icon": "./resources/electron.ico"
    },
    "nsis": {
      "oneClick": true,
      "installerIcon": "./resources/electron.ico",
      "createDesktopShortcut": true
    },
    "directories": {
      "output": "./resources/installer5/"
    }
  }
  ```
  - win: 운영체제 설정. 맥이나 리눅스 등도 가능하다
  - target: 어떤 installer를 사용할지 옵션을 정함
  - icon: 아이콘 지정

  - nsis: 인스톨러 옵션 \n onClick: 한번에 설치하는가 \n icon: 인스톨러 아이콘 지정
  - directories: output옵션만 사용하였음. 인스톨러가 나오는 곳
