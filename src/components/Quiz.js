import React, { useState, useEffect } from "react";

import { Button } from "react-bootstrap";

import { postRequest } from "../misc";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    postRequest("/get_questions", {}).then((data) => {
      setQuestions(data.questions);
      setTopics(data.topics);
    });
  }, []);
  return (
    <div>
      <br />
      <div className="row">
        <div className="col-md-8"></div>
        <div className="col-md-4">
          {topics.length > 0 ? (
            <div>
              {topics.map((topic) => (
                <p>
                  <Button variant="outline-primary">{topic}</Button>
                </p>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
