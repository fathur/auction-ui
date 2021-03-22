import Head from 'next/head'
import Router from 'next/router'
import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Alert from 'react-bootstrap/Alert'


import {
  Container, Row, Col, Card,
  Form, Button
} from 'react-bootstrap'

import Layout from '@/views/Layout';
import { callPostLogin } from '@/services/auth'
import { getAuth, getAuthPending, getAuthError } from '@/reducers/auth'
import { isLoggedIn } from '@/helper'

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (isLoggedIn()) {
      Router.push('/list')
    }
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { callPostLogin } = this.props
    const { username, password } = this.state;

    await callPostLogin(username, password);
    

  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password } = this.state;

    let loginPending = this.props.pending

    return (
      <Layout>
        <Container className="d-flex align-items-center">
          <Row className="mt-5 w-100">
            <Col md={{span:6, offset:3}}>
              <Card>
                <Card.Body>

                  {this.props.error ?
                    <Alert variant='danger'><span className="small">{this.props.error.message}</span></Alert>
                  : <></>}

                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Enter username" aria-describedby="usernameHelpText"
                        name="username" value={username} disabled={loginPending} autoFocus
                        onChange={this.handleChange} />
                      <Form.Text id="usernameHelpText" muted>{
                        this.props.error ?
                          (this.props.error.errors !== undefined ? this.props.error.errors['username'] : null)
                        : null
                      }</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" aria-describedby="passwordHelpText"
                        name="password" value={password} disabled={loginPending}
                        onChange={this.handleChange} />
                      <Form.Text id="passwordHelpText" muted>{
                        this.props.error ?
                          (this.props.error.errors !== undefined ? this.props.error.errors['password'] : null)
                        : null
                      }</Form.Text>
                    </Form.Group>

                    <Button type='submit' block disabled={loginPending}>
                      {loginPending ? `Logging In...` : `Login`}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
    error: getAuthError(state),
    data: getAuth(state),
    pending: getAuthPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    callPostLogin
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
