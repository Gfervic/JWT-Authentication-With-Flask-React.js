import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/home.css";

// import {useNavigate} from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/home')

export const Login = () => {
  // When we call setStore fc on flux the login view will refresh automatically cuz the store it's hooked to the context api.
  // The context api will re-render the component and the next time it will know that the is a token in the session
  const { store, actions } = useContext(Context);
  // We need to send the email and the password to the backend, we used a controlled component
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  console.log("This is your token: ", store.token);

  const handleClick = () => {
    actions.login(email, password);
  };

  if (store.token && store.token != "" && store.token != undefined)
    history.push("/");
  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      {store.token && store.token != "" && store.token != undefined ? (
        "You are logged in with this token: " + store.token
      ) : (
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>Log in</button>
        </div>
      )}
    </div>
  );
};
