import React, { Component } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { callGetItems } from '@/services/items'
import { getItems, getItemsPending, getItemsError, getItemsPagination } from '@/reducers/items'

import { 
  Container, Row, Col,
  Card, Dropdown,
  Button
} from 'react-bootstrap';


class ItemList extends Component {

  constructor(props) {
    super(props);
   
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    const { callGetItems } = this.props
    callGetItems();
  }

  handlePrevious() {
    let currentPage = parseInt(this.props.pagination.current_page)
    let prevPage;
    const { callGetItems } = this.props

    if (currentPage > 1) {
      prevPage = currentPage - 1
    }

    callGetItems({page: prevPage})

    Router.push('/list?page=' + prevPage, undefined, {shallow: true})
  }

  handleNext() {
    let currentPage = parseInt(this.props.pagination.current_page)
    let nextPage;
    const { callGetItems } = this.props

    if (currentPage < parseInt(this.props.pagination.total_pages)) {
      nextPage = currentPage + 1
    }

    callGetItems({page: nextPage})

    Router.push('/list?page=' + nextPage, undefined, {shallow: true})
  }

  render() {
    
    let data, hasNextPage = false, hasPreviousPage = false;

    if (this.props.data !== undefined) {
      data = this.props.data
    }

    if (this.props.pagination !== undefined) {
      if (parseInt(this.props.pagination.current_page) < parseInt(this.props.pagination.total_pages)) {
        hasNextPage = true
      } else {
        hasNextPage = false

      }

      if (parseInt(this.props.pagination.current_page) > 1 ) {
        hasPreviousPage = true
      } else {
        hasPreviousPage = false

      }
    }

    

    return (
      <>
      <Row className="mb-4 text-right">
        <Col>
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-sort">
            Sort
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Price Ascending</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Price Descending</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Col>
      </Row>

      <Row>
        {data !== undefined ? data.map((item) => {
          
          return <div className="col-12 col-md-6 mb-3" key={item.id}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={5}>
                      <img src={item.image_url} alt={item.name} className="img-fluid img-responsive"/>
                    </Col>
                    <Col md={7}>
                      <h3>{item.name}</h3>
                      <div className="mb-2">${item.highest_price}</div>
                      <Link href={`/items/`+item.id}>
                        <a className="btn btn-primary rounded-pill px-3">Bid Now</a>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
        }) : <></>}
      </Row>

      <Row className="mt-3 mb-3">
        <Col><Button variant="outline-primary" onClick={this.handlePrevious} disabled={!hasPreviousPage}>Prev</Button></Col>
        <Col className="text-right"><Button variant="outline-primary" onClick={this.handleNext} disabled={!hasNextPage}>Next</Button></Col>
      </Row>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);