## .env 파일에 대한 설명
- https://create-react-app.dev/docs/adding-custom-environment-variables#adding-development-environment-variables-in-env

## 리액트 스켈레톤
1. airbnb-config-eslint
2. redux
3. redux-saga
4. react-redux
5. react-router

## 선행 학습 하면 프로젝트 진행에 도움이 되는 스킬들
1. Render-props pattern - https://reactjs.org/docs/render-props.html
2. HOC(High-Order-Component) - https://reactjs.org/docs/higher-order-components.html#___gatsby
3. Context Api - https://reactjs.org/docs/legacy-context.html#how-to-use-context
4. React-life-cycle - https://reactjs.org/docs/react-component.html
5. javascript 연산자 - https://mygumi.tistory.com/33
6. 프론트앤드 체크리스트 - https://github.com/kesuskim/Front-End-Checklist
7. 리액트 랜더링 퍼포먼스 디버깅 방법 - https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab
8. 리액트 컴포넌트 모델링 관한 기사 - https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

## atomic design article
https://brunch.co.kr/@ultra0034/63

## 추후 고려할 사항
1. 리액트 라우터 히스토리 데이터 리덕스 스토어에 어떻게 저장 시킬건지
2. 1번사항 연관 되서 connected-react-router와 react-router의 browserHistory를 이용하여 리덕스 스토어에 저장할지 대한 판단을 위한 사전조사.
3. 서비스 부분 axios로 교체 해아한다.
4. api.js 분석 및 코드 스플리팅 작업 필요.
5. redux actions 코드 작성 패턴 조사 (duck pattern)
6. sagas 코드 분석 필요
7. react hooks 적절한 예제 조사
8. normalizr 사용 여부 고려
9. 불필요한 노드 모듈 제거 작업
10. 유닛 테스트

## 디렉토리 설명
- actions -> 리덕스 액션
- common -> constant값과 각종 컨피그 및 유틸성 함수들 담는 폴더
- components -> react UI Componts (Presentational Component)
- containers -> 비즈니스 로직과 결합 되는 리액트 컴포넌트 (Container Component)
- pasge -> 페이지 단위의 리액트 컴포넌트
- reducers -> saga의 셀렉트를 사용하기 위한 selectors.js와 모델별 리액트 리듀서들 존재
- router -> 리액트 라우터 관련된 파일.
- sagas -> 백그라운단에 운영될 redux-saga 관련 파일.
- services -> http call api 및 관련 유틸 파일.
- store -> redux store