import React, { Component } from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setRecipes } from "../actions";

class SearchRecipe extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: "",
      dish: ""
    };
  }
  search() {
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

    console.log("state", this.state, "url", url);

    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.props.setRecipes(json.results);
      });
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <Form.Label>Ingredients</Form.Label>{" "}
          <FormControl
            type="text"
            placeholder="garlic,chicken"
            onChange={event =>
              this.setState({ ingredients: event.target.value })
            }
          />
        </FormGroup>{" "}
        <FormGroup>
          <Form.Label>Dish</Form.Label>{" "}
          <FormControl
            type="text"
            placeholder="adobo"
            onChange={event => this.setState({ dish: event.target.value })}
          />
        </FormGroup>{" "}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}
export default connect(
  null,
  { setRecipes }
)(SearchRecipe);
