export const readFile = (file) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const fileContent = event.target.result;
    console.log(fileContent);
    // model will get the fileContent from here only
  };

  reader.onError = (err) => {
    console.log("Error: " + err);
  };

  if (file.type.startsWith("text")) {
    reader.readAsText(file);
  } else if (file.type.startsWith("image")) {
    reader.readAsDataURL(file);
  } else {
    reader.readAsArrayBuffer(file);
  }
};
