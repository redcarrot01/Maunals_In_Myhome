<h1 align="center"> 우리집 사용설명서 </h1>

<p align="center"><img alt="homemanual main" src="https://user-images.githubusercontent.com/25981278/103438478-c5019800-4c76-11eb-9838-acce019680a2.png"></p>

<p align="center"><a href="https://homemanual.xyz">homemanual.xyz</a></p>

## 목차

- [프로젝트 제안 배경](#프로젝트-제안-배경)
- [주요기능](#주요기능)
- [프로젝트 수행](#프로젝트-수행)
- [서비스 아키텍처](#서비스-아키텍처)
- [개선점](#개선점)
- [기여](#기여)

## 프로젝트 제안 배경

<p align="center"><img alt="사용설명서모음" src="https://user-images.githubusercontent.com/25981278/103438599-b8317400-4c77-11eb-925f-5c8ce918cb01.png"></p>

**가정집**을 둘러보면 **사용설명서**들이 위와 같이 모아져있습니다. 반면 모으지 않는 분들도 있습니다. 그렇지만 가전제품을 사용하다가 문제가 발생했을 경우에는 **공식사용설명서** 만한게 없습니다. 그런데 대부분 제품 박스 버릴 때 같이 버리십니다. 그래서 이런 사용설명서들을 **간편하게 모아서** 볼 수 없을까 하다가 생각한 **여러 회사의** **사용설명서들을** **제공해주는 사이트**입니다.

## 주요기능

1. 검색 및 자동완성
2. 반응형 디자인
3. 소셜 로그인

<p align="center"><img alt="사용설명서" src="https://media.giphy.com/media/CsBceG8THzR7sFmDJ7/giphy.gif"></p>

<p align="center"><img alt="반응형 이미지" src="https://user-images.githubusercontent.com/25981278/103439053-faa97f80-4c7c-11eb-8401-d2d7a7544b4e.png"></p>

<p align="center"><img alt="소셜로그인" src="https://user-images.githubusercontent.com/25981278/103439040-d6e63980-4c7c-11eb-8df3-75c6eccd9cf3.png"></p>

## 프로젝트 수행

> 프로젝트 수행 기간 : 2020년 10월 14일 ~ 2020년 11월 16일 (5주)
>
> 프로젝트 진행 주체 : 멀티캠퍼스 4차산업선도인력 양성 과정(전공 프로젝트)
>
> 기여 인원 : 3명

| 구분              | 사용기술                                                     |
| ----------------- | ------------------------------------------------------------ |
| 프론트엔드        | Vue, Vuetify, Vuex, VueRouter, Axios, Javascript, HTML, CSS  |
| 백엔드            | AWS API Gateway, AWS Lambda, AWS DynamoDB, AWS CloudSearch, boto3, python |
| 크롤링            | requests, selenium, python                                   |
| 배포              | AWS S3(정적 호스팅), GitHub Actions                          |
| 협업 및 관리 도구 | Project Manager, Git, GitHub                                 |

## 서비스 아키텍처

<p align="center"><img alt="아키텍처" src="https://user-images.githubusercontent.com/25981278/103439548-347c8500-4c81-11eb-86f0-16257abecd28.png"></p>

[프론트엔드](https://github.com/minority-elite/Maunals_In_Myhome/blob/main/Frontend/README.md) 

[백엔드](https://github.com/minority-elite/Maunals_In_Myhome/blob/main/Backend/README.md) 

[데이터크롤링](https://github.com/minority-elite/Maunals_In_Myhome/blob/main/DataCrawling/README.md)

## 개선점

1. 개인모음집 기능 구현

   프로젝트 시작 전 개발자의 동일한 기능 중복 구현을 방지하기 위해 프론트엔드, 백엔드 영역으로 업무를 분리하고 REST API로 JSON 데이터를 주고 받기로 결정했습니다. 하지만 명확한 JSON 데이터 모델링, 가짜 API 생성 등 지식이 부족하여 개발이 지연됐습니다. 본래 우리집사용설명서의 기본 검색 기능 외에 추가적으로 로그인한 회원에 한하여 사용설명서들을 모아서 저장하는 기능을 제공하려했지만 시간적인 이유로 구현하지 못했습니다. 다음엔 REST API 설계, 테스트, 구현 과정을 확실히 공부하여 보다 명확한 개발일정을 계산하도록 하겠습니다.

## 기여

[이준의](https://github.com/coconutstd)

- 프론트엔드 총괄

[이지은](https://github.com/hackzoomuck)

- 아키텍처 및 백엔드 총괄

[홍유진](https://github.com/redcarrot01)

- 데이터 크롤링 총괄

