/**
 * @author ${Vatsal Yadav}
 */

import {Bar} from 'react-chartjs-2'
import 'chart.js/auto';
import {Button, Grid, Typography} from "@mui/material";
import {useState} from "react";

// The component purpose is to view monthly expenses charts
function ExpenseTracking() {

    const monthlyExpenseData2022 =
        [{
            "name": "January",
            "amount": "45",
        },
            {
                "name": "February",
                "amount": "85",
            },
            {
                "name": "March",
                "amount": "96",
            },
            {
                "name": "April",
                "amount": "47",
            }, {
            "name": "May",
            "amount": "20",
        }, {
            "name": "June",
            "amount": "67.85",
        },
        ];


    const monthlyExpenseData2021 =
        [{
            "name": "January",
            "amount": "167.85",
        },
            {
                "name": "February",
                "amount": "107",
            },
            {
                "name": "March",
                "amount": "108",
            },
            {
                "name": "April",
                "amount": "86",
            }, {
            "name": "May",
            "amount": "45",
        }, {
            "name": "June",
            "amount": "67",
        },
            {
                "name": "July",
                "amount": "75",
            },
            {
                "name": "August",
                "amount": "34",
            }, {
            "name": "September",
            "amount": "90",
        },
            {
                "name": "October",
                "amount": "65",
            },
            {
                "name": "November",
                "amount": "87.85",
            },
            {
                "name": "December",
                "amount": "167.85",
            },

        ];

    const weeklyExpense1 =
        [{
            "name": "Week 1",
            "amount": "36",
        },
            {
                "name": "Week 2",
                "amount": "47.5",
            },
            {
                "name": "Week 3",
                "amount": "62",
            },
            {
                "name": "Week 4",
                "amount": "22",
            }
        ];

    const weeklyExpenseData2 =
        [{
            "name": "Week 1",
            "amount": "25.85",
        },
            {
                "name": "Week 2",
                "amount": "30",
            },
            {
                "name": "Week 3",
                "amount": "27",
            },
            {
                "name": "Week 4",
                "amount": "40",
            }
        ];


    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const labels2022 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const dataWeekly = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: '2021',
                data: [36, 47.5, 62, 22],
                backgroundColor: 'rgba(153,102,255,1)',
            },
        ],
    };

    const data2022 = {
        labels: labels2022,
        datasets: [
            {
                label: '2022',
                data: [45, 85, 96, 47, 20, 67.85],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    const optionsMonthly = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'right',
            },
            title: {
                display: true,
                text: 'Monthly Expense Tracking',
                font: {
                    size: 16
                },
            },
        },
    };


    const optionsWeekly = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'right',
            },
            title: {
                display: true,
                text: 'Weekly Expense Tracking',
                font: {
                    size: 16
                },
            },
        },
    };


    const [chartData, setChartData] = useState(data2022);
    const [chartOptions, setChartOptions] = useState(optionsMonthly);
    const [analysisData, setAnalysisData] = useState(monthlyExpenseData2022);
    const [trackingMode, setTrackingMode] = useState("Monthly");


    function handleTrackingMode() {
        if (trackingMode === "Monthly") {
            setTrackingMode("Weekly")
            setAnalysisData(weeklyExpense1)
            setChartOptions(optionsWeekly)
            setChartData(dataWeekly)
        } else {
            setTrackingMode("Monthly")
            setAnalysisData(monthlyExpenseData2022)
            setChartOptions(optionsMonthly)
            setChartData(data2022)
        }
    }

    return (
        <div>
            <h1 align="center"> Expense Tracking </h1>

            <Grid container spacing={2}
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  marginTop={3}>
                <Grid item xs={12} sm={8} md={4}
                      style={{backgroundColor: "#ffffff", margin: "17px"}}>

                    <Typography gutterBottom variant="h5" component="div">
                        Expense Tracking - {trackingMode}
                    </Typography>
                    {Object.values(analysisData).map(months =>
                        <Grid container
                              direction="row"
                              justifyContent="center"
                              alignItems="stretch">
                            <Grid item xs={8}>
                                <Typography variant="body1" color="text.primary">
                                    {months.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body1" color="text.primary">
                                    {months.amount}$
                                </Typography>
                            </Grid>

                        </Grid>)}

                    <div className="text-end me-4 m-2">
                        <Button size="small" hidden={trackingMode === "Weekly"} onClick={handleTrackingMode}>Switch to
                            Weekly Mode</Button>
                        <Button size="small" hidden={trackingMode === "Monthly"} onClick={handleTrackingMode}>Switch to
                            Monthly Mode</Button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={8} md={5} style={{backgroundColor: "#ffffff", margin: "17px"}}>
                    {/* Code Reference : https://www.chartjs.org/docs/latest/charts/bar.html*/}
                    <Bar options={chartOptions} style={{backgroundColor: "#ffffff"}} height="200px" data={chartData}/>
                </Grid>


            </Grid>
        </div>

    )
}

export default ExpenseTracking