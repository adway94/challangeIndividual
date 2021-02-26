import React, { setState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function CreatePost() {
  const classes = useStyles();
  const [post, setPost] = setState({});

  function submitHandler() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then(function (response) {
        alert("Creation Success: " + response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const postHandler = (e) => {
    post[e.target.id] = e.target.value;
    setPost({ post });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="Title" label="Title" onChange={postHandler} />
      <TextField id="Content" label="Content" onChange={postHandler} />
      <TextField id="Category" label="Category" onChange={postHandler} />
      <Button variant="contained" onClick={submitHandler}>
        Create
      </Button>
    </form>
  );
}
