import React, { useState } from "react";
import FileThumbnail from "./FileThumbnail5";
// import CustomFailedHorizontal from "./CustomVideoErrorFile.svg";
// import CustomFailedVertical from "./CustomVideoFailVertical.svg";

function FileProcessor() {
  const [myFiles, setMyFiles] = useState([]);

  const files = myFiles.map((file, key) => {
    return (
      <div key={file.path} style={{ padding: "0px" }}>
        <FileThumbnail
          file={file}
          startTime={3000}
          canvasSize={900}
          startTimeFail={2}
          finalFail={"end"} //beginning end or e
          DefaultFailedOrientation={"Horizontal"}
          // CustomFailedFileImageHorizontal={CustomFailedHorizontal}
          // CustomFailedFileImageVertical={CustomFailedVertical}
        />
        <p>{file.name}</p>
      </div>
    );
  });

  function handleChange(event) {
    console.log(`Selected file - ${event.target.files[0].name}`);
    setMyFiles([...myFiles, event.target.files[0]]);
  }

  return (
    <form>
      <input type="file" onChange={handleChange} />
      <h4 style={{ fontWeight: "bold" }}>Files</h4>
      {files}
    </form>
  );
}

export default FileProcessor;
