import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Dashboard";

/*
Display a list of movies where each movie contains a list of users that favorited it.
For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: "1",
    favoriteMovieID: "1"
  },
  {
    id: 2,
    userID: "2",
    favoriteMovieID: "1"
  },
  {
    id: 3,
    userID: "4",
    favoriteMovieID: "5"
  },
  {
    id: 4,
    userID: "5",
    favoriteMovieID: "2"
  },
  {
    id: 5,
    userID: "3",
    favoriteMovieID: "5"
  },
  {
    id: 6,
    userID: "6",
    favoriteMovieID: "4"
  }
];

const users = {
  1: {
    id: 1,
    name: "Jane Jones",
    userName: "coder"
  },
  2: {
    id: 2,
    name: "Matthew Page",
    userName: "mpage"
  },
  3: {
    id: 3,
    name: "Autumn Green",
    userName: "user123"
  },
  4: {
    id: 3,
    name: "John Doe",
    userName: "user123"
  },
  5: {
    id: 5,
    name: "Lauren Johnson",
    userName: "user123"
  },
  6: {
    id: 6,
    name: "Nicholas Lain",
    userName: "user123"
  }
};

const movies = {
  1: {
    id: 1,
    name: "Planet Earth 1"
  },
  2: {
    id: 2,
    name: "Selma"
  },
  3: {
    id: 3,
    name: "Million Dollar Baby"
  },
  4: {
    id: 4,
    name: "Forrest Gump"
  },
  5: {
    id: 5,
    name: "Get Out"
  }
};

class App extends Component {
  /*
  The constructor is a "special method for creating and initializing an object."
  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). The
  Component's constructor is the first thing that runs when the object is created.
  */

  //MC: constructor reflects INITIAL state of your app
  constructor(props) {
    super(props);
    this.usersByMovie = {};
    /* 
    map the users by the movie they liked.
    */
    profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID; //MC: Notice profile(item) not profiles(full array)
      //MC: Have to use "this" keyword before usersByMovie (i.e. this.usersByMovie[movieID]
      if (this.usersByMovie[movieID]) {
        this.usersByMovie[movieID].push(profile.userID); //MC: Notice profile.userID not users[movieID].name
      } else {
        this.usersByMovie[movieID] = [profile.userID]; //MC: Notice array [profile.userID] not string users[movieID].name
      }
    });
  }

  /*
  The render method gets called automatically every time the value of the
  component's props changes.
  */
  render() {
    console.log("PossibleSolution2: Add prop.profiles to send down to Dashboard.js");
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">nd019 L3C5 Ex2PassingData</h1>
          <h2>PossibleSolution2</h2>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
        <Dashboard
          profiles={profiles}
          usersByMovie={this.usersByMovie}
          movies={movies}
          users={users}
        />
      </div>
    );
  }
}

export default App;
