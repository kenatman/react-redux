import React from "react";
import { connect } from "react-redux";
import { minus } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  // ToDo 라는 놈이 받는 추가 props가 ownProps로 들어옴
  console.log(ownProps); // mapDispatchToProps의 ownProps는 connect로 연결되는 컴포넌트에 전달되는 prop정보가 들어있다.
  return {
    onBtnClick: () => dispatch(minus(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
