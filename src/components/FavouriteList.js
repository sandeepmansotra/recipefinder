import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router-dom";

class FavouriteList extends Component {
  render() {
    return (
      <div>
        <h4 className="link">
          {" "}
          <Link to="/">Home</Link>{" "}
        </h4>
        <h1>Favourite Recipes:</h1>
        {this.props.favouriteRecipe.map((recipe, index) => {
          return (
            <RecipeItem key={index} recipe={recipe} favouriteButton={false} />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favouriteRecipe: state.favouriteRecipe
  };
}

export default connect(
  mapStateToProps,
  null
)(FavouriteList);
