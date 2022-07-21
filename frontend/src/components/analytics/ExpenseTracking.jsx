/**
 * @author ${Vatsal Yadav}
 */

import {Bar} from 'react-chartjs-2'
import 'chart.js/auto';
import {Grid, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {viewExpenses} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {usePrevious} from "react-use";
import {useAuth} from "../../contexts/Auth";

// The component purpose is to view monthly expenses charts
function ExpenseTracking() {

    const [monthsList, setMonthsList] = useState([])
    const dispatch = useDispatch();
    const {user} = useAuth();

    // Prepare month list for months until current date and fetch expenses
    useEffect(() => {
        let yearStartDate = new Date(new Date().getFullYear(), 0, 1);
        let currentDate = new Date();
        let monthList = {0: {name: yearStartDate.toLocaleString('en', {month: 'long'}), amount: 0}}
        while (yearStartDate.setMonth(yearStartDate.getMonth() + 1) < currentDate) {
            monthList[yearStartDate.getMonth()] = {
                name: yearStartDate.toLocaleString('en', {
                    month: 'long'
                }), amount: 0
            }
        }
        setMonthsList(monthList)
        dispatch(viewExpenses(user().user.id));
    }, []);

    const isViewExpensesResponseReceived = useSelector(
        (state) => state.expense.isViewExpensesResponseReceived
    );

    const viewExpensesResponseData = useSelector(
        (state) => state.expense.viewExpensesResponseData
    );

    const prevIsViewExpensesResponseReceived = usePrevious(isViewExpensesResponseReceived);

    const [montlyChartData, setMontlyChartData] = useState({
        labels: [],
        datasets: [
            {
                label: '2022',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    })

// Prepare chart data as per groups and total amount logged for each month
    useEffect(() => {
        if (prevIsViewExpensesResponseReceived !== undefined && prevIsViewExpensesResponseReceived !== isViewExpensesResponseReceived && monthsList[0] !== undefined) {
            viewExpensesResponseData.success.map(expense => {
                let expenseDate = new Date(expense.current_time)
                monthsList[expenseDate.getMonth()].amount = viewExpensesResponseData.success.filter(ex => (new Date(ex.current_time)).getMonth() === expenseDate.getMonth()).map(a => a.amount / a.user_ids.length).reduce((a, b) => a + b, 0)
            })

            setMontlyChartData({
                labels: Object.keys(monthsList).map(key => {
                    return monthsList[key]
                }).map(a => a.name),
                datasets: [
                    {
                        label: '2022',
                        data: Object.keys(monthsList).map(key => {
                            return monthsList[key]
                        }).map(a => a.amount),
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    }
                ],
            })

        }
    }, [isViewExpensesResponseReceived]);


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
                        Monthly Expense Tracking
                    </Typography>
                    {monthsList.length !== 0 && Object.keys(monthsList).map(key => {
                        return monthsList[key];
                    }).map(months =>
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
                    {monthsList.length === 0 &&
                        <label> No Data Available, please add new expenses. </label>
                    }

                </Grid>
                <Grid item xs={12} sm={8} md={5} style={{backgroundColor: "#ffffff", margin: "17px"}}>
                    {/* Code Reference : https://www.chartjs.org/docs/latest/charts/bar.html*/}
                    {monthsList.length !== 0 &&
                        <Bar options={optionsMonthly} style={{backgroundColor: "#ffffff"}} height="200px"
                             data={montlyChartData}/>}
                    {monthsList.length === 0 &&
                        <label> No Data Available, please add new expenses. </label>
                    }
                </Grid>


            </Grid>
        </div>

    )
}

export default ExpenseTracking