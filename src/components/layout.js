import React from "react";
import { NavLink } from "react-router-dom";
import { path } from "../route/constant";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <div>
      <ul className="horizontal">
        <li>
          <NavLink to={path.home}>
            <FaHome />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={path.createBook}>
            <FaBook />
            Book
          </NavLink>
        </li>
      </ul>
      {children}
    </div>
  );
};
export default Layout;
