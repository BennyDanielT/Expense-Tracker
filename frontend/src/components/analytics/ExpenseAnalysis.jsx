import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Col, Container, Row } from "react-bootstrap";

function ExpenseAnalysis() {
  const data = {
    labels: ["May - Week 1", "May - Week 2", "May - Week 3", "May - Week 4"],
    datasets: [
      {
        label: "Attendance for Week 1",
        data: [18, 30, 12, 25],
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: [
          "rgba(232,99,132,1)",
          "rgba(232,211,6,1)",
          "rgba(54,162,235,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
        backgroundImage:
          'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
      },
    ],
  };

  const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Attendance for Week 1",
        data: [10, 20, 25, 35],
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: [
          "rgba(232,99,132,1)",
          "rgba(232,211,6,1)",
          "rgba(54,162,235,1)",
          "rgba(255,159,64,1)",
          "rgba(153,102,255,1)",
        ],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
        backgroundImage:
          'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
      },
    ],
  };

  const monthlyOptions = {
    plugins: {
      title: {
        display: true,
        text: "Monthly Expenses",
        color: "blue",
        font: {
          size: 34,
        },
        responsive: true,
        animation: {
          animateScale: true,
          color: true,
        },
      },
    },
  };

  const weeklyOptions = {
    plugins: {
      title: {
        display: true,
        text: "Weekly Expenses",
        color: "blue",
        font: {
          size: 34,
        },
        responsive: true,
        animation: {
          animateScale: true,
          color: true,
        },
      },
    },
  };

  return (
    <Container fluid>
      <Row className="" style={{ justifyContent: "space-evenly" }}>
        <div
          className="col-sm-8 col-md-6  col-lg-4 m-4"
          style={{
            backgroundColor: "#ffffff",
            borderStyle: "groove",
            paddingBottom: "8px",
          }}
        >
          <Doughnut data={data} options={weeklyOptions} />
        </div>
        <div
          className="col-sm-8 col-md-6 col-lg-4 m-4"
          style={{
            backgroundColor: "#ffffff",
            borderStyle: "groove",
            paddingBottom: "8px",
          }}
        >
          <Doughnut
            className="col-sm-6"
            data={monthlyData}
            options={monthlyOptions}
          />
        </div>
      </Row>
    </Container>
  );
}

export default ExpenseAnalysis;
