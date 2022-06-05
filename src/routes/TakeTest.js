import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const questions = [
  {
    q: "How often do you use your laptop?",
    options: ["Everyday", "Only Workdays", "Twice Per Week", "Less Than One Day Per Week"],
    id: "Frequency",
  },
  {
    q: "What do you use your LapTop for",
    options: ["Work/Study", "Play games", "Watch Videos"],
    id: "Useage"
  }
];


const Question = ({ q, id, options, handleClick, sValue }) => {
  return (
    <>
      <div className="py-3 text-xl font-medium">{q}</div>
      <div className="flex flex-col ml-4">
        {options.map((o, index) => (
          <Form.Check key={index} type={"checkbox"} label={o} id={`${id}_${index}`} checked={o === sValue} onClick={() => handleClick(id, o)} />
        ))}
      </div>
    </>
  )
}

export default function TakeTest() {

  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  function showAlert() {
    alert ("Please answer all the questions!");
  }

  const handleClick = (qid, answer) => {
    console.log(`set ${qid} to ${answer}`);
    setAnswers((old) => ({...old, [qid]: answer}));
  }

  const handleSubmit = () => {
    console.log("nav:");
    // console.log("answer:", answers);
    if (Object.keys(answers).length < 2) {
      showAlert()
    } else {
      navigate('/test_result', {state: answers});
    }
  }

  console.log("render TakeTest", answers);

  return (
    <main className="max-w-screen-md mx-auto mt-6">
        <div className="w-full flex flex-col items-stretch ml-2">
          <img
            className="object-cover h-96 mx-12"
            src="/img/clement-helardot-95YRwf6CNw8-unsplash.jpg"
            alt="Laptop Model Test"
          />
          {questions.map((item, i) => (
            <Question key={i} {...item} handleClick={handleClick} sValue={answers[item.id]} />
          ))}
          
        </div>
        <div className="w-full flex mt-4 mb-4 ml-2">
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    </main>
  );
}
