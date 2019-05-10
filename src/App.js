import React, { Component } from 'react';

export default class Create extends Component {
  constructor(props) {
      super(props);
      this.onChangeCarModel = this.onChangeCarModel.bind(this);
      this.onChangeCarMark = this.onChangeCarMark.bind(this);
      this.onChangeCarColor = this.onChangeCarColor.bind(this);
      this.onChangeCarYear = this.onChangeCarYear.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          car_model: '',
          car_mark: '',
          car_color:'',
          car_year:''
      }
  }
  onChangeCarModel(e) {
    this.setState({
      car_model: e.target.value
    });
  }
  onChangeCarMark(e) {
    this.setState({
      car_mark: e.target.value
    })  
  }
  onChangeCarColor(e) {
    this.setState({
      car_color: e.target.value
    })
  }

  onChangeCarYear(e) {
    this.setState({
      car_year: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.car_model}, ${this.state.car_mark},${this.state.car_color},${this.state.car_year}`)
    this.setState({
      car_model: '',
      car_mark: '',
      car_color:'',
      car_year:''
    })
  }
 
  render() {
      return (
          <div style={{ marginTop: 10 }}>
              <h3>Add New Car</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Car Model:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.car_model}
                        onChange={this.onChangeCarModel}
                        />
                  </div>
                  <div className="form-group">
                      <label>Car Mark: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.car_mark}
                        onChange={this.onChangeCarMark}
                        />
                  </div>
                  <div className="form-group">
                      <label>Car Color: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.car_color}
                        onChange={this.onChangeCarColor}
                        />
                  </div>
                  <div className="form-group">
                      <label>Car Year: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.car_year}
                        onChange={this.onChangeCarYear}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register Car" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}