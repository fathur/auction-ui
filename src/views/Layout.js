import React, { Component } from 'react';
import Navigation from '@/components/Navigation'

class Layout extends Component {
  render() {
      return (
        <>

            <Navigation/>

            {this.props.children}
        </>
      )
  }    
}

export default Layout;