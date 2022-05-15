import React from "react";

export function Menu() {
  const [show, setShow] = React.useState(false);

  let showMenu = () => {
    setShow((old) => !old);
    // document.querySelector(".navigation").classList.toggle("active");
    // document.querySelector(".menu").classList.toggle("hide");
    // document.querySelector(".close").classList.toggle("show");
  };
  return (
    <div className={"menu" + show ? "hide" : ""}>
      <a className="logo flex-1" href=" ">
        Laptop Research
      </a >
      <div>
        <span onClick={showMenu}>
          <i className="material-icons menu">menu</i>
          <i className={"material-icons close" + show ? "show" : ""}>close</i>
        </span>
      </div>
      <nav className={"navigation" + show ? " active" : ""}>
        <ul>
          <li>
            <a href="#home">Home</a >
          </li>
          <li>
            <a href="#takeTest">Take Test</a >
          </li>
          <li>
            <a href="#compareTool">Compare Tool</a >
          </li>
        </ul>
      </nav>
    </div>
  );
}