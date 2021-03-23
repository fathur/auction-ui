import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash'
import Toast from 'react-bootstrap/Toast'

import Layout from '@/views/Layout';
import {
    Container, Row, Col, Card,
    Form, Button
} from 'react-bootstrap'

import {callGetPreferences, callPutPreference} from '@/services/preferences'
import {
    getPreference, getPreferencePending, getPreferenceError,
    getPreferences, getPreferencesPending, getPreferencesError,
} from '@/reducers/preferences'


const BidConfig = (props) => {

    const [budget, setBudget] = useState()

    useEffect(() => {

        // let mounted = true
    //
        const {callGetPreferences} = props
    //
        callGetPreferences()

          
        const preferenceBudget = _.find(props.preferencesData, (p) => p.key === 'budget')
    
        // await console.log(props);
        console.log(props.preferencesData, preferenceBudget);
        if (props.preferencesData && preferenceBudget) {
            setBudget(preferenceBudget.value)
        }

        // return () => mounted = false;
    }, [])

    // const [budget, setBudget] = useState(0)

    const [toast, setToast] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('click');

        const {callPutPreference} = props

        const preferenceBudget = _.find(props.preferencesData, (p) => p.key === 'budget')

        const preferenceId = preferenceBudget === undefined ? -1 : preferenceBudget.id;

        await callPutPreference(preferenceId, {value: budget})
        await setToast(true)
    }

    const toggleToast = () => setToast(!toast)


    return (
        <Layout>
            <Container>
                <Row className="mt-3">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formMaxBudget">
                                        <Form.Label>Current Budget</Form.Label>
                                        <Form.Control type="number" placeholder="Budget" min="0"
                                                      onChange={e => setBudget(e.target.value)} name="budget"
                                                      value={budget}/>

                                    </Form.Group>


                                    <Button type="submit">Save</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                
            </Container>

            <Toast autohide animation onClose={toggleToast} show={toast} variant='success'>
                {/* <Toast.Header>
                    <strong className="mr-auto">Bootstrap</strong>
                </Toast.Header> */}
                <Toast.Body>Your changes successfully saved.</Toast.Body>
            </Toast>
        </Layout>
    )
}

const mapStateToProps = state => ({
    preferencesPending: getPreferencesPending(state),
    preferencesData: getPreferences(state),
    preferencesError: getPreferencesError(state),

    preferencePending: getPreferencePending(state),
    preferenceData: getPreference(state),
    preferenceError: getPreferenceError(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    callGetPreferences,
    callPutPreference
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BidConfig)
