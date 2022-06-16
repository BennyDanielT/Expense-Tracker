import {Bar, Doughnut} from 'react-chartjs-2'
import 'chart.js/auto';
import {Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {Button, Grid, Typography} from "@mui/material";

function SpendingTrends() {

    const individualTrends =
        [
            {"desc": "Food", "value": "147$"},
            {"desc": "Travel", "value": "205$"},
            {"desc": "Grocery", "value": "98$"},
            {"desc": "Utilities", "value": "67$"},
            {"desc": "Others", "value": "245$"},];

    const groupTrends =
        [{"desc": "Total money sent:", "value": "568$"},
            {"desc": "Total money received:", "value": "92$"},
            {"desc": "Total amount of group expenses:", "value": "476$"},
            {"desc": "----------------------", "value": " "},
            {"desc": "Group based expenses", "value": ""},
            {"desc": "Home", "value": "252$"},
            {"desc": "Friends:", "value": "62$"},
            {"desc": "Work:", "value": "50$"},
            {"desc": "Saturday Movie:", "value": "67$"},
            {"desc": "Birthday:", "value": "45$"},];

    const [trendMode, setTrendMode] = useState(individualTrends);

    const dataGroup = {
        labels: ['Home', 'Friends', 'Work', 'Saturday Movie', 'Birthday'],
        datasets: [
            {
                label: 'Groups',
                data: [252, 62, 50, 67, 45],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(232,99,132,1)',
                    'rgba(232,211,6,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,159,64,1)',
                    'rgba(153,102,255,1)'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }

        ]
    }

    const dataIndi = {
        labels: ['Food', 'Travel', 'Grocery', 'Utilities', 'Others'],
        datasets: [
            {
                label: 'Categories',
                data: [147, 205, 98, 67, 245],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(232,99,132,1)',
                    'rgba(232,211,6,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,159,64,1)',
                    'rgba(153,102,255,1)'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)'
            }

        ]
    }

    const optionsIndi = {
        plugins: {
            title: {
                display: true,
                text: 'Categories',
                color: 'blue',
                font: {
                    size: 18
                },
                responsive: true,
                animation: {
                    animateScale: true,
                    color: true
                }
            }
        }
    }

    const optionsGroup = {
        plugins: {
            title: {
                display: true,
                text: 'Group expenses',
                color: 'blue',
                font: {
                    size: 18
                },
                responsive: true,
                animation: {
                    animateScale: true,
                    color: true
                }
            }
        }
    }

    const [spendingMode, setSpendingMode] = useState("Individual");
    const [chartOptions, setChartOptions] = useState(optionsIndi);
    const [chartData, setChartData] = useState(dataIndi);
    function onHandleChange(e) {
        setSpendingMode(e.target.value)
        if (e.target.value === 'Individual'){
            setChartData(dataIndi)
            setChartOptions(optionsIndi)
            setTrendMode(individualTrends)
        }
        else {
            setChartData(dataGroup)
            setChartOptions(optionsGroup)
            setTrendMode(groupTrends)
        }
    }

    return (

        <div>
            <h1 align="center"> Spending Trends </h1>

            <Grid container spacing={2}
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  marginTop={3}>

                <Grid item xs={12} sm={6} md={4}
                      style={{backgroundColor: "#ffffff", margin: "17px"}}>

                    <Typography gutterBottom variant="h5" component="div">
                        Category Based Expenses
                    </Typography>
                    {Object.values(trendMode).map(months =>
                        <Grid container
                              direction="row"
                              justifyContent="center"
                              alignItems="stretch">
                            <Grid item xs={8}>
                                <Typography variant="body1" color="text.primary">
                                    {months.desc}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body1" color="text.primary">
                                    {months.value}
                                </Typography>
                            </Grid>

                        </Grid>)}
                </Grid>
                <Grid item xs={12} sm={8} md={5} lg={4}>
                    <Doughnut data={chartData} style={{backgroundColor: "#ffffff", marginBottom: "17px"}}
                              options={chartOptions}/>
                </Grid>


            </Grid>
        </div>

    )
}

export default SpendingTrends