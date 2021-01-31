# 데이터 크롤링

### 사이트 url 분석

![image](https://user-images.githubusercontent.com/38436013/106381132-280f5780-63fa-11eb-82a2-e999d2b514de.png)

- 삼성 다운로드 사이트는 ajax(비동기식 자바스크립트 XML)와 html이 섞여 있음
- 이것은 1번 그림과 2번 그림에서 같은 주소를 공유하지만, // 1번에서는 제품코드를 반환, 2번에서는 아무것도 띄우지 않고 있음을 확인 가능
- 제품 크롤링에 앞서 각 제품 상세 페이지의 url 분석이 필요했고, // 각 url은 오른쪽 3번 그림과 같이 제품 코드로 url을 구분하는 구조
- 따라서 첫번째 크롤링의 주인공은 제품 코드이며, (이것은 사이트 특성상 ajax데이터이므로) selenium으로 동적 크롤링

![image](https://user-images.githubusercontent.com/38436013/106381139-3198bf80-63fa-11eb-9ca7-ea47f9f6d54a.png)

- 제품 코드를 이용한 각 상세페이지 크롤링을 마친후, 4번 그림과 같이 각 제품이미지, 제품이름, 제품 코드를 정적 크롤링
- 하지만 4번5번 그림 비교해 알 수 있듯이,  제품 사용설명서는 ajax이므로 셀레늄을 이용하여 동적 크롤링

### 크롤링 흐름

![image](https://user-images.githubusercontent.com/38436013/106381158-3f4e4500-63fa-11eb-922d-9cc70e48bc21.png)

- 웹 데이터는 html과 ajax(비동기식 자바스크립트) 두가지를 크롤링 해야 했으며 html은 requests로 , ajax는 셀레늄 사용
-  이것을 제이슨 데이터로 변환하여 다이나모 디비에 저장하고 람다함수로 구현

