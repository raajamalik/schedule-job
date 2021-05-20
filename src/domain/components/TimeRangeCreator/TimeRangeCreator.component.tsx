import Heading from '../../../components/Heading/Heading.component';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';


const TimeRangeCreator = () => {
    const [validated, setValidated] = useState(false);
    const [range, setRange] = useState(String);
    var [timeRanges, setTimeRanges] = useState([String]);

    const addTimeRange = (event: any) => {
        event.preventDefault();
        const newConfiguration = event.target.range.value;

        const timeRangeRegex = /[\d\d:\d\d][\s]*[-][\s]*[\d\d:\d\d]/;
        if (timeRangeRegex.test(newConfiguration)) {
            setValidated(true);
            setTimeRanges(timeRanges => [...timeRanges, newConfiguration]);
            setRange("");
          } else {
            setValidated(false);
        }
    }

    const removeRange = (range: any, index: number) => {
        timeRanges.splice(index, 1);
        setTimeRanges(timeRanges => [...timeRanges])
    }
    return (
        <div>
            <Heading level='4' label="Configure Time Ranges"></Heading>
            <Form  noValidate validated={validated} onSubmit={e => { addTimeRange(e) }}>
                <Row>
                    <Col className="col-md-4">
                        <Form.Group controlId="timeRange">
                            <Form.Control
                                type="text"
                                name="range"
                                placeholder="Time Range (14:30 - 19:34)"
                                value={range}
                                onChange={(e) => setRange(e.target.value)} />
                        </Form.Group>
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </Col>
                    <Col className="col-md-2">
                        <Button variant="primary" type="submit">+</Button>
                    </Col>
                </Row>
            </Form>
            <p></p>
            <div>
                {timeRanges.map((range, index) => {
                    return <div><Form.Group><Row className=""><Col className="col-md-4"><div key={range.toString()}>{range}</div></Col><Col className="col-md-2"><Button variant="outline-secondary" title="Delete" onClick={() => removeRange(range, index)}>-</Button></Col></Row></Form.Group></div>
                })}
            
            </div>
        </div>
    );
}

export default TimeRangeCreator;