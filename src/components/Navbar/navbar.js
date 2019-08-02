import React from 'react';
import Dropdown from'./Dropdown/dropdown'
import './navbar.scss';
import Elements from './Elements/elements';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginChange } from '../../actions/accountActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  };

  scroll() {
    if (window.pageYOffset <= 250) {
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
          <div className="welcomeText">
            <div className="welcomeText">{this.props.login ? "Welcome " + this.props.user : ""}</div>
          </div>
          <div>
            <Dropdown />
          </div>
        </div>
    );
  }
}

Navbar.propTypes = {
  loginChange: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
  user: PropTypes.string
}

const mapStateToProps = state => ({
  login: state.login.value,
  user: state.login.name
});

export default connect(mapStateToProps, { loginChange })(Navbar);
