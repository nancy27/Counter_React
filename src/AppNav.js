import React from "react";

function AppNav({totalLength}) {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
            Navbar
         <span className="badge badge-pill badge-secondary m-2"> {totalLength}
        </span> 
        </a>
      </nav>
    </div>
  );
}

export default AppNav;
