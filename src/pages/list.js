import Head from 'next/head'

import {
  Container, Row,
} from 'react-bootstrap'

import Layout from '@/views/Layout';
import Hero from '@/components/Hero'
import ItemList from '@/components/ItemList'

export default function List() {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Hero />
        </Row>
      </Container>

      <Container>
        <ItemList/>
      </Container>
    </Layout>
  )
}
