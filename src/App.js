
import { createElement as $ } from "react";
import Homepage from "./Pages/Homepage";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return $(
    "div",
    { className: "App" },
    $(Homepage)

    // my app
  );
}

export default App;
