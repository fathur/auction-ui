import React, { Component } from 'react';
import Link from 'next/link'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { callGetItems } from '@/services/items'
import { getItems, getItemsPending, getItemsError } from '@/reducers/items'

import { 
  Container, Row, Col,
  Card, Dropdown
} from 'react-bootstrap';

class ItemList extends Component {

  componentDidMount() {
    const {callGetItems } = this.props
    callGetItems();
  }

  render() {
    const items = [{
      id: 1,
      title: 'Barang lagku'
    }, {
      id: 2,
      title: 'Barang lagku'
    }, {
      id: 3,
      title: 'Barang lagku'
    }, {
      id: 4,
      title: 'Barang lagku'
    }];

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
        {items.map((item) => {
          
          return <div className="col-12 col-md-6 mb-3" key={item.id}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={5}>
                      {item.title}
                    </Col>
                    <Col md={7}>
                      <h3>Title Item</h3>
                      <div className="mb-2">$89</div>
                      <Link href={`/items/`+item.id}>
                        <a className="btn btn-primary rounded-pill px-3">Bid Now</a>
                      </Link>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
        })}
      </Row>
      </>
    );
  }
}

const mapStateToProps = state => ({
    error: getItemsError(state),
    items: getItems(state),
    pending: getItemsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    callGetItems
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);