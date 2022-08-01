import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import Button from "../../atoms/button/Button";
import "./Header.scss";

const Header = () => {
  return (
    <div className="flex bg-white header">
      <div className="flex items-center justify-center gap-5">
        <img src={Logo} alt="" className="h-[50px] w-[50px]" />
        <h2 className="font-bold font-header">ECommerce UIT</h2>
      </div>
      <div className="nav h-full ml-auto flex items-center justify-center gap-x-[28px] mr-[80px]">
        {/* <li className="item active">
          <a href="/" className="">
            Trang chủ
          </a>
        </li>
        <li className="item">
          <a href="/"> Tin tức</a>
        </li>
        <li className="item">
          <a href="/"> Giới thiệu</a>
        </li>
        <li className="item">
          <a href="/"> Liên hệ</a>
        </li> */}
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
      <Button disabled className="px-8 py-3 btn-base rounded-lg">
        Join
      </Button>
    </div>
  );
};

export default Header;
