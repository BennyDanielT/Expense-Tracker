import 'bootstrap/dist/css/bootstrap.css';
import {Col, Container, Form, Modal, Row, Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {routes} from "../../constants";
import {useHistory} from "react-router-dom";
import {Alert, Snackbar} from "@mui/material";
import StickyNote from "../../assets/sticky-notes.png";


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

    const history = useHistory();

    const [editReminder, setEditReminder] = useState({reminder: "", show: false});

    const handleClose = () => setEditReminder(prevState => {
        return {reminder: prevState.reminder, show: false}
    });
    const handleShow = () => setEditReminder(prevState => {
        return {reminder: prevState.reminder, show: true}
    });

    const [currentReminder, setCurrentReminder] = useState(null)
    const [show, setShow] = useState(false);
    const [snackbar, setSnackbar] = useState({message:"", severity:"success", visibility:false});

    const handleDeleteClose = () => {
        setShow(false);
        setSnackbar({message:"Payment Reminder Successfully Deleted!", severity:"success", visibility:true});
    }
    const handleDeleteShow = () => setShow(true);
    /*const handleCreateReminder = () => createReminder("/createReminder");*/
    const handleCreateReminder = () => this.props.history.push('/create-reminder')

    function handleEditSuccess() {
        setEditReminder({reminder:"", show:false});
        setSnackbar({message:"Payment Reminder Successfully Modified!", severity:"success", visibility:true});
    }

    return (
        <Container fluid>
            <Row className=" mt-3 text-black container-fluid justify-content-around">
                <Button
                    className="rounded-3" style={{width: "250px"}}
                    onClick={() => history.push(routes.createReminder.path)}>Create Reminder
                </Button>
            </Row>
            <Row className=" m-0 ps-0 pe-0 pe-sm-5 ps-sm-5 pt-2 text-black justify-content-center container-fluid">
                {Object.values(json).map(reminder =>
                    <div className="col-sm-10 col-12 col-md-8 col-lg-6 m-2">

                        <div className="p-2 rounded-3  border" style={{backgroundColor: "#a5b4fc"}}>
                            <Row>
                                <Col md={3} className="d-none d-md-block pt-4 ">
                                    <img className="w-75" alt="Reminder Icon"
                                         src={StickyNote}/>
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
                                            <Button variant="danger"
                                                    onClick={() => {
                                                        handleDeleteShow();
                                                        setCurrentReminder(reminder)
                                                    }}>Remove
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    handleShow();
                                                    setEditReminder({reminder: reminder, show: true})
                                                }}>Edit
                                            </Button>
                                        </Stack>
                                    </Stack>

                                </Col>
                            </Row>

                        </div>
                    </div>
                )}
            </Row>


            {/* Delete reminder modal */}

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Reminder</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete payment reminder for {currentReminder?.name}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=> setShow(false)}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDeleteClose}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* Modify reminder modal*/}

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
                    <Button variant="primary" onClick={handleEditSuccess}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

         <Snackbar anchorOrigin={{ vertical:"top", horizontal:"right" }}
             open={snackbar.visibility} autoHideDuration={3000} onClose={()=> setSnackbar({message:"", severity:"success", visibility: false})}>
                <Alert onClose={()=> setSnackbar({message:"", severity:"success", visibility: false})} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>

        </Container>
    );


}