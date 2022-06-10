import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Form, Modal, Row, Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";

export default function RemindersGrid() {

    const json = {
        "reminder1": {
            "name": "Electricity Bill",
            "amount": "67.85",
            "date": "5th June 1:30 PM",
            "desc": "Reminder description Lorem ipsum dofdlor sit amet, consectetur adipiscing elit."
        }, "reminder2": {
            "name": "House Rent",
            "amount": "405",
            "date": "9th June 4:20 PM",
            "desc": "Reminder description Lorem ipsum dofdlor sit amet, consectetur adipiscing elit."
        }, "reminder3": {
            "name": "Internet Bill",
            "amount": "45.97",
            "date": "12th June 9:30 AM",
            "desc": "Reminder description Lorem ipsum dofdlor sit amet, consectetur adipiscing elit."
        }, "reminder4": {
            "name": "NSPower",
            "amount": "120",
            "date": "7th July 7:00 PM",
            "desc": "Reminder description Lorem ipsum dofdlor sit amet, consectetur adipiscing elit."
        }
    };

    const [editReminder, setEditReminder] = useState({reminder:"", show:false});

    const handleClose = () => setEditReminder(prevState => {return {reminder: prevState.reminder, show: false}});
    const handleShow = () => setEditReminder(prevState => {return {reminder: prevState.reminder, show: true}});

    const [currentReminder, setCurrentReminder] = useState(null)
    const [show, setShow] = useState(false);

    const handleDeleteClose = () => setShow(false);
    const handleDeleteShow = () => setShow(true);


    return (
        <Container fluid>
            <Row className="font-monospace m-0 ps-0 pe-0 pe-sm-5 ps-sm-5 pt-5 text-black container-fluid">
                <div className="col-md-6 col-12"> Create</div>
                {Object.values(json).map(reminder =>
                    <div className="col-md-6 col-12">

                        <div className="p-2 m-1 rounded-3  border" style={{backgroundColor: "#a5b4fc"}}>
                            <Row>
                                <Col md={3} className="d-none d-md-block p-0 p-md-1 p-lg-4 ">
                                    <img className="w-100" alt="Reminder Icon"
                                         src="/sticky-notes.png"/>
                                </Col>
                                <Col className="p-3">
                                    <Stack gap={1}>
                                        <Row style={{fontSize: 20, fontWeight: "bold"}}>
                                            <Col>{reminder.date}</Col>
                                            <Col className="text-end"> ${reminder.amount}</Col>

                                        </Row>
                                        <div>{reminder.name}</div>
                                        <div>{reminder.desc}</div>
                                        <Stack direction="horizontal" className="justify-content-end" gap={2}>
                                            <button
                                                className="rounded-3" style={{backgroundColor: "#f87171"}}
                                                onClick={()=>{handleDeleteShow(); setCurrentReminder(reminder)}}>Remove
                                            </button>
                                            <button
                                                className="rounded-3" style={{backgroundColor: "#2dd4bf"}}
                                                onClick={()=>{handleShow(); setEditReminder({reminder:reminder, show:true})}}>Edit
                                            </button>
                                        </Stack>
                                    </Stack>

                                </Col>
                            </Row>

                        </div>
                    </div>
                )}
            </Row>


            <Modal show={show} onHide={handleDeleteClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Reminder</Modal.Title>
                </Modal.Header>
                <Modal.Body>{currentReminder?.name}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleDeleteClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDeleteClose}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal size="lg" show={editReminder.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Payment Reminder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="reminderName">
                            <Form.Label>Reminder Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Reminder Name"
                                disabled={true}
                                value={editReminder.reminder.name}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="reminderDesc">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Amount"
                                autoFocus
                                value={editReminder.reminder.amount}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="reminderDesc">
                            <Form.Label>Reminder Desc</Form.Label>
                            <Form.Control
                                as="textarea" rows={2}
                                placeholder="Reminder Desc"
                                value={editReminder.reminder.desc}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </Container>
    );
}