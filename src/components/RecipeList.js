import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router-dom";

class RecipeList extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <h4 className="link">
          <Link to="/favourite">Favourites</Link>{" "}
        </h4>
        {this.props.recipes.map((recipe, index) => {
          return (
            <RecipeItem key={index} recipe={recipe} favouriteButton={true} />
          );
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  null
)(RecipeList);
