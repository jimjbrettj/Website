import React from 'react';
import Dropdown from'./Dropdown/dropdown'
import './navbar.scss';
import Elements from './Elements/elements';

class navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  };

  scroll() {
    console.log("You made it");
    if (window.pageYOffset === 0) {
      this.setState({ show: true});
    } else {
      this.setState({ show: false});
    }
    console.log(this.state.show);
  };

  handleScroll() {
    setTimeout(() => this.scroll(), 0);
  };

  render() {
    return (
        <div onScroll={this.handleScroll()} className={this.state.show ? "navbar" : "noNavbar"}>
          <div className="header"></div>
          <div>
            <Elements />
          </div>
          <div>
            <Dropdown />
          </div>
        </div>
    );
  }
}

export default navbar;