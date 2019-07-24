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
    if (window.pageYOffset === 0) {
      this.setState({ show: true});
    } else {
      this.setState({ show: false});
    }
  };

  handleScroll() {
    setTimeout(() => this.scroll(), 0);
  };

  render() {
    return (
        <div onScroll={this.handleScroll()} className={this.state.show ? "navbar" : "noNavbar"}>
          <div className="header"></div>
          <div>
            <Dropdown />
          </div>
        </div>
    );
  }
}

export default navbar;