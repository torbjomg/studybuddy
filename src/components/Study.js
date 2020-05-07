import React, { useState } from "react";

import ContentContainer from "./ContentContainer";
import SectionControls from "./SectionControls";
import SectionList from "./SectionList";
function Study(props) {
  const [sections, setSections] = useState([]);
  const [studyContent, setStudyContent] = useState({
    content: "No topic selected",
  });
  return (
    <div className="row">
      <div className="col-md-8">
        <ContentContainer
          sections={sections}
          setSections={setSections}
          studyContent={studyContent}
          setStudyContent={setStudyContent}
        />
      </div>
      <div className="col-md-4">
        <p>this will be a modal at some point #TODO</p>
        <SectionControls studyContent={studyContent} />
        <SectionList
          sections={sections}
          setSections={setSections}
          studyContent={studyContent}
          setStudyContent={setStudyContent}
        />
      </div>
    </div>
  );
}

export default Study;
