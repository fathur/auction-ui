import Head from 'next/head'
import React, { Component } from 'react';
import Layout from '@/views/Layout';

import {
  Container, Row, Col, Card,
  Form, Button
} from 'react-bootstrap'

class Login extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <Layout>
        <Container className="d-flex align-items-center">
          <Row className="mt-5 w-100">
            <Col sm={{span:6, offset:3}}>
              <Card>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formBasicUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Enter username" />
                      
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button block>Login</Button>
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

export default Login
