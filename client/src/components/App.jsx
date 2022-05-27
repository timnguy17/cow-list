import React from 'react';
import axios from 'axios';
import AddCows from './AddCows.jsx';
import CowList from './CowList.jsx';
import Display from './Display.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cows: [],
      selectCow: null
    }
  }

  componentDidMount() {
    axios.get('/api/cows')
      .then((response) => {
        console.log('successful load cowlist')
        this.setState({
          cows: response.data
        })
      }).catch((err) => {
        console.log(err)
      })
  }

  renderList = () => {
    axios.get('/api/cows')
      .then((response) => {
        console.log('successful render cowlist')
        this.setState({
          cows: response.data
        })
      }).catch((err) => {
        console.log(err)
      })
  }

  renderCurrentCow = (cow) => {
    this.setState({
      selectCow: cow
    })
  }


  render() {
    return (
      <div>
        Cow List!
        <div>
          <Display selectCow={this.state.selectCow}/>
          <AddCows renderList={this.renderList} />
          <CowList data={this.state.cows} renderCurrentCow={this.renderCurrentCow} />
        </div>
      </div>
    )
  }
}

export default App;