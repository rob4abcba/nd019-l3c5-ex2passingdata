import React, { Component } from "react";
import MovieCard from "./MovieCard";

class Dashboard extends Component {
  render() {
    /*
    Destructuring via ES6. We're getting the profiles, users, and movies properties
    off of the props passed into this presentational component. If you need a refresher on this syntax, check
    out this course: https://www.udacity.com/course/es6-javascript-improved--ud356
    */
    const { profiles, usersByMovie, users, movies } = this.props;

    const movieCards = Object.keys(movies).map(id => (
      <MovieCard
        key={id}
        users={users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={movies[id]}
      />
    ));
    console.log("Dashboard.js: Seems like we never use profiles = ", profiles);

    /*
    Return JSX
    */
   return <ul>{movieCards}</ul>;
}
}

export default Dashboard;