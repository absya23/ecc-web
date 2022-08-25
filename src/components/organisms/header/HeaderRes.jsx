import React from "react";
import { NavLink } from "react-router-dom";
import useClickOutside from "../../../hooks/useClickOutside";
import Button from "../../atoms/button/Button";
import Logo from "../../atoms/logo/Logo";
import "./Header.scss";

const HeaderRes = () => {
  const { nodeRef, show, setShow } = useClickOutside();
  const handleClose = () => {
    setShow(false);
  };
  return (
    <header className="relative bg-white header header-res">
      <div className="flex w-full max-w-[1200px] mx-auto items-center justify-between header-container">
        <Logo></Logo>
        <Button
          className="flex items-center justify-center w-10 h-10 rounded-md btn-menu"
          onClick={() => {
            setShow(true);
            console.log(show);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="20"
            height="20"
          >
            <path
              fill="#86abf9"
              d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
            />
          </svg>
        </Button>
        <div
          className={`nav w-1/2 max-w-[240px] h-screen z-[2000] bg-white flex flex-col justify-start absolute right-0 top-0 transition-all menu-sidebar ${
            show ? "post-card-shadow" : "hidden invisible"
          }`}
          ref={nodeRef}
          onClick={handleClose}
        >
          <div className="flex items-center justify-end w-full h-10 pr-4">
            <span className="p-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                width="20"
                height="20"
              >
                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
              </svg>
            </span>
          </div>
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
          <Button className="rounded-lg">
            <a
              href="https://www.facebook.com/groups/ecommerceclubuit"
              target="_blank"
              rel="noreferrer"
              className="block px-8 py-3"
            >
              <span className="mr-2 arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="12"
                  height="12"
                >
                  <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                </svg>
              </span>
              Join
            </a>
          </Button>
        </div>
      </div>
      {show && (
        <div className="absolute inset-0 z-[1000] w-full h-screen bg-black opacity-25 overlay transition-all"></div>
      )}
    </header>
  );
};

export default HeaderRes;
