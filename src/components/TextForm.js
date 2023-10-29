import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  }
  const handleClear = () => {
    setText("");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);

  }
  const [Text, setText] = useState('');
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" onChange={handleOnChange} value={Text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-2 mx-sm-3" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-3 mx-sm-0" onClick={handleClear}>Clear the Text</button>
        </div>

      <div className="container my-3">
        <h1>Your text analysis</h1>
        <p>{Text.trim() === '' ? 0 : Text.split(" ").length} Words and {Text.length} Characters</p>
        <p>{0.008 * Text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>

    </>);
}
