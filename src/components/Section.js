import React from "react";
import styled from "styled-components";
import "./css/section.css";

function Section(props) {
  return (
    <div className="section">
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.intro}</p>
        <span className="BtnContainer">
          <a href="#" class="btn">
            CUSTOM ORDER
          </a>
          <a href="#" class="btn2">
            EXISTING INVENTORY
          </a>
        </span>
      </ItemText>
    </div>
  );
}

export default Section;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 60px;
  font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  h1 {
    font-size: 40px;
    font-weight: 600;
  }
  p {
    margin-top: 0px;
  }

  .BtnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30%;
    a {
      text-decoration: none;
      margin: 0 10px;
    }
    .btn {
      color: #fff;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding: 5px 15px;
      border-radius: 500px;
      display: inline-block;
      font-weight: 500;
      transition: all 0.4s ease-in-out;
      background-size: 152% 100%;
      background: #333232;
    }
    .btn:hover {
      background: transparent;
      border-color: #fd4766;
      color: #fd4766;
      border: 1px solid #111;
    }

    .btn a {
      text-decoration: none !important;
    }

    .btn2 {
      color: rgb(0, 0, 0);
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding: 5px 15px;
      border-radius: 500px;
      display: inline-block;
      font-weight: 500;
      transition: all 0.4s ease-in-out;
      background-size: 100% 50%;
      background: #ffffff;
    }
    .btn2:hover {
      background: transparent;
      border-color: #fd4766;
      color: #fd4766;
      border: 1px solid #111;
    }
    .btn2 a:link {
      text-decoration: none;
    }
  }
`;
