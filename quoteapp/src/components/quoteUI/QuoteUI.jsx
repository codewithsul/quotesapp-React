import React from "react";
import "./QuoteUI.css";

const QuoteUI = (props) => {
  return (
    <>
      <div className="wrap">
        <div className="quote">
          <section id="thequote">{props.Quote}</section>
        </div>
      </div>
    </>
  );
};

export default QuoteUI;
