import Head from 'next/head'
import Router from 'next/router'
import React, { Component } from 'react';

import {
  Container, Row,
} from 'react-bootstrap'

import Layout from '@/views/Layout';
import Hero from '@/components/Hero'
import ItemList from '@/components/ItemList'

class Home extends Component {
  componentDidMount() {
      Router.push('/list')
  }

  render() {
      return (<></>)
  }
}


export default Home;