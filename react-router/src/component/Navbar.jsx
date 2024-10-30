import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const routes = ["home", "about", "login", "account"];
  const path = useLocation().pathname?.split("/")[1];

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {routes.map((item) => (
        <Link
          to={`/${item === "home" ? "" : item}`}
          style={{
            color: path === (item === "home" ? "" : item) ? "red" : "black",
          }}
        >{`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}</Link>
      ))}
    </div>
  );
}
