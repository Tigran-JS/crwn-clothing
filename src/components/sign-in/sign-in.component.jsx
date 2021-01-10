import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passwprd: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.passwprd}
            required
            handleChange={this.handleChange}
            label="password"
          />
          <div className = "buttons">
            <CustomButton type="submit"> SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
                SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
          
        </form>
      </div>
    );
  }
}

export default SignIn;
