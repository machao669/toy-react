/*
 * @Author: machao
 * @Date: 2020-10-22 17:05:27
 * @LastEditTime: 2020-10-24 16:24:25
 * @Description: 
 * @symbol_custom_string_obkoro1: Copyright raycloud
 */
import React, { Component } from './ToyReact.js'

class Custom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
      b: 2
    }
  }

  render() {
    return (<div>
      custom
      { this.children }
      </div>)
  }
}

const a = <div className='aa' id='555'>
  sss
  <div>bs</div>
  <Custom>
    <span></span>
    <span></span>
  </Custom>
  </div>

React.render(a, document.body);