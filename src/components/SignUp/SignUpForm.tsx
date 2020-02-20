import React, { ChangeEvent } from "react";
import Input, { InputProps } from "../Help/ContactForm/Input/Input";
import base from "../../config/base";
import { AuthContext } from "../../contexts/Auth";
import { withRouter, Redirect, RouteComponentProps } from "react-router";

class SignUpForm extends React.Component<RouteComponentProps> {
  state = {
    signUp: {
      // first_name: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     required: true
      //   },
      //   labelConfig: {
      //     labelName: "first_name",
      //     labelContent: "First Name"
      //   },
      //   value: ""
      // },
      // last_name: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     required: true
      //   },
      //   labelConfig: {
      //     labelName: "last_name",
      //     labelContent: "Last Name"
      //   },
      //   value: ""
      // },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          required: true
        },
        labelConfig: {
          labelName: "email",
          labelContent: "Email"
        },
        value: ""
      },
      username: {
        elementType: "input",
        elementConfig: {
          type: "text",
          required: true
        },
        labelConfig: {
          labelName: "username",
          labelContent: "Username"
        },
        value: ""
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          required: true
        },
        labelConfig: {
          labelName: "password",
          labelContent: "Password"
        },
        value: ""
      },
      password_repeat: {
        elementType: "input",
        elementConfig: {
          type: "password",
          required: true
        },
        labelConfig: {
          labelName: "password_repeat",
          labelContent: "Repeat Password"
        },
        value: ""
      }
    }
  };

  static contextType = AuthContext;

  handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    identifier: string
  ) => {
    const updatedForm = { ...this.state.signUp };
    //@ts-ignore
    const updatedFormElement = { ...updatedForm[identifier] };
    updatedFormElement.value = event.target.value;
    //@ts-ignore
    updatedForm[identifier] = updatedFormElement;
    this.setState({ signUp: updatedForm });
  };

  async handleSignUp(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    try {
      await base
        .auth()
        .createUserWithEmailAndPassword(
          this.state.signUp.email.value,
          this.state.signUp.password.value
        );
      let user = base.auth().currentUser;
      if (user) {
        let uid = user.uid;
        base.firestore().collection(`users/${uid}/lists`).add({"id": "lists"});
        base.firestore().collection(`users/${uid}/liked`).add({"id": "liked"});
        base.firestore().collection(`users/${uid}/watched`).add({"id": "watched"});
      }

      this.props.history.push("/dashboard");
    } catch (error) {
      alert(error);
    }
  }

  // createDocument = () => {
  //     const user = base.auth().currentUser;

  //     base.firestore().collection(`users/${user}/lists`)
  //     base.firestore().collection(`users/${user}/liked`)
  //     base.firestore().collection(`users/${user}/watched`)
  //     // const lists = "users/uid/lists"
  //     // const liked = "users/uid/liked"
  //     // const watched = "users/uid/watched"
  // }

  render() {
    const { currentUser } = this.context;
    if (currentUser) {
      return <Redirect to="/dashboard" />;
    }

    const formElements: { id: string; config: InputProps }[] = [];
    for (let key in this.state.signUp) {
      formElements.push({
        id: key,
        //@ts-ignore
        config: this.state.signUp[key]
      });
    }
    let form = (
      //@ts-ignore
      <form className="sign-up-form" onSubmit={this.handleSignUp.bind(this)}>
        <h2>Create Your Account</h2>
        {formElements.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            labelConfig={formElement.config.labelConfig}
            value={formElement.config.value}
            changed={(event: React.ChangeEvent<HTMLInputElement>) =>
              this.handleInputChange(event, formElement.id)
            }
          />
        ))}
        <button className="btn-form">Send</button>
      </form>
    );

    return (
      <div className="form-container contact-form-content sign-up-container">
        {form}
      </div>
    );
  }
}

export default withRouter(SignUpForm);
