import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import image from "../../images/images";
class PopupLoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      toggle: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFunc = this.toggleFunc.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ name: "" });
    this.setState({ password: "" });
  }

  toggleFunc() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
      <div className="popupBackground">
        <div
          className={
            !this.state.toggle ? "popupContainer" : "create--account--form"
          }
        >
          <div
            onClick={this.props.handleChangePopup}
            className="titleCloseButtonLog"
          >
            <i className="fas fa-times" />
          </div>

          {/* login  */}
          <div className="login--Popup">
            <span className="logo">
              <img src={image.logo} alt="" />
            </span>

            <form onSubmit={this.handleSubmit} className="form--login">
              {this.state.toggle ? (
                <input
                  type="email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                  placeholder="Email"
                />
              ) : null}
              <input
                type="text"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                placeholder={
                  this.props.lang && this.props.inputIcon.Name.placeholderEN
                }
              />
              <input
                type="password"
                name=""
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                placeholder={
                  this.props.lang && this.props.inputIcon.Password.placeholderEN
                }
              />

              {this.state.toggle ? (
                <button className="create--acc">CREATE ACCOUNT</button>
              ) : (
                <button className="login--button">LOGIN</button>
              )}
              <p onClick={this.toggleFunc}>
                {this.state.toggle ? " Log-In" : "Create Account"}
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logUser: state.userLog,
});

export default connect(mapStateToProps)(PopupLoginRegister);
