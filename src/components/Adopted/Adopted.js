import React, {Component} from 'react';
import './Adopted.css'

export default class Adopted extends Component {
  render() {
    const {imgSrc, imgDesc, name} = this.props

    console.log(this.props)
    return (<>
        <img src={imgSrc} alt={imgDesc} />
        <p>{name}</p>
      </>
    )
  }
}