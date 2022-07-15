import { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "../../css/receipts.css";

function AddNewReceipt() {
  // State
  const [uploadError, setUploadError] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState();
  const history = useHistory();

  // Functions
  const onChangeFunctions = {
    formFile: (event) => {
      const file = event.target.files[0];
      if (!file || !file.type.includes("image")) {
        event.preventDefault();
        setUploadError("Only images are allowed");
        return;
      }
      setFile(event.target.files[0]);
      setPreview(URL.createObjectURL(event.target.files[0]));
      setUploadError("");
    },
  };

  function onSubmit() {
    if (file === "") {
      setUploadError("Please upload a receipt to continue.");
      return;
    }
    toast("New receipt added.");
    setTimeout(() => {
      history.push("/view-receipts");
    }, 2500);
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
                      accept="image/*"
                      onChange={onChangeFunctions.formFile}
                    />
                  </Form.Group>
                  <Form.Text id="passwordHelpBlock" style={{ color: "red" }}>
                    {uploadError}
                  </Form.Text>
                </div>
                <Button variant="primary" onClick={onSubmit} disabled={!file}>
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
