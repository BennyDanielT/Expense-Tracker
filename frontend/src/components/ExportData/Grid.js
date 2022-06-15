<<<<<<< HEAD
import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../ExportData/Grid.css';
import Pdf, {toPDF} from 'react-to-pdf';
=======
import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../ExportData/Grid.css";
// import Pdf, {toPDF} from 'react-to-pdf';
>>>>>>> 101dc5dc662455a08a3f6e59204b3f3aa328208d
const ref = React.createRef();

// Reference : https://www.npmjs.com/package/react-datetime-picker
export default function Grid() {
  // const handleExport = (e) => {
  //   e.preventDefault();
  //   ReactPDF.render(<MyDocument />, `example.pdf`);
  //   // set validations and navigate to reminders list
  // };

  const tableData = {
    row1: {
<<<<<<< HEAD
      date: '17-Jun-2020',
      title: 'Pool Party',
      vendor: 'Dalplex',
      amount: '$150',
    },
    row2: {
      date: '8-Jul-2020',
      title: 'Car Rental',
      vendor: 'CommunAuto',
      amount: '$50',
    },
    row3: {
      date: '1-Dec-2020',
      title: 'Groceries',
      vendor: 'Walmart',
      amount: '$150',
    },
    row4: {
      date: '01-Jun-2021',
      title: 'Gym Membership',
      vendor: 'Dalplex',
      amount: '$58.51',
=======
      date: "17-Jun-2020",
      title: "Pool Party",
      vendor: "Dalplex",
      amount: "$150",
    },
    row2: {
      date: "8-Jul-2020",
      title: "Car Rental",
      vendor: "CommunAuto",
      amount: "$50",
    },
    row3: {
      date: "1-Dec-2020",
      title: "Groceries",
      vendor: "Walmart",
      amount: "$150",
    },
    row4: {
      date: "01-Jun-2021",
      title: "Gym Membership",
      vendor: "Dalplex",
      amount: "$58.51",
>>>>>>> 101dc5dc662455a08a3f6e59204b3f3aa328208d
    },
  };

  const options = {
<<<<<<< HEAD
    orientation: 'landscape',
    unit: 'in'
};

  return (
    <div class='container bg-light align-center my-5 px-2 py-2'  ref={ref}>
      <div class='container p-3 my-3 bg-primary text-white'>
        <h1 align='center'> Export Data </h1>
      </div>
      <div class='border border-2 border-success rounded px-2 py-2 dashed text-center'>
=======
    orientation: "landscape",
    unit: "in",
  };

  return (
    <div class="container bg-light align-center my-5 px-2 py-2" ref={ref}>
      <div class="container p-3 my-3 bg-primary text-white">
        <h1 align="center"> Export Data </h1>
      </div>
      <div class="border border-2 border-success rounded px-2 py-2 dashed text-center">
>>>>>>> 101dc5dc662455a08a3f6e59204b3f3aa328208d
        Click on the 'Export' button to download a PDF copy of your expenses!
      </div>
      <br />

      <br />
<<<<<<< HEAD
      <Table class='striped table-bordered hover'>
        <thead class='align-middle'>
=======
      <Table class="striped table-bordered hover">
        <thead class="align-middle">
>>>>>>> 101dc5dc662455a08a3f6e59204b3f3aa328208d
          <tr>
            <th>Date</th>
            <th>Expense Title</th>
            <th>Vendor</th>
            <th>Expense Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(tableData).map((row) => (
            <tr>
              <td>{row.date}</td>
              <td>{row.title}</td>
              <td>{row.vendor}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
<<<<<<< HEAD
      <div class='col-md-12 text-center'>
=======
      {/* <div class='col-md-12 text-center'>
>>>>>>> 101dc5dc662455a08a3f6e59204b3f3aa328208d
        <Pdf targetRef={ref} filename='Export_Test.pdf' options={options}>
          {({ toPdf }) => (
            <Button className='mt-2' onClick={toPdf}>
              Export
            </Button>
          )}
        </Pdf>
<<<<<<< HEAD
      </div>
=======
      </div> */}
>>>>>>> 101dc5dc662455a08a3f6e59204b3f3aa328208d
    </div>
  );
}
