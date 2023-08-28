import { useState } from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"

const Counter = () => {
    const [num, setNum] = useState(0)
    return (
    <>
        <Container className="mt-3">
            <Row>
                <Col xs={4}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <p className="display-2">Count: {num}</p>
                            <Button variant="success" className="m-1" onClick={() => setNum(num + 1)}>Incremenet</Button>
                            <Button variant="warning" className="m-1" onClick={() => setNum(num => num > 0 ? num -1 : 0)}>Decrement</Button>
                            <Button onClick={() => setNum(0)}>Reset</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Counter