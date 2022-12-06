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
              }),
              $(FavouriteIcon, { className: "fa-solid fa-heart" })
            ),
            $(
              CardText,
              null,
              $(CardTextName, null, "Cherry Fruit"),
              $(CardTextPrice, null, "$6.00/kg"),
              $(CardTextButton, null, "Add to Card")
            )
          ),
          $(
            Card,
            { className: "card-1" },
            $(
              CardPicture,
              null,
              $(CardPictureImage, {
                alt: "Cherry",
                src: "https://imgs.search.brave.com/2AHJ3frlH_62ctKfhwHgHwUkDCX85YqBkKzpw9GsYM8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wdXJl/cG5nLmNvbS9wdWJs/aWMvdXBsb2Fkcy9s/YXJnZS9wdXJlcG5n/LmNvbS1tYW5kYXJp/bm1hbmRhcmlub3Jh/bmdlY2l0cnVzLXJl/c2huaW1hbmRhcmlu/c2Zvb2QtMTcwMTUy/NzMzMTgxMXh4eHJp/LnBuZw",
              }),
              $(FavouriteIcon, { className: "fa-solid fa-heart" })
            ),
            $(
              CardText,
              null,
              $(CardTextName, null, "Tangerine Fruit"),
              $(CardTextPrice, null, "$8.00/kg"),
              $(CardTextButton, null, "Add to Card")
            )
          ),
          $(
            Card,
            { className: "card-1" },
            $(
              CardPicture,
              null,
              $(CardPictureImage, {
                alt: "Cherry",
                src: "https://imgs.search.brave.com/VkC1UkpXybaHCIXSMLuWGuUC3Jgyq9fu_dGILVc_KmQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wdXJl/cG5nLmNvbS9wdWJs/aWMvdXBsb2Fkcy9s/YXJnZS9wdXJlcG5n/LmNvbS1ncmFwZXNn/cmFwZWJlcnJ5ZnJ1/aXR3aW5lLTMzMTUy/MjQxNDkxNGxyenZm/LnBuZw",
              }),
              $(FavouriteIcon, { className: "fa-solid fa-heart" })
            ),
            $(
              CardText,
              null,
              $(CardTextName, null, "Grape Fruit"),
              $(CardTextPrice, null, "$6.10/kg"),
              $(CardTextButton, null, "Add to Card")
            )
          ),
          $(
            Card,
            { className: "card-1" },
            $(
              CardPicture,
              null,
              $(CardPictureImage, {
                alt: "Cherry",
                src: "https://imgs.search.brave.com/kM90b4B9UhMS22IEnltEjVgTUijP-KN8J7ER2uqeYPM/rs:fit:1094:900:1/g:ce/aHR0cDovL3d3dy5m/cmVlcG5naW1nLmNv/bS9kb3dubG9hZC9h/dm9jYWRvLzctMi1h/dm9jYWRvLXRyYW5z/cGFyZW50LnBuZw",
              }),
              $(FavouriteIcon, { className: "fa-solid fa-heart" })
            ),
            $(
              CardText,
              null,
              $(CardTextName, null, "Avocado Fruit"),
              $(CardTextPrice, null, "$6.90/kg"),
              $(CardTextButton, null, "Add to Card")
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
  /* border: 2px solid red; */
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
  /* border: 2px solid red; */
`;

const SearchArea = styled.div`
  /* border: 2px solid red; */
  position: relative;
  display: flex;
  align-items: center;
`;

const InputBox = styled.input`
  font-family: inherit;
  background: #eee;
  border: none;
  padding: 10px;
  text-align: center;
`;

const SearchIcon = styled.i`
  font-size: 20px;
  position: absolute;
  left: 10px;
`;

const Categories = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 30px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 20px;
    background-color: #d6dee1;
  }

  /* flex-direction: column; */
`;

const CategoryItem = styled.a`
  /* color: pink; */
  cursor: pointer;
  /* border: 2px solid red; */
  font-size: 14px;
  white-space: nowrap;

  /* text-wrap: nowrap; */
`;

const Cards = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  /* border: 2px solid red; */
`;

const Card = styled.div`
  width: 150px;
  height: 200px;
  border-radius: 8px;
  background: #eee;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #fff;
  /* gap: -10px; */
`;

const CardPicture = styled.div`
  /* width: 50%; */
  height: 45%;
  padding: 20px 0;
  background: pink;
  z-index: 100;
  position: relative;
`;

const FavouriteIcon = styled.i`
  position: absolute;
  right: 10px;
  top: 5px;
  background: #fff;
  padding: 8px;
  border-radius: 50%;
`;

const CardPictureImage = styled.img`
  position: absolute;
  /* top: 30%; */
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
`;

const CardText = styled.div`
  text-align: center;
  padding: 2px;
`;
const CardTextName = styled.div`
  font-weight: 600;
`;

const CardTextPrice = styled.div`
  font-size: 80%;
`;

const CardTextButton = styled.button`
  background: #d01118;
  font-weight: 500;
  color: #fff;
  padding: 8px 15px;
  border: none;
`;

export default Homepage;
