import { useRouter } from 'next/router'
import Layout from '@/views/Layout';
import {
  Container, Row, Col, Card,
  Form, Button
} from 'react-bootstrap'

export default function BidConfig() {

  return (
    <Layout>
        <Container>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <Form>
                            <Form.Group controlId="formMaxBudget">
                                <Form.Label>Budget</Form.Label>
                                <Form.Control type="number" placeholder="Budget" />
                                
                            </Form.Group>

                            

                            <Button>Save</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Layout>
  )
}