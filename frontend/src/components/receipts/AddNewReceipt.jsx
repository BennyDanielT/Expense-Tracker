import { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import "./receipts.css";

function AddNewReceipt() {
  // State
  const [uploadError, setUploadError] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState();

  // Functions
  const onChangeFunctions = {
    formFile: (event) => {
      setFile(event.target.files[0]);
      setPreview(URL.createObjectURL(event.target.files[0]));
      setUploadError("");
    },
  };

  function onSubmit() {
    if (file == "") {
      setUploadError("Please upload a receipt to continue.");
    } else {
    }
  }

  // JSX
  return (
    <>
      <div
        style={{
          padding: "30px",
        }}
      >
        <div>
          <h2>Add new receipt</h2>
          <Container className="custom-container">
            <Row>
              <Col>
                <div>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload the receipt</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={onChangeFunctions.formFile}
                    />
                  </Form.Group>
                  <Form.Text id="passwordHelpBlock" style={{ color: "red" }}>
                    {uploadError}
                  </Form.Text>
                </div>
                <Button variant="primary" onClick={onSubmit}>
                  Submit
                </Button>
              </Col>
              <Col className="centered-content">
                {" "}
                <img src={preview} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
export { AddNewReceipt };

// https://www.geeksforgeeks.org/how-to-upload-image-and-preview-it-using-reactjs/
