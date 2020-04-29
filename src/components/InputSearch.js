import React, { useState } from "react";
import postRequest from "../misc";

const InputSearch = (props) => {
  const [inputText, setInputText] = useState({ title: "" });

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
        console.log(data);
      }
    );
  };
  return (
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
  );
};

export default InputSearch;
