import React, { useState } from "react";
import "./ButtonUI.css";
import axios from "axios";
import QuoteUI from "../quoteUI/QuoteUI";
import { useEffect } from "react";

const ButtonUI = () => {
  const [Quote, setQuote] = useState([]);

  useEffect(() => {
    GetAdvice();
  }, []);

  const GetAdvice = () => {
    const options = {
      method: "POST",
      url: "https://motivational-quotes1.p.rapidapi.com/motivation",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "147695074amshb93d1cd6a5ad7cfp169407jsn13c281394fdd",
        "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com",
      },
      data: '{"key1":"value","key2":"value"}',
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const { data } = response;
        setQuote(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <QuoteUI Quote={Quote} />
      <br></br>
      <div className="back">
        <button onClick={GetAdvice}>GetQuote</button>
        <div className="developer">
          <h5>codewithsul|2022</h5>
        </div>
      </div>
    </>
  );
};

export default ButtonUI;
