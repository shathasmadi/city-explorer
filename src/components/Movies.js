import React from "react";
import Movie from "./Movie";

class Movies extends React.Component {
  render() {
    return (
      <div>
        <Movie
        Movie={this.props.movies}
        />
      </div>
      );
  }
}

export default Movies;