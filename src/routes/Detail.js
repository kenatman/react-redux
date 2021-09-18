import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>CreatedAt : {toDo?.id}</h5>
    </>
  );
}

// mapStateToProps 는 전체 state와의 연결 등을 위한 함수
function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { hello },
    },
  } = ownProps; // 라우터의 path 정보등이 들어있다.
  console.log(ownProps);
  return { toDo: state.find((item) => item.id === parseInt(hello, 10)) };
}

export default connect(mapStateToProps)(Detail);
