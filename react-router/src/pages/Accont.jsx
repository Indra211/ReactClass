import React from "react";
import { useLocation } from "react-router-dom";

export default function Accont() {
  const { state } = useLocation();
  return state ? <div>Accont : {state}</div> : <div>Accont</div>;
}
