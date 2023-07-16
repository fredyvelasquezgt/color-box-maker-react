import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {height: '' , width: '', color: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
        <form >
            <div>
            <label htmlFor="height" >Height</label>
            <input
                type="text"
                name="height"
                value={this.state.height}
                id="height"
                onChange={this.handleChange}
            
            />
            </div>
          
            <div>
                <label>Width</label>
                <input
                name="width"

            />
            </div>
           
            <div>
                <label>Color: </label>
                <input 
                name="width"

            />
            </div>
            
        </form>
        )
        
    }
}

export default NewBoxForm;