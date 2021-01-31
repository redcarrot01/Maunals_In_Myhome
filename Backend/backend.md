# 백엔드 아키텍처

### 백엔드 다이어그램

<img src="https://user-images.githubusercontent.com/38436013/106380624-db764d00-63f6-11eb-8872-dc23e24ff5ae.png" alt="image" style="zoom:70%;" />

- /code - GET 요청이 들었을때, 상세페이지에 제품 코드에 해당하는 데이터 response합니다.
- /codes - GET요청이 들어왔을때, product_code_table에서 boto3 paginator를 사용해 제품코드 전체를  reponse 합니다.
- /custom- GET요청시에 로그인이 되어 있을 경우 사용자 아이디를 response하고 아닐 경우 400에러를 응답합니다.  /POST요청시에 처음 로그인일 경우 모음집 테이블을 생성하고 201을 응답하고, 이전에 사용했을 경우 200로 테이블이 있음을 응답합니다.
- /search -url 쿼리 문자열 q의 값으로 검색된 제품 코드 문자열을 담아  GET요청했을 때, 클라우드서치 서비스에서 해당 문자열을 담은 제품들을 업로드된 조회해서 response합니다.

### AWS CloudWatch

![image](https://user-images.githubusercontent.com/38436013/106380683-4de72d00-63f7-11eb-9eb4-3cdb31b6aa7f.png)

- 검색기능으로 아마존 클라우드서치 서비스 사용
- Cloud Search란 ? 
  - 클라우드 관리형 서비스, 웹 사이트 또는 애플리케이션을 위한 검색 솔루션을 효율적인 비용으로 간단하게 설정, 관리 및 조정할 수 있기에 사용

- 장점
  - (강화된) 검색 기능을 웹 사이트 또는 애플리케이션에 신속하게 추가할 수 있음
  - 자동으로 필요한 리소스를 프로비저닝하고 사용이 간편하게 조정된 검색 인덱스를 배포 가능
  - 또한, 모든 검색 도메인에 대한 강력한 Auto Scaling 기능을 제공(확장성)
  - 비용 : 직접 검색 환경을 운영하는 것보다 총 소유 비용이 낮음

###  Amazon DynamoDB

![image](https://user-images.githubusercontent.com/38436013/106380760-aae2e300-63f7-11eb-99dd-e7df98503ec3.png)

- Python으로 크롤링된 데이터를 Python용 AWS SDK인 Boto3 이용하여 amazon dynamoDB에 저장
- dynamo DB 사용 이유? 
  - 데이터 관계(조인) 설정이 없고, 데이터를 빨리 읽어오기 위해 NOSQL을 적용

- Boto3 사용 이유?
  - Boto3를 사용하면 Python 애플리케이션, 라이브러리 또는 스크립트를 Amazon S3, Amazon EC2, Amazon DynamoDB 등 AWS 서비스와 쉽게 통합 가능

### DB Table

![image](https://user-images.githubusercontent.com/38436013/106380941-e92cd200-63f8-11eb-8649-c3b4e757638f.png)

