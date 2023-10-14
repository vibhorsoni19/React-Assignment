import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TableComponent from "./TableComponent";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";

function AlluserComponent({ users, handleSearch, pagination,setSearchinguser }) {
  return (
    <div className="pt-5">
      <div className="container">
        <Row>
          <Col md={4}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  <InputGroup.Text>🔍</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <div className="row">
          <div className="col">
            <TableComponent users={users} setSearchinguser={setSearchinguser} />
            <div className="pagination mt-4 d-flex justify-content-center align-items-center">
              <Button
                className="btn btn-danger mx-2 mx-md-4"
                disabled={!pagination.prev}
                onClick={() => handleSearch(null, pagination.prev)}
              >
                Previous
              </Button>
              <Button
                className="btn btn-secondary mx-2 mx-md-4"
                disabled={!pagination.next}
                onClick={() => handleSearch(null, pagination.next)}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <Userdetails/> */}
    </div>
  );
}

export default AlluserComponent;
