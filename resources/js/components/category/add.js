import React, {Component} from 'react';
import axios from 'axios';

export default class Add extends Component{

  constructor()
  {
    super();
    this.onChangeCategory=this.onChangeCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state={
      nama:''
    }
  }

  onChangeCategory(e){
    this.setState({
      nama:e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    const category={
      nama: this.state.nama
    }
    axios.post('http://127.0.0.1:8000/category/store',category)
    .then(res=>Console.log(res.data));
  }

  render(){
    return(
      <div>
      <form onSubmit={this.onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="nama">Nama</label>
            <input type="text" class="form-control" id="nama" name="nama" value={this.state.nama} onChange={this.onChangeCategory} placeholder="Nama" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" id="simpan">Simpan</button>
      </form>
      </div>
    );
  }
}
