import React, { Component } from "react";
import Header from "./Header";
import Meme from "./Meme";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Meme />
      </div>
    );
  }
}
