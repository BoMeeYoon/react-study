## Nomadcoders 영화 웹 서비스 만들기 클론

- 기간: 8/11(화) - 8/13(목)

### 학습내용

- npx create-react-app
  `npx`란?

- localhost
  `localhost`란?
  Local: http://localhost:3000
  On Your Network: http://172.30.1.58:3000

- React 의 기본동작:

  - 최초 html 은 root 엘레멘트만 가지고 있는 html 이 랜더 된다.
  - component 는 HTML을 반환한다.
  - JSX문법을 기반으로 작동한다.
  - tag 에 부여 된 property를 다른 컴포넌트에서 읽을 수 있다.
  - 재사용 가능한 component를 만들 수 있다. 즉, 데이터를 주고 받을 수 있다.
  - <Food fav = "kimchi"> Food 컴포넌트에 prop을 보낼 수 있다.
  - npm i prop-types : 전달받은 props가 원하는 props 인지 확인할 수 있다. -> 에러발생 시 npm i 하기

- Class Component:

  - state는 object 이고 component 의 data를 넣을 수 있다. (동적 데이터)
  - this.state.count++ 와 같이 state값을 직접 바꾸게 되면 리액트는 랜드를 하지 않는다.
  - setState 를 호출하면 언제 상태가 변화해야 하는지 알 수 있다. 따라서 refresh 시점을 잘 알고 할 수 있다.
  - setState 안에서 this.state 를 직접 제어하는 코드는 바람직하지 않다. state에 대한 의존성이 높기 때문이다.
  - 해결: current(= this.state) 를 메소드로 받는다. 상태를 set 할 때 외부 상태에 의존하지 않는 방법이다.
  - setState 호출 시 react 는 새로운 state와 함께 render function을 호출하게 된다.

- Life cycle:

  - componentDidMount : component 가 mount 되자 마자 호출
  - 따라서 api 호출은 componentDidMount 에서 한다.
  - state 값에 모든 데이터를 초기화 시킬 필요는 없다. setState 에서 바로 추가할 수 있다.

* Q:
  - state = {
    count: 0,
    };
    add() {
    this.setState({
    count: this.state.count+1,
    setState 를 통해 state를 변경해야 하는데
    ++로 하면 자신을 바꿔주기 때문에 바로 접근해 변경하기 때문에 안됨
    });
    }
    minus() {
    this.setState({
    count: this.state.count - 1,
    });
    } 여기에서 ++은 왜 안되지...
  - setTimeout에 como puedo hacer un fuction
  - Movie.PropTypes 는 왜 안 되지..? 왜 Movie.proptypes 만 되지?
