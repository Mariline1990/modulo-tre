import { Component } from "react";

class ImageComponent extends Component {
  render() {
    console.log(this);
    return <img src={this.props.src} style={this.props.style} alt={this.alt}></img>;
  }
}

export default ImageComponent;
