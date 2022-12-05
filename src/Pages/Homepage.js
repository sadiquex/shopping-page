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
          $(
            MenuItems,
            null,
            $(MenuIcon, { className: "fa-solid fa-bars" }),
            $(ProfileIcon, { className: "fa-solid fa-user" })
          )
        ),
        $(Welcome, null, "Welcome back, Abubakar"),
        $(
          SearchArea,
          null,
          $(InputBox, { placeholder: "Search" }),
          $(SearchIcon, { className: "fa fa-search" })
        ),
        $(
          Categories,
          null,
          $(CategoryItem, null, "Fruits"),
          $(CategoryItem, null, "Fruit Salad"),
          $(CategoryItem, null, "Smoothies"),
          $(CategoryItem, null, "Fruit Parfait"),
          $(CategoryItem, null, "Item 1")
        ),
        $(
          Cards,
          null,
          $(
            Card,
            { className: "card-1" },
            $(
              CardPicture,
              null,
              $(CardPictureImage, {
                src: "https://imgs.search.brave.com/f72UzmMLnpkERU0b-w0gwC1Tgs5kAGAS_XtZHDe0-Uo/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5m/cmVlcG5naW1nLmNv/bS9kb3dubG9hZC9j/aGVycnkvMTgtY2hl/cnJ5LXBuZy1pbWFn/ZS5wbmc",
                alt: "Cherry",
              })
            ),
            $(
              CardText,
              null,
              $(CardTextName, null, "Card text name"),
              $(CardTextPrice, null, "Price"),
              $(CardTextButton, null, $(PTagInside, null, "afsgd"))
            )
          )
        )
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
  /* height: 600px; */
  padding: 10px;
  background: #fff;
  box-shadow: 2px 1px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const MenuItems = styled.div`
  border: 2px solid red;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column: 1 / span 2;
`;

const MenuIcon = styled.i``;
const ProfileIcon = styled.i`
  color: #fff;
  background: #000;
  border-radius: 50%;
  padding: 8px;
`;

const Welcome = styled.p`
  border: 2px solid red;
`;

const SearchArea = styled.div`
  border: 2px solid red;
  display: flex;
  align-items: center;
`;

const InputBox = styled.input`
  font-family: inherit;
  padding: 10px;
`;

const SearchIcon = styled.i`
  font-size: 20px;
`;

const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 20px;
    background-color: #d6dee1;
  }
  text-wrap: nowrap;

  /* flex-direction: column; */
`;

const CategoryItem = styled.p`
  color: pink;
  cursor: pointer;
  border: 2px solid red;

  /* text-wrap: nowrap; */
`;

const Cards = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  border: 2px solid red;
`;

const Card = styled.div`
  width: 150px;
  height: 200px;
  border-radius: 8px;
  background: #eee;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.6);
  /* position: relative; */
  overflow: hidden;
  /* overflow: scroll; */
  display: flex;
  flex-direction: column;
  background: #fff;
  /* gap: -10px; */
`;

const CardPicture = styled.div`
  /* width: 50%; */
  height: 50%;
  padding: 20px 0;
  background: pink;
  z-index: 100;
  position: relative;
`;

const CardPictureImage = styled.img`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  border: 2px solid red;
`;

const CardText = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  border: 2px solid green;
  text-align: center;
`;
const CardTextName = styled.div`
  background: brown;
`;

const CardTextPrice = styled.div`
  background: blue;
`;

const CardTextButton = styled.a`
  background: red;
  color: #fff;
  text-align: center;
  display: inline-block;
  align-self: center;
  /* padding: 0px 24px; */
  /* border-radius: 8px; */
`;

const PTagInside = styled.p`
  color: green;
`;

export default Homepage;
