import React from "react";
import Cards from "./Cards.jsx";
import Headings from "./Headings.jsx";
import Content from "./Content.jsx";

function Full_Content() {
  return (
    <div>
      <div class="container">
        <Headings />
      </div>
      <Content />
      <Cards />
    </div>
  );
}
export default Full_Content;
