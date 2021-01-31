# 프론트엔드

### 사용 기술

![image](https://user-images.githubusercontent.com/38436013/106381316-37db6b80-63fb-11eb-9dc7-d93616b8926b.png)

- 프론트엔드 프레임워크로는 Vue.JS 를 사용
- 앱 상태 관리를 위한 Vuex, 페이지 렌더링을 위한 Vue 라우터를 사용
- 비동기통신을 위한 Axios, 페이지네이션 및 자동완성을 위한 vuetify, 드래그앤드랍을 위한 dragular 사용
- S3 정적호스팅과 자동 빌드 배포를 위한 github, github actions 로 진행



### 페이지 레이아웃

![image](https://user-images.githubusercontent.com/38436013/106381325-3f027980-63fb-11eb-86b5-99bbaf3efe39.png)

- 페이지 레이아웃은 심플하게 네비게이션 바, 콘텐츠 영역 두 부분으로 구성
- 페이지 정렬 모델은 flex를 사용
- 네비게이션은 내부 content 크기만큼, 그 외 콘텐츠 영역은 뷰포트 전부를 차지함



### 사이트 애셋

![image](https://user-images.githubusercontent.com/38436013/106381330-46298780-63fb-11eb-81fe-3ded6a4d626d.png)

- 페이지를 꾸미는데 필요한 애셋은 디자인 210, 어도비 COLOR, Unsplash 에서 무료로 사용



### 반응형 UI

![image](https://user-images.githubusercontent.com/38436013/106381360-7cff9d80-63fb-11eb-835e-dbb142edff98.png)

- Nscreen에 대응할수 있도록 반응형 UI로 설계



### 뷰 라우터

![image](https://user-images.githubusercontent.com/38436013/106381364-838e1500-63fb-11eb-8061-7c13596a00c7.png)

- 우리집 사용설명서 앱은 클라이언트 사이드 렌더링을 수행
- 그래서 Vue Router에 다음과 같이 경로를 생성
- 홈, 로그인, 로그인 콜백, 검색, 상세페이지 외 경로 접속시 Not Found 페이지가 출력됨



### 메인화면 컴포넌트

![image](https://user-images.githubusercontent.com/38436013/106381371-9274c780-63fb-11eb-8710-61ed9308b87d.png)

- 루트, 앱 컴포넌트 하위에 GlobalNavigation, Home 컴포넌트가 위치하고 Home 하위에 AutoComplete가 위치
- 네비게이션 컴포넌트는 홈, 개인모음집, 로그인 라우팅 링크 및 검색 기능을 수행
- AutoComplete 기능은 홈 컴포넌트가 생성되면서 axios로 통신한 제품 코드들을 가지고 자동완성기능을 수행



### 검색결과 컴포넌트

![image](https://user-images.githubusercontent.com/38436013/106381388-a3253d80-63fb-11eb-8b89-bce3256ee3af.png)

- SearchResult는 AutoComplete 컴포넌트가 props로 넘어온 검색 쿼리를 가지고 Axios라이브러리가 API 통신
- 이 때 등록해놓은 action 함수가 변이를 일으켜 SearchResults의 상태를 변화시킴
- VDataIterator는 SearchResults를 props로 전달받아 Vcard들을 렌더링 수행



### 자동 배포

![image](https://user-images.githubusercontent.com/38436013/106381412-d7006300-63fb-11eb-9943-ad1b9eda18d7.png)

- 이번 프로젝트를 하면서 지난 프로젝트에서 아쉬웠던 수동 배포 작업을 자동으로 전환해봄
-  Webstorm에서 작업을 하다가 깃헙에 커밋 푸쉬를 하면 ./github/workflows/main.yml에 스크립트가 main 브런치의 푸쉬 이벤트를 감지하면 
  빌드 후 aws s3 정적호스팅에 있는 파일을 자동으로 대체할 수 있음 
- 원래는 테스트 코드도 있어야 하지만 간단하게 환경 구축해보는 것이 목적이었으므로 생략





