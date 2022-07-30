import React from "react";
import Logo from "../../assets/logo.png";
import Button from "../button/Button";
import "./Header.scss";

const Header = () => {
  return (
    <div className="flex bg-white header">
      <div className="flex items-center justify-center gap-5">
        <img src={Logo} alt="" className="h-[50px] w-[50px]" />
        <h4 className="font-bold font-header">ECommerce UIT</h4>
      </div>
      <ul className="nav h-full ml-auto flex items-center justify-center gap-x-[28px] mr-[80px]">
        <li className="item active">
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
        </li>
      </ul>
      <Button disabled className="btn-base">
        Join
      </Button>
    </div>
  );
};

export default Header;
