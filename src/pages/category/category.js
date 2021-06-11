import React, { Component } from 'react';
import axios from 'axios';

class Category extends Component{

    constructor(props){
        super(props);
        this.state = {
            categories:[]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/category/')
            .then(response => {
                this.setState({categories: response.data.data})
            })
    }

    navigateSubjectPage(e, categoryId) {
        window.location = `/${categoryId}`

    }

    render() {
        return(
          <div>
              <h1>Category</h1>
              {this.state.categories.length > 0 && this.state.categories.map((item, index) => (
                  <div key={index} className="card mb-3">
                      <div className="p-3" onClick={e => this.navigateSubjectPage(e, item._id)}>
                          <h4>Category Name: {item.name}</h4>
                          <h5>Charge: {item.charge}</h5>
                      </div>
                  </div>
              ))}
          </div>
        );
    }


}

export default Category;