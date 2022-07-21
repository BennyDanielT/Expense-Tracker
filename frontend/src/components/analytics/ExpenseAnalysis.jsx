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

    const { user } = useAuth();

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
        console.log("dispatching")
        dispatch(viewGroups(user().user.id));
    }, []);

    // show the success message only if view groups response is received successfully
    useEffect(() => {
        if (prevIsViewGroupsResponseReceived !== isViewGroupsResponseReceived && isSuccessfulResponse(viewGroupsResponseData)) {
            const response = {};
            console.log("viewGroupsResponseData['success']", viewGroupsResponseData['success'])
            viewGroupsResponseData['success'].forEach((ele) => {
                response[ele.id] = {groupName: ele.name, amount: 0};
            });
            console.log("response", response)
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


    useEffect(() => {
        console.log("viewExpensesResponseData.success", viewExpensesResponseData.success)
        console.log("groupExpenses", groupExpenses)
        if (prevIsViewExpensesResponseReceived !== undefined && prevIsViewExpensesResponseReceived !== isViewExpensesResponseReceived && groupExpenses[parseInt(viewExpensesResponseData.success[0].group_id)] !== undefined) {
            groupExpenses[parseInt(viewExpensesResponseData.success[0].group_id)].amount = viewExpensesResponseData.success.map(a => a.amount).reduce((a, b) => a + b, 0)
            // viewExpensesResponseData.success.filter((ele) => ele.group_ids.includes(groupExpenses))

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

    const groupTrends =
        [{"desc": "Total money sent:", "value": "568$"},
            {"desc": "Total money received", "value": "92$"},
            {"desc": "Total amount of group expenses", "value": "476$"},
            {"desc": "Total amount of individual expenses", "value": "757$"},
            {"desc": "Highest single expenses recorded", "value": "92$"},
            {"desc": "----------------------", "value": " "},
            {"desc": "Home", "value": "252$"},
            {"desc": "Friends", "value": "62$"},
            {"desc": "Work", "value": "50$"},
            {"desc": "Saturday Movie", "value": "67$"},
            {"desc": "Birthday", "value": "45$"},];


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
                    { groupExpenses.length !==0 &&  Object.keys(groupExpenses).map(key => {
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
                    { groupExpenses.length ===0 &&
                        <label> No Data Available, please add group based expenses. </label>
                    }
                </Grid>
                <Grid item xs={12} sm={8} md={5} lg={4}>
                    { groupExpenses.length !==0 && <Doughnut data={chartData} style={{backgroundColor: "#ffffff", marginBottom: "17px"}}
                              options={optionsGroup}/>}
                    { groupExpenses.length ===0 &&
                        <label>No Data Available, please add group based expenses.</label>
                    }
                </Grid>


            </Grid>
        </div>
    )
}

export default ExpenseAnalysis