import {Heading} from "../Heading/Heading";
import {Button, Card, Form} from "react-bootstrap";
import Swal from "sweetalert2";
import {routes} from "../../constants";

function NotificationSettings() {
    const types = [
        {name: "When someone adds me to a group", checked: false},
        {name: "When someone adds me as a friend", checked: false},
        {name: "When an expense is added", checked: true},
        {name: "When an expense is edited", checked: true},
        {name: "When an expense is deleted", checked: false},
    ];

    const saveChanges = () => {
        Swal.fire(
            'Updated!',
            'Your notification preferences have been updated.',
            'success'
        );
    };

    return (
        <div className="notification-settings">
            <div className="m-4">
                <Heading>Notification Settings</Heading>
            </div>

            <Form>
                {types.map((type) => {
                    return (
                        <Card className="p-3 d-flex m-2">
                            <Form.Check
                                type="switch"
                                defaultChecked={type.checked}
                                label={type.name}
                            />
                        </Card>
                    )
                })}

                <div className="d-flex mt-4 justify-content-center">
                    <Button onClick={saveChanges}>Save Changes</Button>
                </div>
            </Form>
        </div>
    );
}

export {NotificationSettings};