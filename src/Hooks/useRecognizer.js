import React, { useState, useEffect } from "react";

//Google actually uses this constructor with a prefix "webkit"
// SpeechRecognition constructor is not working anymore, so go for prefix version.
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let speeachRecognition = new SpeechRecognition();
//계속 인식되지 않게 하기 위해 false로 설정
speeachRecognition.continuous = false;
speeachRecognition.lang = "ko_KR";
//중간결과 반환 여부
speeachRecognition.interimResults = true;
speeachRecognition.maxAlternatives = 1;

export const useRecognizer = () => {
  const [speechedTodo, setSpeechedTodo] = useState("");
  const [order, setOrder] = useState("");
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    speeachRecognition.onresult = function (evt) {
      //returns a SpeechRecognitionResultList object(contains SpeechRecognitionResult objects)
      let todo = "";
      let order = "";
      for (var i = evt.resultIndex; i < evt.results.length; ++i) {
        if (evt.results[i].isFinal) {
          order = evt.results[i][0].transcript.slice(
            evt.results[i][0].transcript.length - 2
          );

          todo = evt.results[i][0].transcript.slice(
            0,
            evt.results[i][0].transcript.length - 3
          );
        }
      }

      if (todo) {
        setSpeechedTodo(todo);
      }

      if (order) {
        setOrder(order);
      }
      console.log({ todo, order });
    };

    // speeachRecognition.onend = (evt) => {
    //   setIsOn(false);
    // };
  }, []);

  const startRecognizer = () => {
    speeachRecognition.start();
    setIsOn(true);
  };

  const endRecognizer = () => {
    speeachRecognition.stop();
    setIsOn(false);
  };

  return [speechedTodo, order, isOn, startRecognizer, endRecognizer];
};
