import React, { Component } from 'react';
import axios from 'axios';
const initialState = {
    name: '',
    charge: 0
}

class CreateCategory extends Component{

    constructor(props){
        super(props);
        //bind the function
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }
    //1.When typing the text fields
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //2.button submit
    onSubmit(e){
        e.preventDefault();
        let category = {
            name: this.state.name,
            charge: this.state.charge
        }
        console.log('Data: ',category);
        axios.post('http://localhost:8080/category/create', category)
            .then(response => {
                alert('Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return(
            <div className="container">
                <h1 >Create Category</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="name"
                            className="form-control"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                        />

                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="charge"
                            value={this.state.charge}
                            onChange={this.onChange}
                        />

                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        );
    }

}

export default CreateCategory;