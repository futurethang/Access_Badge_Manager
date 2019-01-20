import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 10 }} className="btn btn-success" type="submit">
      {props.children}
    </button>
  );
}
