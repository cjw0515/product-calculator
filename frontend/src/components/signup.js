import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */

const customContentStyle = {
  width: '30%',
  maxWidth: 'none',
};  

export default class SignUp extends React.Component {
  
  render() {
    const actions = [
      <FlatButton
      label="SignUp"
      primary={true}
      keyboardFocused={true}
      onClick={this.props.onSignUp}
    />,
      <FlatButton label="Cancel" primary={true} onClick={
          () => {
              this.props.onClose("signUpOpen")
          }
      } />,   
    ];

    return (
      <div>
        <Dialog
          title="SignUp"
          contentStyle={customContentStyle}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.onClose}
          actionsContainerStyle={{textAlign:"center"}}
        >
          username :
          <br/>
          <TextField 
           hintText="username"
           style={{width:"100%"}}
           name="signUpId"
           onChange={this.props.onChange}
           />
          <br/>
          password :
          <br/>
          <TextField 
           hintText="password"
           style={{width:"100%"}}
           name="signUpPassword"
           onChange={this.props.onChange}
           type="password"
           />
        </Dialog>
      </div>
    );
  }
}
