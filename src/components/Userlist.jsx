import { useEffect, useState } from "react"
import { UserSerVice } from "../service/UserService"
import { Col, Row, Table } from "react-bootstrap"

const Userlist = () => {
    let [state, setState] = useState({
        users: []
    })

    useEffect(() => {
        UserSerVice.getAllUsers().then((response) => {
            setState({
                ...state, users: response.data
            })
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    console.log(state.users);

  return (
    <>
    {/* <pre>{JSON.stringify(state)}</pre> */}
    Userlist
    <Row>
        <Col>
            <Table striped bordered hover className="shadow-lg text-center">
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.users.length > 0 && state.users.map(user => {
                            const {id, name, email, website, company, address} = user
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{website}</td>
                                    <td>{company.name}</td>
                                    <td>{address.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Col>
    </Row>
    </>
  )
}

export default Userlist