# graphql-boiler-plate

> 혼자 쓰려고 만들어서 완전 조잡합니다. 쓰는 걸 권해드리지 않습니다. 초천재분들이 만들어 보기만 해도 기가 막히는 멋진 패키지들을 이용하시길..

`graphql-yoga`를 사용한 graphql server의 초기 설정 시간을 단축하기 위해서 만든 boiler plate

## 구현

### graphql, resolver 파일 폴더 별로 관리

`graphql-tools`, `merge-graphql-schemas` 를 사용해 폴더 별로 나눠진 graphql, resolver 파일을 묶고 schema로 전달할 수 있도록 만듬

### morgan

완전 멋진 logger 탑재. format은 "dev"