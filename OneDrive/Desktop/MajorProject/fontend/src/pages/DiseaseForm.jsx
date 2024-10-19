import { useRef } from "react";
import { Navbar } from "../components/Navbar";
import { readFile } from "../utils/readTheFile";

export const DiseaseForm = () => {
  const dragAreaRef = useRef(null);
  const hiddenInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    dragAreaRef.current.classList.add("drag-over");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    dragAreaRef.current.classList.remove("drag-over");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dragAreaRef.current.classList.remove("drag-over");

    const file = e.dataTransfer.files[0];
    if (file) {
      console.log("File dropped:", file);
      readFile(file);
    }
  };

  const handleBrowseButtonClick = () => {
    hiddenInputRef.current.click();
  };

  const handleInputChange = () => {
    const files = hiddenInputRef.current.files;
    if (files.length > 0) {
      console.log("File selected:", files[0]);
      readFile(files[0]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="drag-container">
        <div
          className="drag-area"
          ref={dragAreaRef} // Attach the ref to the div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            backgroundImage: `url("https://miro.medium.com/v2/resize:fit:1200/1*XrO7JLo3ig3qMCDKOCW3Aw.png")`,
          }}
        >
          <h2 className="choice">OR</h2>
          <input
            type="file"
            id="file-input"
            ref={hiddenInputRef}
            onChange={handleInputChange}
            multiple
            hidden
          />
          <button
            className="selectFileButton"
            onClick={handleBrowseButtonClick}
          >
            Browse Files
          </button>
        </div>
      </div>
    </>
  );
};
