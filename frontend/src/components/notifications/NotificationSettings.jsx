import {Heading} from "../Heading/Heading";
import {Button, Card, Form} from "react-bootstrap";
import Swal from "sweetalert2";
import {useEffect, useState} from "react";
import axios from "axios";
import {showError} from "../../constants";
import {useAuth} from "../../contexts/Auth";

function NotificationSettings() {

    const [types, setTypes] = useState([]);

    const auth = useAuth();

    useEffect(() => {
        axios.get("/api/notification-type").then((notificationResponse) => {
            axios.post(`/api/notification-settings/`, {'user_id': auth.user().user.id}).then((ele) => {
                const types = notificationResponse.data.success;
                if (ele.data.success) {
                    const type_ids = new Set(ele.data.success[0].types);
                    types.forEach((type) => {
                        type["checked"] = type_ids.has(type.type_id);
                    })
                }
                setTypes(types);
            }).catch((err) => {
                showError(err);
            });
        }).catch((err) => {
            showError(err);
        });

    }, []);


    const saveChanges = () => {
        const data = {
            user_id: auth.user().user.id,
            types: types.filter((ele) => ele.checked).map((ele) => ele.type_id)
        }
        axios.put("/api/update-notification-settings", data).then((ele) => {
            Swal.fire(
                'Updated!',
                'Your notification preferences have been updated.',
                'success'
            );
        }).catch((err) => {
            showError(err);
        });
    };

    const onClickCheckbox = (type) => {
        const newTypes = JSON.parse(JSON.stringify(types));
        newTypes.forEach((ele) => {
            if (ele.id === type.id) {
                ele.checked = !ele.checked;
            }
        });
        setTypes(newTypes);
    };

    return (
        <div className="notification-settings">
            <div className="m-4">
                <Heading>Notification Settings</Heading>
            </div>

            <Form>
                {types.map((type) => {
                    return (
                        <Card className="p-3 d-flex m-2" key={type.id}>
                            <Form.Check
                                type="switch"
                                defaultChecked={type.checked}
                                label={type.name}
                                onClick={() => onClickCheckbox(type)}
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