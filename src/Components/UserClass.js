import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        Count : {this.state.count}
        <br />
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >Increment</button>
        <br />
        Name : {this.props.name}
      </div>
    );
  }
}
export default UserClass;
