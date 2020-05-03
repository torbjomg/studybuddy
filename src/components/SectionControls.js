import React, { useEffect, useRef, useState, Fragment } from "react";
import { postRequest } from "../misc";
import { Button, Modal } from "react-bootstrap";

function SectionControls(props) {
  const [questionText, setQuestionText] = useState({ title: "" });
  const [answerText, setAnswerText] = useState({ title: "" });

  const onChangeQuestion = (e) => {
    setQuestionText({
      ...questionText,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeAnswer = (e) => {
    setAnswerText({
      ...answerText,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let selection = window.getSelection();
    let content = selection.toString();
    let startIndex = selection.extentOffset;
    let endIndex = startIndex + content.length;
    let data = {
      sectionId: props.studyContent.source, // TODO
      question: questionText.title,
      answer: answerText.title,
      alternatives: "", // TODO
      start_index: startIndex,
      end_index: endIndex,
    };
    // data : sectionId, question, answer, startIndex, endIndex, [alternatives, rating]
    postRequest("/save_snippet", data).then(
      (response) => {
        if (response["success"]) {
          console.log(response);
        } else {
          alert("something went wrong");
          console.warn(response);
        }
      }
      // TODO : re-render the contents of summary div with highlights
    );
  };
  return (
    <Fragment>
      <Button variant="primary">Primary</Button>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Set query and response</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Define a question that can be answered in a brief response</p>
          <p>
            The highlighted text will serve as context, and the answer to your
            question should be easily understood from the context
          </p>
          <input
            autoComplete="off"
            type="text"
            className="input-text"
            placeholder="Enter question..."
            value={questionText.title}
            name="title"
            onChange={onChangeQuestion}
          />
          <br />
          <input
            autoComplete="off"
            type="text"
            className="input-text"
            placeholder="Enter answer..."
            value={answerText.title}
            name="title"
            onChange={onChangeAnswer}
          />
          <br />
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Body>
      </Modal.Dialog>
    </Fragment>
  );
}

export default SectionControls;
