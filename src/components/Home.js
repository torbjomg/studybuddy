import React, { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { postRequest } from "../misc";

function Home() {
  const [topics, setTopics] = useState([]);
  const buttonDivStyle = {
    paddingTop: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
    textAlign: "center",
  };
  const displaySections = (e) => {
    e.preventDefault();
    postRequest("/get_saved_topics", {}).then((data) => {
      setTopics(data.titles);
      console.log(data.titles);
    });
  };
  function goToTopic(topic) {
    console.log(topic);
  }
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6" style={buttonDivStyle}>
          <Button variant="outline-primary" href="/study" size="lg" block>
            STUDY
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" style={buttonDivStyle}>
          <Button variant="outline-primary" href="/quiz" size="lg" block>
            QUIZ
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" style={buttonDivStyle}>
          <Button
            variant="outline-primary"
            onClick={displaySections}
            size="lg"
            block
          >
            TOPICS
          </Button>
        </div>
      </div>
      <br />
      {topics.length > 0 ? (
        <div className="col-md-6">
          <p>Saved Topics:</p>
          {topics.map((topic) => (
            <div>
              <p>
                <Button variant="info" onClick={() => goToTopic(topic)}>
                  {topic}
                </Button>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
}

export default Home;
