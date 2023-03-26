import React, { Component } from "react";
import { Content } from "../components/Landing/Content";
//Homepage
export default class HomePage extends Component {
  render() {
    return (
      <>
        <div class="h-screen">
          <hr className="mx-10 border-[#686262]" />
          <Content />
        </div>
      </>
    );
  }
}
