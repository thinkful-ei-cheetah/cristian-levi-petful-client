import React, {Component} from 'react';
import './Adopted.css'

export default class Adopted extends Component {
  render() {
    const {imgSrc, imgDesc, name, owner} = this.props

    console.log(this.props)
    return (<>
        <img src={imgSrc} alt={imgDesc} />
        <p>Name: {name}</p>
        <p>Owner: {owner}</p>
      </>
    )
  }
}