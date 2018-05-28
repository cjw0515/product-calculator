import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import Login from "./login";
import FlatButton from "material-ui/FlatButton";

const styles = {
  title: {
    cursor: "pointer"
  }
};

class Bar extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({open: false});
  };

  handleClick = () => {
    alert("onClick triggered on the title component");
  };



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
            onClick={this.handleOpen}              
            />
          }
          style={{ backgroundColor: "#FF6F00" }}
        />
        <Login
          open={this.state.open}
          onClose={this.handleClose}
         />
      </div>
    );
  }
}

export default Bar;
