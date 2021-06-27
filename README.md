## 실행방법
- git clone 또는 zip 파일로 다운받아 프로젝트 열기
- npm install 후, npm run dev 로 실행

## 사용 기술
- React, Next
- Redux
- Redux-saga
- Styled Components

## 기능에 대한 화면 경로
- 메인 : 네비게이션 및 로그인 폼
- /resetPassword : 비밀번호 재설정 페이지(인증 코드 발급 요청 페이지) -> 순서대로 '다음' 버튼을 눌러서 절차를 진행하면, 아래의 /verification, /changePassword경로로 이동된다.
- /verification : 인증 코드 검증 페이지 
- /changePassword : 비밀번호 변경 페이지 
- /profile : 회원정보 조회 페이지 