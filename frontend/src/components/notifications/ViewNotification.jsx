import {Heading} from "../Heading/Heading";
import {Button, Card} from "react-bootstrap";
import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import {useEffect, useState} from "react";
import axios from "axios";
import {useAuth} from "../../contexts/Auth";
import {showError} from "../../constants";

function ViewNotification() {
    const [notifications, setNotifications] = useState([]);


    const moreDetails = (notification) => {
        let title, subTitle;

        title = ReactDOMServer.renderToString(notification.title);
        subTitle = ReactDOMServer.renderToString(notification.description);

        Swal.fire({
            title: `Notification ${notification.id}`,
            icon: 'info',
            html: `<div class="mt-3 mb-3">${title}</div><div class="mb-3">${subTitle}</div>`,
            denyButtonText: "Delete notification",
            showCloseButton: true,
            showDenyButton: true,
            preDeny() {
                axios.delete(`/api/delete-notification/${notification.id}`).then((ele) => {
                    Swal.fire(
                        'Deleted!',
                        'Notification has been deleted.',
                        'success'
                    ).then((ele) => {
                        window.location.reload();
                    });
                }).catch((err) => {
                    showError(err);
                });
            }
        })
    }

    const {user} = useAuth();

    useEffect(() => {
        axios.get(`/api/view-notification?user_id=${user().user.id}`).then((ele) => {
            const data = ele.data.success;

            const notifications = [];

            data.lent.forEach((ele) => {
                notifications.push({
                    id: ele.id,
                    title: `You added ${ele.name} with users ${ele.users.join(", ")}`,
                    description: `You get back ${ele.amount}`
                })
            });

            data.owed.forEach((ele) => {
                notifications.push({
                    id: ele.id,
                    title: `An user added ${ele.name}`,
                    description: `You owe ${ele.amount}`
                })
            });

            data.deleted_group.forEach((ele) => {
                notifications.push({
                    id: ele.id,
                    title: `The expense ${ele.name} is deleted`
                })
            });

            data.added_group.forEach((ele) => {
                notifications.push({
                    id: ele.id,
                    title: `You are added to the group ${ele.name}`
                })
            });

            setNotifications(notifications);

        }).catch((err) => {
            showError(err);
        });
    }, []);

    return (
        <div>
            <div className="m-4">
                <Heading>View Notifications</Heading>
            </div>
            {notifications.map((notification) => {
                return (
                    <Card className="m-2 p-3" key={notification.id}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h4>{notification.title}</h4>
                                <h6>{notification.description}</h6>
                            </div>
                            <Button onClick={() => moreDetails(notification)}>More Details</Button>
                        </div>
                    </Card>
                )
            })}
        </div>
    );
}

export {ViewNotification};