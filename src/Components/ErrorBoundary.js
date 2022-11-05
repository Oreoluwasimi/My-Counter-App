import React from "react";
import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }


  static getDerivedStateFromError(error) {
    return {
      message: error.message,
    };
  }

  componentDidCatch(error, errorInfo) {
   
  }
  render() {
        if (this.state.hasError) {
          return <h1>Something went wrong.</h1>
        }
        return this.props.children;
    };
   
}
