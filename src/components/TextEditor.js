import React from "react";
import { Editor, EditorState, ContentState } from "draft-js";

function TextEditor() {
  const [contentState, setContentState] = React.useState(
    ContentState.createFromText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non sapien enim. In hac habitasse platea dictumst. Morbi imperdiet tempor ex, vitae consectetur sem dictum quis. Nunc imperdiet dolor sit amet nibh suscipit fringilla. Suspendisse pulvinar ipsum in lacus efficitur, vitae congue quam malesuada. Duis ullamcorper id tellus eu malesuada. Donec quis eros orci. Sed pharetra eros eget finibus ultrices. Pellentesque semper hendrerit metus at pharetra.Duis in iaculis lacus, non pharetra enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis lacinia dolor elit, et volutpat augue posuere eu. Curabitur convallis eget turpis quis lacinia. Sed sit amet velit vestibulum, eleifend mi a, elementum sem. Nulla facilisi. Phasellus ut eleifend arcu, ut tempor lorem. Fusce mi ante, tincidunt id nibh eget, vestibulum ultricies quam. Donec et ullamcorper tortor. Nulla non nunc ut libero ornare pulvinar. Donec ultricies, mi id tincidunt cursus, tellus tellus dignissim est, ac pellentesque nisl purus ac sapien. Pellentesque mi metus, porttitor consequat placerat vitae, egestas vel neque. Morbi suscipit lorem rhoncus nisl auctor ultricies. Quisque a ante ac metus ultrices tincidunt.    Duis id commodo quam, at lobortis velit. Aenean vitae quam convallis, tristique felis a, interdum dui. Pellentesque id vulputate metus, ac gravida dolor. Donec finibus, nisi ut placerat suscipit, mi enim luctus augue, eu accumsan ex arcu et magna. Nam ultricies dignissim consectetur. Maecenas eu lacinia urna. Vestibulum suscipit in metus at euismod.Suspendisse euismod erat id sapien gravida laoreet. In id est vestibulum, molestie arcu a, egestas orci. In sed malesuada ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean elementum magna sit amet arcu eleifend, dapibus hendrerit ex lacinia. In lacinia nec nisl vitae aliquet. Morbi vitae nisl vel velit iaculis euismod. Cras a ex egestas eros ornare mattis id ac justo. Fusce ultricies sem nulla, sed interdum lacus sagittis sed. Nulla facilisi. Curabitur leo sapien, luctus sed dui vitae, viverra rhoncus ex. Proin cursus porttitor nisl, non lobortis nulla posuere at. Pellentesque dictum non nisi at molestie. Fusce egestas ut tellus vitae auctor.    Vestibulum posuere vitae tortor ut gravida. Nam mollis sem id erat ultrices, at dictum felis auctor. Proin faucibus eros lacus, vel varius felis tincidunt non. Sed sed odio sed ex hendrerit mattis at at enim. Duis molestie nibh ac massa tempus posuere. Phasellus sit amet mauris quis elit rutrum mollis at vitae dui. Nam semper consectetur felis fermentum commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ac nisl pulvinar, tempus mauris sit amet, fringilla elit. Donec elementum ante nec vulputate auctor. Sed consequat dignissim velit. Fusce faucibus sollicitudin turpis quis dictum. Nulla rutrum, augue ut fringilla vestibulum, nunc dolor finibus purus, eget mollis enim ante eget nulla."
    )
  );
  const [editorState, setEditorState] = React.useState(
    EditorState.createWithContent(contentState)
  );
  return (
    <div
      style={{
        border: "1px solid black",
        padding: 10,
        height: "100%",
      }}
    >
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}

export default TextEditor;
