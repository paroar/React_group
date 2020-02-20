import React from 'react';
import Input, { InputProps } from '../../../Help/ContactForm/Input/Input';
import app from 'firebase';

const initial: any[] = [];

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
                value: ''
            },
            list_description: {
                elementType: 'textarea',
                elementConfig: {
                    placeholder: 'Description...',
                    name: 'listDescription',
                    required: true
                },
                labelConfig: {
                },
                value: ''
            },
            existing_list: {
                elementType: 'select',
                elementConfig: {
                    name: 'existingListName',
                    required: false,
                    options: initial
                },
                labelConfig: {
                    labelName: 'existing_list',
                    labelContent: 'Add to existing list'
                },
                value: ''
            }
        }
    }

    //@ts-ignore
    handleInputChange = (event: ChangeEvent<HTMLInputElement>, identifier: string) => {
        event.preventDefault();
        event.stopPropagation();
        const updatedForm = {...this.state.newList}
        //@ts-ignore
        const updatedFormElement = {...updatedForm[identifier]};
        updatedFormElement.value = event.target.value;
        //@ts-ignore
        updatedForm[identifier] = updatedFormElement;
        this.setState({newList: updatedForm});
        app.firestore()
    }

    handleNewList = (event: React.FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        const name = this.state.newList.list_name.value;
        const description = this.state.newList.list_description.value;
        const docRef = app.firestore().collection("users/testUser/lists")
        docRef.add({
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
            <form className="help-form" onSubmit={this.handleNewList.bind(this)}>
                <h2>Add to existing list or create a new one</h2>
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
            <div className="new-list-form-wrapper">
                <div className="new-list-form-content">
                {form}
                </div>
            </div>
        )     
    }
}
export default NewListForm;