import React, { Component } from 'react';
import Router from 'next/router'

import {
  Container, Row, Col, Card,
  Form, Button
} from 'react-bootstrap'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { callGetItems } from '@/services/items'
import { getItems, getItemsPending, getItemsError, getItemsPagination } from '@/reducers/items'


class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      q: '',
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    const { callGetItems } = this.props

    const { name, value } = e.target;
    this.setState({ [name]: value });

    callGetItems({q: this.state.q});
    Router.push('/list?q=' + this.state.q, undefined, {shallow: true})

    
  }

  render() {

    const { q } = this.state;


    return (
      <div className="jumbotron text-center w-100">
        <Container>
          <h1 className="mb-5"><span className="display-3 text-danger">#1</span> Auction Platform In The Universe</h1>

          <Form onSubmit={this.handleSearch}>

            <input className="form-control form-control-lg rounded-pill px-4" 
              autoFocus value={q} name='q'
              type="text" onChange={this.handleSearch}
              placeholder="Search your wanted item here" />
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    error: getItemsError(state),
    data: getItems(state),
    pagination: getItemsPagination(state),
    pending: getItemsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    callGetItems
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Hero);