import React from "react";
import { Link } from "react-router-dom";
 
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Arcane DC</h1>
        <Link to="/profile">Go back to profile</Link>
        <div>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fird_sl&psig=AOvVaw0N7UOeNa7yg9cEB8jtGWjw&ust=1600164832649000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICssOS06OsCFQAAAAAdAAAAABAD"></img>
        </div>
      </div>
    );
  }
}