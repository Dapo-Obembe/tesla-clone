import React from "react";
import styled from "styled-components";
import { device } from "../Breakpoints";
import "./css/header.css";

function Header() {
  return (
    <HeaderContainer>
      <nav>
        <img src="/img/logo.svg" class="logo" />
        <ul className="firstList">
          <li>
            <a href="#">Model S</a>
          </li>
          <li>
            <a href="#">Model 3</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Solar Roof</a>
          </li>
          <li>
            <a href="#">Solar Panels</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;
    background-color: transparent;
  }
  .logo {
    max-height: 50px;
  }
  nav ul li {
    list-style: none;
    display: inline-block;
    padding: 5px 10px;
  }

  @media ${device.tablet} {
    .firstList ul li {
      display: none;
    }
  }
  nav ul li a {
    color: #1d1d24;
    position: relative;
    padding: 5px 0;
    text-decoration: none;
  }
  nav ul li a:hover {
    color: #fd4766;
  }
  nav ul li a:after {
    content: "";
    position: absolute;
    left: 0;
    width: 0;
    height: 4px;
    background: #fd4766;
    transition: 0.3s;
    bottom: 0;
  }
  nav ul li a:hover:after {
    width: 100%;
  }
`;
