import React from 'react';

class CowDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showDescription: false
    }

  }

  handleClick = () => {
    // if (this.state.showDescription === false) {
    //   this.setState({
    //     showDescription: true
    //   })
    // } else {
    //   this.setState({
    //     showDescription: false
    //   })
    // }
    this.props.renderCurrentCow(this.props.cow)
  };


  render() {
    return(
      <div key={this.props.cow.name}>
      <div onClick={this.handleClick}>
      {this.props.cow.name}
      </div>
      {this.props.select ? ':' + this.props.cow.description : null}
    </div>
    )
  }
}

export default CowDetails;