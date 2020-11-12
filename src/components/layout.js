import React from "react";
import { NavLink } from "react-router-dom";
import { path } from "../route/constant";
import { ImHome } from "react-icons/im";
import { FaPlusCircle } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <div>
      <ul className="horizontal">
        <li>
          <NavLink to={path.home}>
            <ImHome className="vertical-top" size={20} />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={path.createBook}>
            <FaPlusCircle className="vertical-sub" size={20} />
            Book
          </NavLink>
        </li>
      </ul>
      {children}
    </div>
  );
};
export default Layout;
