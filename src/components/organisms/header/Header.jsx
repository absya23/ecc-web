import React from "react";
import { NavLink } from "react-router-dom";
import { useViewport } from "../../../context/viewportContext";
import Button from "../../atoms/button/Button";
import Logo from "../../atoms/logo/Logo";
import "./Header.scss";
import HeaderRes from "./HeaderRes";

const Header = () => {
  const { width } = useViewport();
  const breakpoint = 750;
  if (width >= breakpoint)
    return (
      <header className="bg-white header">
        <div className="flex w-full max-w-[1200px] mx-auto header-container">
          <Logo></Logo>
          <div className="nav h-full ml-auto flex items-center justify-center gap-x-[28px] mr-[80px]">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tin tức
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Giới thiệu
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Liên hệ
            </NavLink>
          </div>
          <Button className="rounded-lg btn-base">
            <a
              href="https://www.facebook.com/groups/ecommerceclubuit"
              target="_blank"
              rel="noreferrer"
              className="block px-8 py-3"
            >
              Join
            </a>
          </Button>
        </div>
      </header>
    );
  else return <HeaderRes></HeaderRes>;
};

export default Header;
