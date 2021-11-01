import React, { useState } from "react";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isClick, setIsClick] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setIsClick(false);
    event.preventDefault();
  }

  function clicked() {
    setIsClick(true);
  }

  return (
    <div>
      <form className="create-note">
        {isClick && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          onClick={clicked}
          rows={isClick ? 3 : 1}
        />
        <Zoom in={isClick ? true : false}>
          <Fab onClick={submitNote}>
            <PostAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
