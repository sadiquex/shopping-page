import styled from "styled-components";
import { createElement as $ } from "react";

function Homepage() {
  return $(
    "div",
    null,
    $(
      MainContainer,
      { className: "main-container" },
      $(
        Wrapper,
        null,
        $(
          Top,
          null,
          $(MenuIcon, { className: "fa-solid fa-bars" }),
          $(ProfileIcon, { className: "fa-solid fa-user" })
        ),
        $(Welcome, null, "Welcome back, Abubakar")
      )
    )
  );
}

const MainContainer = styled.div`
  background: pink;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
`;
const Wrapper = styled.div`
  width: 400px;
  height: 600px;
  background: #fff;
  box-shadow: 2px 1px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const MenuIcon = styled.i``;
const ProfileIcon = styled.i`
  color: #fff;
  background: #000;
  border-radius: 50%;
  padding: 8px;
`;

const Welcome = styled.p``;

export default Homepage;
