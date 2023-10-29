import React from "react";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          TextUtils
        </a>
        
          <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'} `}>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>
          </div>
      
      </div>
    </nav>
  );
}
