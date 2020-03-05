import React, { Component } from 'react'

import './App.css';
import Container from './component/moviecontainer'
import WithLoading from "./component/withLoading"

const Content = WithLoading(Container);





export default class App extends Component {
  state = {
    isLoading : true
  } 
  
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000);
  }
  render() {
    return (
      <div>
        <Content
            isLoading={this.state.isLoading}
          
          />
      </div>
    )
  }
}
