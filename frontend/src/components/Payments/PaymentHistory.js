import {Heading} from "../Heading/Heading";
import DatePicker from "react-datepicker";
import {useState} from "react";
import {Button, Table} from "react-bootstrap";

export default function PaymentHistory() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="m-4 p-4">
            <Heading>
                Payment History
            </Heading>

            <div className="mb-3 mt-3">
                <h3 className="d-flex justify-content-center">Display account activity</h3>
                <div className="d-flex justify-content-center">The table below displays the list of payments made during
                    the given time period.
                </div>
            </div>

            <div className="d-flex mb-4">
                <b>Payments List</b>
            </div>

            <div className="d-flex">
                <div>
                    <span>From</span>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                </div>
                <div>
                    <div>To</div>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                    />
                </div>
            </div>
            <div>
                <Button className="mt-4 d-flex justify-content-center align-items-center"
                        style={{width: "fit-content"}}>Go</Button>
            </div>

            <div className="mt-4">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>
                            Payment
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Loader
                        </th>
                        <th>
                            Amount
                        </th>
                        <th>
                            Payment Status
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>{new Date().toDateString()}</td>
                        <td>US Payment Service</td>
                        <td>$120</td>
                        <td>Loaded on {new Date().toDateString()}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>{new Date().toDateString()}</td>
                        <td>US Payment Service</td>
                        <td>$220</td>
                        <td>Loaded on {new Date().toDateString()}</td>
                    </tr>
                    </tbody>
                </Table>
                <div>Current Page (1/1)</div>
            </div>
        </div>
    );
}