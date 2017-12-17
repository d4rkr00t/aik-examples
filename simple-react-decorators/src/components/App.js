import React from "react";
import injectProps from "../decorators/injectProps";

export default class App extends React.Component {
  @injectProps
  render(props) {
    return <pre>{props ? JSON.stringify(props, null, 2) : "Empty props"}</pre>;
  }
}
