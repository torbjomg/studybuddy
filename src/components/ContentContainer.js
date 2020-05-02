import React, { useEffect, useRef, useState, Fragment } from "react";
import { postRequest } from "../misc";

function ContentContainer() {
  const [inputText, setInputText] = useState({ title: "" });
  const [textContent, setTextContent] = useState("");
  const textAreaRef = useRef(null);
  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postRequest("/wiki_search", { searchTerm: inputText.title }).then(
      (data) => {
        setTextContent(data["summary"]);
      }
    );
  };
  useEffect(() => {
    textAreaRef.current.focus();
    textAreaRef.current.innerHTML = textContent;
  }, [textContent]);

  return (
    <Fragment>
      <div style={{ padding: 10 }}>
        <form
          onSubmit={handleSubmit}
          className="form-container"
          autoComplete="off"
        >
          <input
            type="text"
            className="input-text"
            placeholder="Search topic..."
            value={inputText.title}
            name="title"
            onChange={onChange}
          />
          <input type="submit" className="input-submit" value="Search" />
        </form>
      </div>
      <div className="text-display" ref={textAreaRef}>
        placeholder text{" "}
        <mark className="highlightcolor1">highlight example</mark>
      </div>
    </Fragment>
  );
}

export default ContentContainer;
