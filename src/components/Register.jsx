import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"

const Register = () => {
    const [state, setState] = useState({
        user: {
            username: "",
            email: "",
            password:""
        }
    })

let updateInput = (e) => {
    setState({
        ...state, user: {
            ...state.user, [e.target.name] : e.target.value
        }
    })
}

const register = (e) => {
    e.preventDefault()
    console.log(state.user);
    e.target.reset(state.user)
}

  return (
    <>
      {/* <pre>{JSON.stringify(state)}</pre> */}
      <Container className="mt-3">
        <Row>
          <Col md={3}>
            <Card className="shadow-lg">
              <Card.Header className="p-3" style={{ background: "#FFA500" }}>
                <h4>Register</h4>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="username"
                      onChange={updateInput}
                      type="text"
                      placeholder="username"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="email"
                      onChange={updateInput}
                      type="email"
                      placeholder="email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      name="password"
                      onChange={updateInput}
                      type="password"
                      placeholder="password"
                    />
                  </Form.Group>
                  <Button
                    onClick={register}
                    style={{ background: "#FFA500" }}
                    variant="light"
                    type="submit"
                  >
                    Register
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register