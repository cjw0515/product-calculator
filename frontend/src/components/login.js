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

export default class Login extends React.Component {
  
  render() {
    const actions = [
      <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onClick={this.props.onLogin}
    />,
      <FlatButton label="Cancel" primary={true} onClick={
        () => {
          this.props.onClose("login");
        }
      } />,   
    ];

    return (
      <div>
        <Dialog
          title="Login"
          contentStyle={customContentStyle}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={
            () => {
              this.props.onClose("login");
            }
          }
          actionsContainerStyle={{textAlign:"center"}}
        >
          username :
          <br/>
          <TextField 
           hintText="email"
           style={{width:"100%"}}
           name="loginId"
           onChange={this.props.onChange}
           />
          <br/>
          password :
          <br/>
          <TextField 
           hintText="password"
           style={{width:"100%"}}
           name="loginPassword"
           onChange={this.props.onChange}
           type="password"
           />
           <p
           onClick={()=>{
             this.props.onClose("login");
             this.props.openDialog("signUpOpen")}
            }
           >signup</p>
        </Dialog>
      </div>
    );
  }
}
