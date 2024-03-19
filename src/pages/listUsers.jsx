import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Cards } from "../components/cards";

export default function ListUsers() {
  return (
    <main
      style={{
        height: "max-content",
        backgroundColor: "#264eca",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <header
        style={{
          backgroundColor: "whitesmoke",
          height: "fit-content",
          padding: 50,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <h1>Pages</h1>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <Link
            to="/login"
            style={{
              width: "100%",
              maxWidth: 450,
              padding: 8,
              borderRadius: 8,
              backgroundColor: "#264eca",
              color: "white",
              borderWidth: 0,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Login
          </Link>
          <Link
            to="/singin"
            style={{
              width: "100%",
              maxWidth: 450,
              padding: 8,
              borderRadius: 8,
              backgroundColor: "#264eca",
              color: "white",
              borderWidth: 0,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Singin
          </Link>
        </div>
      </header>
      <h1 style={{ alignSelf: "center", color: "white" }}>Users on store</h1>
      <section
        style={{
          display: "grid",
          maxWidth: 1360,
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 20,
          padding: 50,
        }}
      >
        <Cards />
      </section>
    </main>
  );
}
