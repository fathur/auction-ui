import { useRouter } from 'next/router'
import { Breadcrumbs } from 'nextjs-breadcrumbs'
import Layout from '@/views/Layout';

import {
  Container, Row, Col, Card,
  Form, Button
} from 'react-bootstrap'

export default function ItemView() {

  const router = useRouter()
  const { id } = router.query

  const breadcrumbs = Breadcrumbs()

  return (
    <Layout>
      <Container>
        <Row className="mt-3">
          <Col md={6}>
          </Col>

          <Col md={6}>
            <h1>Title</h1>

            <div className="form-group">
              <label htmlFor="">Time remaining</label>
              <div className="h4 mb-0">20:30</div>
            </div>

            <div className="form-group">
              <label htmlFor="">The highest bid</label>
              <div className="h5 mb-0">$89 <span className="small">User 2</span></div>
            </div>

            <Card className="shadow-sm">
              <Card.Body>
                <div className="input-group input-group-lg">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>

                  <input type="text" 
                    className="form-control" 
                    autoFocus 
                    placeholder="Your bid" 
                    aria-label="Your bid" 
                    aria-describedby="button-bid" />

                  <div className="input-group-append">
                    <button className="btn btn-primary" 
                    type="button" 
                    id="button-bid">Submit Bid</button>
                  </div>
                </div>

                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" value="" id="autobid" />
                  <label className="form-check-label" htmlFor="autobid">
                    Auto bid
                  </label>
                </div>
              </Card.Body>
            </Card>

          </Col>
        </Row>

        <Row className="mt-3">
          <Col>

            <Card>
              <Card.Body>
                <Card.Title>Description</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}