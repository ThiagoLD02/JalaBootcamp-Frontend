import { useRef } from "react";

import logo from "../imgs/logo192.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();

  const email = useRef("");
  const password = useRef("");

  function handleEmail(e) {
    email.current = e.target.value;
  }
  function handlePassword(e) {
    password.current = e.target.value;
  }

  function login(e) {
    e.preventDefault();
    if (email.current === "") {
      alert("The username is empty");
      return;
    }
    if (password.current === "") {
      alert("The password is empty");
      return;
    }
    const a = [];

    const find = userData.findIndex((user) => user.email === email.current);

    if (find !== -1) {
      if (userData[find].password === password.current) {
        alert("Successfull login");
        navigate("/");
      } else alert("Wrong password");
    } else alert("Email not found");
  }

  return (
    <main
      style={{
        height: "100vh",
        backgroundColor: "#264eca",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          height: "fit-content",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          paddingTop: 50,
          paddingBottom: 50,
          paddingLeft: 120,
          paddingRight: 120,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={login}
      >
        <section style={{ width: "fit-content" }}>
          <img src={logo} alt="logo" />
        </section>
        <section>
          <div>
            <h3>Email</h3>
            <input
              style={{
                padding: 8,
                borderRadius: 8,
                backgroundColor: "whitesmoke",
              }}
              type="email"
              placeholder="Email"
              name="Email"
              onChange={handleEmail}
              required
            />
          </div>
          <div>
            <h3>Password</h3>
            <input
              style={{
                padding: 8,
                borderRadius: 8,
                backgroundColor: "whitesmoke",
              }}
              type="password"
              placeholder="password"
              name="password"
              onChange={handlePassword}
              required
            />
          </div>
        </section>
        <section style={{ width: "100%", paddingTop: 24 }}>
          <button
            style={{
              width: "100%",
              padding: 8,
              borderRadius: 8,
              backgroundColor: "#264eca",
              color: "white",
              borderWidth: 0,
            }}
            type="submit"
          >
            Login
          </button>
        </section>
      </form>
    </main>
  );
}
