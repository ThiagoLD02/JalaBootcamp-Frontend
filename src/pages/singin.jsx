import { useRef } from "react";

import logo from "../imgs/logo192.png";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../features/userData/userDataSlice";
import { useNavigate } from "react-router-dom";

export default function Singin() {
  const userData = useRef({
    name: "",
    email: "",
    number: 0,
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDataState = useSelector((state) => state.userData);

  function updateData(field, value) {
    switch (field) {
      case "name":
        userData.current.name = value;
        break;
      case "email":
        userData.current.email = value;
        break;
      case "number":
        userData.current.number = value;
        break;
      case "password":
        userData.current.password = value;
        break;
    }
  }

  function createAccount(e) {
    e.preventDefault();
    console.log(userData.current);
    // check information with redux
    console.log(userDataState.name);
    if (userDataState.email === userData.current.email) {
      alert("This email is already in use");
      return;
    }
    dispatch(create(userData.current));
    navigate("/");
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
        onSubmit={createAccount}
      >
        <section style={{ width: "fit-content" }}>
          <img src={logo} alt="logo" />
        </section>
        <section>
          <div>
            <h3>Name</h3>
            <input
              required
              style={{
                padding: 8,
                borderRadius: 8,
                backgroundColor: "whitesmoke",
              }}
              type="text"
              placeholder="name"
              name="name"
              onChange={(value) => updateData("name", value.target.value)}
            />
          </div>
          <div>
            <h3>Email</h3>
            <input
              required
              style={{
                padding: 8,
                borderRadius: 8,
                backgroundColor: "whitesmoke",
              }}
              type="email"
              placeholder="email"
              name="email"
              onChange={(value) => updateData("email", value.target.value)}
            />
          </div>
          <div>
            <h3>Phone Number</h3>
            <input
              required
              style={{
                padding: 8,
                borderRadius: 8,
                backgroundColor: "whitesmoke",
              }}
              type="number"
              placeholder="33988154876"
              name="number"
              onChange={(value) => updateData("number", value.target.value)}
            />
          </div>
          <div>
            <h3>Password</h3>
            <input
              required
              style={{
                padding: 8,
                borderRadius: 8,
                backgroundColor: "whitesmoke",
              }}
              type="password"
              placeholder="password"
              name="password"
              onChange={(value) => updateData("password", value.target.value)}
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
            Create account
          </button>
        </section>
      </form>
    </main>
  );
}
