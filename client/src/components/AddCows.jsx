import React from 'react';
import axios from 'axios';

class AddCows extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  handleSubmit = (event) => {
    //event.preventDefault;
    console.log('clicked submit')
    axios.post('/api/cows', { name: this.state.name, description: this.state.description })
      .then((response) => {
        console.log('success post')
        this.props.renderList();
      })
      .catch((err) => {
        console.log(err)
      })
  }




  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Name' onChange={this.handleNameChange} ></input>
        <input type='text' placeholder='Description' onChange={this.handleDescriptionChange}></input>
        <button type='submit'>Add Cow</button>
      </form>
    )
  }
}

export default AddCows;