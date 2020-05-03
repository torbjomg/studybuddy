import React, { Fragment, useEffect } from "react";
import { Button } from "react-bootstrap";
import { postRequest } from "../misc";

function SectionList(props) {
  function getSectionContents(sectionId) {
    postRequest("/get_section_contents", { sectionId: sectionId }).then(
      (data) => {
        props.setStudyContent(data);
      }
    );
  }
  return (
    <Fragment>
      {props.sections.length > 0 ? (
        <Fragment>
          {props.sections.map((section) => (
            <div>
              <p>
                <Button
                  variant="info"
                  onClick={() => getSectionContents(section.id)}
                >
                  {section.title}
                </Button>
              </p>
            </div>
          ))}
        </Fragment>
      ) : (
        <p>Nothing selected</p>
      )}
    </Fragment>
  );
}

export default SectionList;
