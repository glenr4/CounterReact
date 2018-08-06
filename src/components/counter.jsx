import React, { Component } from "react";

class Counter extends Component {
  state = {
    // value: 0,
    value: this.props.value, // this is value={counter.value} in counters
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };

  // Use 'arrow function' (lambda) instead
  // constructor() {
  //   super(); // call base class constructor
  //   //console.log("Constructor", this);
  //   // binds 'this' class so that it can be used in handleIncrement()
  //   // -> handleIncrement is only referenced by onClick, not called by it
  //   // in the button element, therefore this needs to be done.
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    console.log("props", this.props);

    return (
      //<div>
      //   <h1>Hello World</h1>
      //   <button>Increment</button>
      //   </div>
      /* <img src={this.state.imageUrl} alt="" /> */
      /* <span style={this.styles} className="badge badge-primary m-2"> */

      // To avoid adding another Div use: React.Fragment
      // Can also do inline styles with: style = { {fontSize: 10, fontWeight: "bold"}}, this is just an anonymous object inside the JSX curly braces
      //   <React.Fragment>
      //     <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      //     <button className="btn btn-secondary btn-sm">Increment</button>
      //     <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      //   </React.Fragment>

      <div>
        {/* Children are what is inbetween the <Counter> tags */}
        <h1>{this.props.children}</h1>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  // Need an arrow function as onClick references this, it doesn't call it
  // Can also put arrow functions inline too:
  // onClick={ () => handleIncrement()}
  handleIncrement = () => {
    // console.log("Increment clicked", this);

    // React works differently, need to set the state to a new object
    // with the value in it that we want, then it updates the UI
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    // Each <li> in the list needs a unique identifier ie the key
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
