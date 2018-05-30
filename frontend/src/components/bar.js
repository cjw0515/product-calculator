import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import Login from "./login";
import SignUp from "./signup";
import FlatButton from "material-ui/FlatButton";

const styles = {
  title: {
    cursor: "pointer"
  }
};

class Bar extends Component {
  state = {
    loginOpen: false,
    signUpOpen: false
  };

  state = {
    loginId: '',
    loginPassword: '',
    signUpId: '',
    signUpPassword: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  handleOpen = dialogType => {
    if (dialogType === "login") {
      this.setState({
        loginOpen: true
      });
    }else if(dialogType === "signUpOpen"){
      this.setState({
        signUpOpen: true
      })
    }
  };

  handleClose = dialogType => {
    if (dialogType === "login") {
      this.setState({
        loginOpen: false
      });
    }else if(dialogType === "signUpOpen"){
      this.setState({
        signUpOpen: false
      })
    }
  };

  handleClick = () => {
    alert("onClick triggered on the title component");
  };

  handleLogin = () => {
    alert('login');
  }

  handleSignUp = () => {
    alert('signup');
  }

  render() {
    return (
      <div>
        <AppBar
          title={<span style={styles.title}>calculator</span>}
          onTitleClick={this.handleClick}
          /* iconElementLeft={<IconButton><NavigationClose /></IconButton>} */
          iconElementRight={
            <FlatButton
              label="Login"
              onClick={() => {
                this.handleOpen("login");
              }}
            />
          }
          style={{ backgroundColor: "#FF6F00" }}
        />
        <Login open={this.state.loginOpen} onClose={this.handleClose} 
        openDialog={this.handleOpen}
        onLogin={this.handleLogin}
        onChange={this.handleChange}
        />
        <SignUp open={this.state.signUpOpen} onClose={this.handleClose}
        onSignUp={this.handleSignUp}
        onChange={this.handleChange}
         />
      </div>
    );
  }
}

export default Bar;
