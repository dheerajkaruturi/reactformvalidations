import React, { useState } from "react";

const Contact = () => {
  const [state, setState] = useState({
    username: "",
    password: "", 
    email: "",
  });
  const { username, password, email } = state;
  const handleEvent = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleEvent}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleEvent}
      />
      <input type="email" name="email" value={email} onChange={handleEvent} />
      <input type="submit" />
    </form>
  );
};

export default Contact;
