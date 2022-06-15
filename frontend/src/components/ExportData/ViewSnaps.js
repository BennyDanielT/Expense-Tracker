import {Heading} from "../Heading/Heading";
import {Button, Card, Alert} from "react-bootstrap";
import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";
import {routes} from "../../constants";

export default function ViewSnaps() {
    const snapshots = [
        {
            account: "Current",
            balance: "$9005",
            date: "June 10th, 2015 06:10PM",
        },
        {
            account: "Current",
            balance: "$8956",
            date: "January 20th, 2017 08:10AM",
        },
        {
            account: "Savings",
            balance: "$88784",
            date: "July 20th, 2018 08:10AM",
        },
        {
            account: "Savings",
            balance: "$32189",
            date: "May 20th, 2019 08:10AM",
        },
        {
            account: "Current",
            balance: "$10256",
            date: "December 25th, 2021 12:10PM",
        },
    ];

    const deleteSnap = (snap) => {
        let title, account,amount;
        
        title = <div className="owed"><b>Do you want to delete this Snapshot ?</b></div>;
        amount = <div className="lent"><b>Balance: {snap.balance}</b></div>;
        account = <div className="lent"><b>Account: {snap.account}</b></div>;

        title = ReactDOMServer.renderToString(title);
        amount = ReactDOMServer.renderToString(amount);
        account = ReactDOMServer.renderToString(account);

        Swal.fire({
            title: `Instance: ${snap.date}`,
            icon: 'question',
            html: `<div class="mb-3">${account}</div> ${amount}<div class="mt-3 mb-3">${title}</div>`,
            denyButtonText: "Delete Snapshot",
            showCloseButton: true,
            showDenyButton: true,
            preDeny() {
                Swal.fire(
                    'Deleted!',
                    'Snapshot has been deleted.',
                    'success'
                );
            }
        })
    }

    return (
        <div>
            <div className="m-4">
            <Alert variant='primary'>
        <Alert.Heading className='text-center'>My Snapshots</Alert.Heading>
        
      </Alert>
      <hr />
            </div>
            {snapshots.map((snap) => {
                let date, account,balance;
                date = <div>Date: {snap.date}</div>;
                account = <div className="snaps">Account: {snap.account}</div>
                balance = <div className="lent">Balance: {snap.balance}</div>

                return (
                    <Card className="m-2 p-3" key={snap.date}>
                        <div className="d-flex  justify-content-between align-items-center">
                            <div>
                                <h4>{date}</h4>
                                <h5>{account}</h5>
                                <h5>{balance}</h5>
                            </div>
                            <Button onClick={() => deleteSnap(snap)}>Delete this Snap</Button>
                        </div>
                    </Card>
                )
            })}
        </div>
    );
}