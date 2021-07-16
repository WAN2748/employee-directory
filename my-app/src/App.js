import React from "react";
import Main from "../src/components/Main/main";
import Wrapper from "../src/components/wrapper";
import Header from "../src/components/Header/header";
import "./App.css";

function App(){
return (
<div className="App">
  <Wrapper>
    <Header />
    <Main />
  </Wrapper>
</div>
);
}
export default App;