/**
 * @author ${Vatsal Yadav}
 */

import {Doughnut} from 'react-chartjs-2'
import 'chart.js/auto';
import {Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {usePrevious} from "react-use";
import {useAuth} from "../../contexts/Auth";
import {viewExpenses, viewGroups} from "../../redux/actions";
import {isSuccessfulResponse} from "../../constants";
import {useEffect} from "react";
import {useState} from "react";

// The component purpose is to view chart for expenses of different groups
function ExpenseAnalysis() {

    const [groupExpenses, setGroupExpenses] = useState([]);
    const dispatch = useDispatch();

    const viewGroupsResponseData = useSelector(
        (state) => state.group.viewGroupsResponseData
    );

    const isViewGroupsResponseReceived = useSelector(
        (state) => state.group.isViewGroupsResponseReceived
    );

    const prevIsViewGroupsResponseReceived = usePrevious(isViewGroupsResponseReceived);

    const {user} = useAuth();

    // Code Reference : https://www.chartjs.org/
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Groups',
                data: [],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(232,99,132,1)',
                    'rgba(232,211,6,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,159,64,1)',
                    'rgba(153,102,255,1)'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }

        ]
    });

    useEffect(() => {
        dispatch(viewGroups(user().user.id));
    }, []);

    // show the success message only if view groups response is received successfully
    useEffect(() => {
        if (prevIsViewGroupsResponseReceived !== isViewGroupsResponseReceived && isSuccessfulResponse(viewGroupsResponseData)) {
            const response = {};
            viewGroupsResponseData['success'].forEach((ele) => {
                response[ele.id] = {groupName: ele.name, amount: 0};
            });
            setGroupExpenses(response);

        }
    }, [isViewGroupsResponseReceived]);


    const isViewExpensesResponseReceived = useSelector(
        (state) => state.expense.isViewExpensesResponseReceived
    );

    const viewExpensesResponseData = useSelector(
        (state) => state.expense.viewExpensesResponseData
    );

    const prevIsViewExpensesResponseReceived = usePrevious(isViewExpensesResponseReceived);

// Prepare chart data as per groups and total amount logged for each group
    useEffect(() => {
        if (prevIsViewExpensesResponseReceived !== undefined && prevIsViewExpensesResponseReceived !== isViewExpensesResponseReceived && groupExpenses[parseInt(viewExpensesResponseData.success[0].group_id)] !== undefined) {
            groupExpenses[parseInt(viewExpensesResponseData.success[0].group_id)].amount = viewExpensesResponseData.success.map(a => a.amount/a.user_ids.length).reduce((a, b) => a + b, 0)
            setChartData({
                labels: Object.keys(groupExpenses).map(key => {
                    return groupExpenses[key]
                }).map(a => a.groupName),
                datasets: [
                    {
                        label: 'Groups',
                        data: Object.keys(groupExpenses).map(key => {
                            return groupExpenses[key]
                        }).map(a => a.amount),
                        borderColor: ['rgba(255,206,86,0.2)'],
                        backgroundColor: ['rgba(232,99,132,1)',
                            'rgba(232,211,6,1)',
                            'rgba(54,162,235,1)',
                            'rgba(255,159,64,1)',
                            'rgba(153,102,255,1)'],
                        pointBackgroundColor: 'rgba(255,206,86,0.2)'
                    }

                ]
            })

        }
    }, [isViewExpensesResponseReceived]);

    useEffect(() => {
        dispatch(viewExpenses(user().user.id));
    }, [groupExpenses]);

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
                        Group Based Expenses
                    </Typography>
                    {groupExpenses.length !== 0 && Object.keys(groupExpenses).map(key => {
                        return groupExpenses[key];
                    }).map(group =>
                        <Grid container
                              direction="row"
                              justifyContent="center"
                              alignItems="stretch">
                            <Grid item xs={8}>
                                <Typography variant="body1" color="text.primary">
                                    {group.groupName}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body1" color="text.primary">
                                    {group.amount} $
                                </Typography>
                            </Grid>

                        </Grid>)}
                    {groupExpenses.length === 0 &&
                        <label> No Data Available, please add group based expenses. </label>
                    }
                </Grid>
                <Grid item xs={12} sm={8} md={5} lg={4}>
                    {/* Code reference: https://www.chartjs.org/docs/latest/charts/doughnut.html*/}
                    {groupExpenses.length !== 0 &&
                        <Doughnut data={chartData} style={{backgroundColor: "#ffffff", marginBottom: "17px"}}
                                  options={optionsGroup}/>}
                    {groupExpenses.length === 0 &&
                        <label>No Data Available, please add group based expenses.</label>
                    }
                </Grid>


            </Grid>
        </div>
    )
}

export default ExpenseAnalysis