import {Heading} from "../Heading/Heading";
import {Button, Card} from "react-bootstrap";
import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import {routes} from "../../constants";

function ViewNotification() {
    const notifications = [
        {
            id: 4,
            user: "Abhishek",
            self_added: true,
            lent: "$2.20",
            item: "Milk",
            date: "June 10th, 2022",
            group: null,
            other_users: ["Foo", "Bar"]
        },
        {
            id: 3,
            user: "Foo",
            lent: "$10.20",
            item: "Pizza",
            date: "June 9nd, 2022",
            group: "Group 1",
            other_users: []
        },
        {
            id: 2,
            user: "Abhishek",
            self_added: true,
            owed: "$5.20",
            item: "Internet",
            date: "June 9nd, 2022",
            group: null,
            other_users: ["Foo"]
        },
        {
            id: 1,
            user: "Foo",
            owed: "$1.20",
            item: "Chips",
            date: "June 3rd, 2022",
            group: "Group 2",
            other_users: []
        },
    ];

    const moreDetails = (notification) => {
        let title, subTitle;
        if (notification.self_added) {
            title = <div>You added {notification.item} with users <b>{notification.other_users.join(", ")}</b></div>;
            if (notification.lent) {
                subTitle = <div className="lent">You get back {notification.lent}</div>
            } else {
                subTitle = <div className="owed">You owe {notification.owed}</div>
            }
        } else {
            title = <div>{notification.user} added {notification.item}</div>;
            if (notification.lent) {
                subTitle = <div className="lent">{notification.user} gets back {notification.lent}</div>
            } else {
                subTitle = <div className="owed">{notification.user} owes {notification.owed}</div>
            }
        }
        if (notification.group) {
            title = `${title.props.children.join("")} in ${notification.group}`
        }

        title = ReactDOMServer.renderToString(title);
        subTitle = ReactDOMServer.renderToString(subTitle);

        Swal.fire({
            title: `${notification.item}`,
            icon: 'info',
            html: `<div class="mt-3 mb-3">${title}</div><div class="mb-3">${subTitle}</div> ${notification.date}`,
            denyButtonText: "Delete notification",
            showCloseButton: true,
            showDenyButton: true,
            preDeny() {
                Swal.fire(
                    'Deleted!',
                    'Notification has been deleted.',
                    'success'
                );
            }
        })
    }

    return (
        <div>
            <div className="m-4">
                <Heading>View Notifications</Heading>
            </div>
            {notifications.map((notification) => {
                let title, subTitle;
                if (notification.self_added) {
                    title = <div>You added {notification.item}</div>;
                    if (notification.lent) {
                        subTitle = <div className="lent">You get back {notification.lent}</div>
                    } else {
                        subTitle = <div className="owed">You owe {notification.owed}</div>
                    }
                } else {
                    title = <div>{notification.user} added {notification.item}</div>;
                    if (notification.lent) {
                        subTitle = <div className="lent">{notification.user} gets back {notification.lent}</div>
                    } else {
                        subTitle = <div className="owed">{notification.user} owes {notification.owed}</div>
                    }
                }
                return (
                    <Card className="m-2 p-3" key={notification.id}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h4>{title}</h4>
                                <h5>{subTitle}</h5>
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