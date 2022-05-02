import React from "react";
import Section from "./Section";
import "./css/section.css";

function Home() {
  return (
    <>
      <div className="model3">
        <Section title="Model 3" intro="Order Online for Touchless Delivery" />
        <img src="/img/angle-down-solid.svg" width="30" />
      </div>
      <div className="modelX">
        <Section title="Model X" intro="Order Online for Touchless Delivery" />
      </div>
    </>
  );
}

export default Home;

//Styling for Container
// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   background-image: url("img/model-3.jpg");
//   background-position: center center;
//   background-size: cover;
// `;
