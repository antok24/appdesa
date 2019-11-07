import React, {Component} from 'react';
import axios from 'axios';

export default class Category extends Component{

  constructor()
  {
    super();
    this.state={
      category:[]
    }
  }

  componentDidMount()
  {
    axios.get('http://127.0.0.1:8000/category')
    .then(response=>{
      this.setState({category:response.data});
    });
  }

  render(){
    return(
      <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama</th>
            <th scope="col">Time Create</th>
            <th scope="col">Time Update</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.category.map(category=>{
              return (
                <tr>
                  <th scope="row">{category.id}</th>
                  <td>{category.nama}</td>
                  <td>{category.created_at}</td>
                  <td>{category.updated_at}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
    );
  }
}
