import React from "react";

const CreateGist = () => {
  const createGistFile = () => {
    console.log("Create Gist Account.");
  };
  return (
    <div className="create-gist">
      <form
        className="createGist"
        action="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"
      >
        <input
          type="Text"
          name="createGistDesc"
          id="gist-input"
          placeholder="Enter gist description..."
          autoComplete="off"
          maxLength={50}
          required
        ></input>
        <input
          type="Text"
          name="createGistFileName"
          id="gist-input"
          placeholder="Enter file name..."
          autoComplete="off"
          maxLength={50}
          required
        ></input>
        <textarea
          id="gist-text__area"
          placeholder="Enter file content..."
          autoComplete="off"
          required
        ></textarea>
        {/* <button className="uploadFile inputFile">
          Add File <li class="fa fa-upload"></li>
        </button> */}
        <button type="submit" onClick={createGistFile} className="uploadFile">
          Create Gist
        </button>
      </form>
    </div>
  );
};

export default CreateGist;
