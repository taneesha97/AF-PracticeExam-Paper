import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
const initialState = {
    code: '',
    model: '',
    type: '',
    name:'',
    categories:[],
    options:[],
    selectedcategories:[]
}

class CreateVehicle extends Component{

    constructor(props){
        super(props);
        //bind the function
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCategorySelect = this.onCategorySelect(this);
        this.state = initialState;
    }

    componentDidMount() {
        axios.get('http://localhost:8080/category/')
            .then(response => {
                this.setState({ categories: response.data.data }, () => {
                    if(this.state.categories.length > 0) {
                        let data = [];
                        this.state.categories.map((item, index) => {
                            let category = {
                                value: item._id,
                                label: item.name
                            }
                            data.push(category)
                        });
                        this.setState({options: data});
                    }
                })
            })
        }

    //1.When typing the text fields
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onCategorySelect(e) {
        //this.setState({selectedcategories: e ? e.map(item => item.value) : [] })
    }

    onSubmit(e){
        e.preventDefault();
        let vehicle = {
            code: this.state.code,
            model: this.state.model,
            type: this.state.type,
            name: this.state.name,
            categories: this.state.selectedcategories
        };
        console.log(vehicle);
        axios.post('http://localhost:8080/vehicle/create', vehicle)
            .then(response => {
                alert('Vehicle Data successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }


    render(){
        return(
            <div className="container">
                <h1 >Create Vehicle</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Vehicle Code</label>
                        <input
                            type="name"
                            className="form-control"
                            id="code"
                            name="code"
                            value={this.state.code}
                            onChange={this.onChange}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="model" className="form-label">Model</label>
                        <input
                            type="name"
                            className="form-control"
                            id="model"
                            name="model"
                            value={this.state.model}
                            onChange={this.onChange}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">Type</label>
                        <input
                            type="name"
                            className="form-control"
                            id="type"
                            name="type"
                            value={this.state.type}
                            onChange={this.onChange}
                        />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <Select
                            options={this.state.options}
                            isMulti
                            className="basic-multi-select"
                            onChange={this.onCategorySelect}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        )
    }
}


export default CreateVehicle;

