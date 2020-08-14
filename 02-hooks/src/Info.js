import React, { useState } from "react";

export default function UseInfo() {
  const log = console.log;
  const [info, setInfo] = useState("");
  function onChange(e) {
    const { name, value } = e.target;
    setInfo({
      [name]: value,
    });
    log(name, value);
  }
  const { name, value } = info;
  return (
    <div>
      <input name={name} value={value} onChange={onChange}></input>
    </div>
  );
}
