import React, { useContext } from "react";
import { MovieContext } from "./context";

export const Navbar = () => {
  const [value] = useContext(MovieContext);
  return (
    <div>
      <h1 style={{ background: "black", color: "white" }}>
        Navbar Total: {value.length}
      </h1>
    </div>
  );
};

export default Navbar;
