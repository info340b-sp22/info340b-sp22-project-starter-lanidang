import React from "react";
import { Form, Button } from "react-bootstrap";

const questions = [
  {
    q: "What's your favorite brand?",
    options: ["Apple", "HP", "Microsoft"],
    name: "favorite_brand",
  },
];
const handleSubmit = (e) => {
  e.preventDefault();
}

export default function TakeTest() {
  console.log("render TakeTest");
  return (
    <main className="max-w-screen-md mx-auto mt-6">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col items-stretch">
          <img
            className="object-cover h-96 mx-12"
            src="https://unsplash.com/photos/95YRwf6CNw8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUzMzYzNzky&force=true&w=640"
          />
          <div className="py-3 text-xl font-medium">
            What's your favorite brand?
          </div>
          <div className="flex flex-col ml-4">
            <Form.Check type={"checkbox"} label="HP" id={`brand`} />
            <Form.Check type={"checkbox"} label="Apple" id={`brand`} />
            <Form.Check type={"checkbox"} label="Levono" id={`brand`} />
            <Form.Check type={"checkbox"} label="Microsoft" id={`brand`} />
          </div>
        </div>
        <div className="w-full flex mt-4">
          <Button variant="primary">Submit</Button>
        </div>
      </form>
    </main>
  );
}
