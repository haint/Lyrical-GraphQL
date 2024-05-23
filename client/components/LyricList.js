import React, { Component } from "react";

class LyricList extends Component {

  renderLyric() {
    return this.props.lyrics.map(({ id, content }) => {
      return <li className="collection-item" key={id}>{content}</li>;
    });
  }

  render() {
    return (
      <ul className="collection">
        {this.renderLyric()}
      </ul>
    );
  }
}

export default LyricList;