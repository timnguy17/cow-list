import React from 'react';
import CowDetails from './CowDetails.jsx';


const CowList = (props) => {
  return (
    props.data.map((cow, index) => {
      return (
        <CowDetails cow={cow} renderCurrentCow={props.renderCurrentCow}/>
      )
    })
  )
}


export default CowList;