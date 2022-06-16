import {Doughnut} from 'react-chartjs-2'
import 'chart.js/auto';
import {Grid, Typography} from "@mui/material";

function ExpenseAnalysis() {
    const groupTrends =
        [{"desc": "Total money sent:", "value": "568$"},
            {"desc": "Total money received:", "value": "92$"},
            {"desc": "Total amount of group expenses:", "value": "476$"},
            {"desc": "Total amount of individual expenses:", "value": "757$"},
            {"desc": "Highest single expenses recorded:", "value": "92$"},
            {"desc": "----------------------", "value": " "},
            {"desc": "Group based expenses", "value": ""},
            {"desc": "Home:", "value": "252$"},
            {"desc": "Friends:", "value": "62$"},
            {"desc": "Work:", "value": "50$"},
            {"desc": "Saturday Movie:", "value": "67$"},
            {"desc": "Birthday:", "value": "45$"},];
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

    return (
        <div>
            <h1 align="center"> Expense Analysis </h1>

            <Grid container spacing={2}
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  marginTop={3}>

                <Grid item xs={12} sm={6} md={4}
                      style={{backgroundColor: "#ffffff", margin: "17px"}}>

                    <Typography gutterBottom variant="h5" component="div">
                        Spending Trends
                    </Typography>
                    {Object.values(groupTrends).map(category =>
                        <Grid container
                              direction="row"
                              justifyContent="center"
                              alignItems="stretch">
                            <Grid item xs={8}>
                                <Typography variant="body1" color="text.primary">
                                    {category.desc}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body1" color="text.primary">
                                    {category.value}
                                </Typography>
                            </Grid>

                        </Grid>)}
                </Grid>
                <Grid item xs={12} sm={8} md={5} lg={4}>
                    <Doughnut data={dataGroup} style={{backgroundColor: "#ffffff", marginBottom: "17px"}}
                              options={optionsGroup}/>
                </Grid>


            </Grid>
        </div>
    )
}

export default ExpenseAnalysis