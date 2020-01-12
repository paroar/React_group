import React from 'react';
import Input, { InputProps } from '../../../Help/ContactForm/Input/Input';
import firebase from 'firebase';

class NewListForm extends React.Component {
    state = {
        newList: {
            list_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    name: 'listName',
                    required: true
                },
                labelConfig: {
                    labelName: 'list_name',
                    labelContent: 'List Name'
                },
                value: '',
                valid: false
            },
            list_description: {
                elementType: 'textarea',
                elementConfig: {
                    name: 'listDescription',
                    required: true
                },
                labelConfig: {
                    labelName: 'list_description',
                    labelContent: 'List Description'
                },
                value: '',
                valid: false
            }
        }
    }

    //@ts-ignore
    handleInputChange = (event: ChangeEvent<HTMLInputElement>, identifier: string) => {
        const updatedForm = {...this.state.newList}
        //@ts-ignore
        const updatedFormElement = {...updatedForm[identifier]};
        updatedFormElement.value = event.target.value;
        //@ts-ignore
        updatedForm[identifier] = updatedFormElement;
        this.setState({newList: updatedForm});
    }

    handleNewList(event: any) {
        event.preventDefault();
        const name = this.state.newList.list_name.value;
        const description = this.state.newList.list_description.value;
        const docRef = firebase.firestore().doc("users/testUser");
        docRef.collection("lists")
        .doc(name)
        .set({
            name: name,
            description: description
        })
    }

    render() {
        const formElements: {id: string, config: InputProps}[] = [];
        for (let key in this.state.newList) {
            formElements.push({
                id: key,
                //@ts-ignore
                config: this.state.newList[key]
            })
        }

        let form = (
            <form onSubmit={this.handleNewList.bind(this)}>
                <h2>Create a new list</h2>
                {formElements.map(formElement => (
                    <Input 
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        labelConfig = {formElement.config.labelConfig}
                        value = {formElement.config.value}
                        changed = {(event: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange(event, formElement.id)}
                    />
                ))}
                <button type="submit" className="btn-form">
                    Send
                </button>
            </form>
        );

        return (
            <div className="form-container">
                {form}
            </div>
        )     
    }
}

export default NewListForm;