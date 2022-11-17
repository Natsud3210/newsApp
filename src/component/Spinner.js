import React, { Component } from "react";
import loding from "./loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="my-3" src={loding} alt="loading" />
      </div>
    );
  }
}
