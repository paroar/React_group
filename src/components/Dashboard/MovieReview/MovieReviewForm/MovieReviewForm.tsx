import React, { ChangeEvent } from 'react';
import Input, { InputProps } from '../../../Help/ContactForm/Input/Input';

class MovieReview extends React.Component {
    state = {
        movieReview : {
            rating: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    name: 'rating',
                    required: false
                },
                labelConfig: {
                    labelName: 'rating',
                    labelContent: 'Rating' 
                },
                valid: false,
                value: ""
            },
            review: {
                elementType: 'textarea',
                elementConfig: {
                    name: 'review',
                    required: false
                },
                labelConfig:  {
                    labelName: 'review',
                    labelContent: 'Add your review'
                },
                valid: false,
                value: ""
            },
            add_to_list: {
                elementType: 'select',
                elementConfig: {
                    name: 'add_to_list',
                    required: false
                },
                labelConfig: {
                    labelName: 'add_to_list',
                    //op new list
                    //si new list, se despliega aquí el input new list
                    labelContent: 'Add to a list'
                },
                valid: false,
                value: ""
            }
        }
    }

    handleInputChange = (event: ChangeEvent<HTMLInputElement>, identifier: string) => {
        const updatedForm = {...this.state.movieReview}
        //@ts-ignore
        const updatedFormElement = {...updatedForm[identifier]};
        updatedFormElement.value = event.target.value;
        //@ts-ignore
        updatedForm[identifier] = updatedFormElement;
        this.setState({newList: updatedForm});
    }
    
    render() {
        const formElements: {id: string, config: InputProps}[] = [];
        for (let key in this.state.movieReview) {
            formElements.push({
                id: key,
                //@ts-ignore
                config: this.state.movieReview[key]
            })
        }

        let form = (
            <form>
                {/* Título y año de la peli - sacado de tmdb */}
                <h2></h2>
                {formElements.map(formElement => (
                    <Input 
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        labelConfig = {formElement.config.labelConfig}
                        value = {formElement.config.value}
                        changed = {(event: ChangeEvent<HTMLInputElement>) => {this.handleInputChange(event, formElement.id)}}
                    />
                ))}
                <button type="submit" className="btn-form">
                    Send
                </button>
            </form>    
        )

        return(
            {form}
        )
    }
}

export default MovieReview;