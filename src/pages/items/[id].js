import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Breadcrumbs } from 'nextjs-breadcrumbs'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Countdown from "react-countdown";

import Layout from '@/views/Layout';
import { callGetItem } from '@/services/items'
import { postBid } from '@/services/bids'
import { getBid, getBidPending, getBidError } from '@/reducers/bids'
import { getItem, getItemPending, getItemError } from '@/reducers/items'

import {
  Container, Row, Col, Card,
  Form, Button,
  Alert
} from 'react-bootstrap'

const ableToBid = (props) => {
  let expiryDate = new Date(props.itemData.expiry_at * 1000)
  let difference = +expiryDate - (+new Date)

  if (difference <= 0) {
    return false
  }

  return true
}

const CompletedCountdown = () => {
  return (
    <div>The auction has closed.</div>
  )
}

const RendererCountdown = ({ days, hours, minutes, seconds, completed }) => {

  if (completed) {
    return <CompletedCountdown />
  }

  return (
    <div>
      <span className={(days > 0) ? '' : 'd-none'}>
      {days} <small>days, </small>
      </span> 

      <span className={(hours > 0) ? '' : 'd-none'}>
      {hours} <small>hours, </small> 
      </span>
      
      <span className={(minutes > 0) ? '' : 'd-none'}>
      {minutes} <small>minutes, </small> 
      </span>

      {seconds} <small>seconds</small>
    </div>
  )
}


const ItemView = (props) => {

  const router = useRouter()
  
  useEffect(async () => {
    const { id } = router.query

    if (id !== undefined) {
      const { callGetItem } = props

      await callGetItem(id)
    }

    // setInterval(() => {
    //   // const { callGetItem } = props
      
    //   // callGetItem(id)
    // }, 1000);

  }, [router])

  const [nominal, setNominal] = useState('')
  const [auto, setAuto] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = router.query
    // console.log(nominal);
    // const formData = { nominal, auto }
    const { postBid, callGetItem } = props
    await postBid(id, { nominal, auto })
    await callGetItem(id)

    // console.log(auto);
  }

  if (props.itemData !== undefined) {


    return (
      <Layout>
        <Container>
          <Row className="my-3">
            <Col md={6}>
              <img src={props.itemData.image_url} className="img-fluid rounded" />
            </Col>

            <Col md={6}>
              <h1>{props.itemData.name}</h1>

              <div className="form-group">
                <label htmlFor="">Time remaining</label>

                <div className="h4 mb-0">
                  {ableToBid(props) ? <Countdown date={props.itemData.expiry_at * 1000}  renderer={RendererCountdown}></Countdown> : <CompletedCountdown />}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="">The highest bid</label>
                <div className="h5 mb-0">${props.itemData.highest_price} <span className="small muted">{props.itemData.highest_bidder}</span></div>
              </div>

              {ableToBid(props) ? 
              <Card className="shadow-sm">
                <Card.Body>

                  {props.bidError ?
                    <Alert variant='danger'>
                      <span className="small">
                        {props.bidError.message} 
                        {props.bidError.errors.username ? ' ' + props.bidError.errors.username : ''}

                      </span>
                    </Alert>
                  : <></>}

                  <Form onSubmit={handleSubmit}>
                    <div className="input-group input-group-lg">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>

                      <input type="number" name="nominal" min="0"
                        className="form-control" 
                        autoFocus 
                        value={nominal}
                        placeholder="Your bid" 
                        aria-label="Your bid" 
                        aria-describedby="button-bid"
                        onChange={e => setNominal(e.target.value)} />

                      <div className="input-group-append">
                        
                      </div>
                    </div>

                    <Form.Text id="nominalHelpText" muted>{
                        props.bidError ?
                          (props.bidError.errors !== undefined ? props.bidError.errors['nominal'] : null)
                        : null
                      }</Form.Text>

                    <div className="form-check mt-2">
                      <input className="form-check-input" name="auto" type="checkbox" 
                        value="on"
                        defaultChecked={auto}
                        onChange={e => setAuto(!auto)}
                        id="autobid" />
                      <label className="form-check-label" htmlFor="autobid">
                        Auto bid
                      </label>
                    </div>

                    <Button variant="primary" block className="mt-2"
                        type="submit" 
                        id="button-bid">Submit Bid</Button>

                  </Form>

                </Card.Body>

              </Card>
              : <></> }

            </Col>
          </Row>

          <Row className="mt-3">
            <Col>

              <Card>
                <Card.Body>
                  <Card.Title>Description</Card.Title>
                  <Card.Text>
                    {props.itemData.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  } else {
    return (<></>)
  }
}

const mapStateToProps = state => ({
    bidError: getBidError(state),
    bidData: getBid(state),
    bidPending: getBidPending(state),

    itemError: getItemError(state),
    itemData: getItem(state),
    itemPending: getItemPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    callGetItem,
    postBid
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ItemView)