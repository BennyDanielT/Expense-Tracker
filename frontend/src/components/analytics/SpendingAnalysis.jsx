import {Bar, Doughnut} from 'react-chartjs-2'
import 'chart.js/auto';
import {Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {Button, Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchExpenses, viewTags} from "../../redux/actions";
import {useAuth} from "../../contexts/Auth";
import {usePrevious} from "react-use";

function SpendingTrends() {


    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Categories',
                data:[],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(232,99,132,1)',
                    'rgba(232,211,6,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,159,64,1)',
                    'rgba(153,102,255,1)'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)'
            }

        ]
    });

    const [tagList, setTagList] = useState([]);

    let dispatch = useDispatch();

    const { user } = useAuth();


    // View Tags request and processing
    const viewTagsResponseData = useSelector(
        (state) => state.tag.viewTagsResponseData
    );

    const isViewTagsResponseReceived = useSelector(
        (state) => state.tag.isViewTagsResponseReceived
    );

    // hook to request the data
    useEffect(() => {
        dispatch(viewTags(user().user.identities[0].user_id));
    }, [dispatch]);


    // hook to check if the data is received from the backend
    // UI is updated accordingly
    useEffect(() => {
        if (
            viewTagsResponseData &&
            viewTagsResponseData.data &&
            viewTagsResponseData.data.length
        ) {

            const response = {};
            viewTagsResponseData.data.map(tag => {
                response[tag.id] = {tagName: tag.name, amount: 0};
            });

            setTagList(response);
        }
    }, [viewTagsResponseData]);

    useEffect(() => {
        Object.keys(tagList).forEach((tag) => {
            dispatch(fetchExpenses(tag));
        });
    }, [tagList]);


    // Fetch all related expenses request and processing
    // hook to check if the data is received from the backend
    // UI is updated accordingly
    const fetchExpensesResponseData = useSelector(
        (state) => state.tag.fetchExpensesResponseData
    );


    const isFetchExpensesResponseReceived = useSelector(
        (state) => state.tag.isFetchExpensesResponseReceived
    );

    useEffect(() => {
        if (fetchExpensesResponseData) {
            if (!fetchExpensesResponseData.error) {
                if (fetchExpensesResponseData.data!==undefined &&  tagList[fetchExpensesResponseData.data[0].tag_id] !== undefined) {
                    tagList[fetchExpensesResponseData.data[0].tag_id].amount = fetchExpensesResponseData.data.map(a => a.amount).reduce((a, b) => a + b, 0)
                    setChartData({
                        labels: Object.keys(tagList).map(key => {
                            return tagList[key]
                        }).map(a => a.tagName),
                        datasets: [
                            {
                                label: 'Categories',
                                data: Object.keys(tagList).map(key => {
                                    return tagList[key]
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
            }
        }
    }, [isFetchExpensesResponseReceived]);


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
                    { tagList.length !==0 &&  Object.keys(tagList).map(key => {
                        return tagList[key];
                    }).map(months =>
                        <Grid container
                              direction="row"
                              justifyContent="center"
                              alignItems="stretch">
                            <Grid item xs={8}>
                                <Typography variant="body1" color="text.primary">
                                    {months.tagName}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body1" color="text.primary">
                                    {months.amount}$
                                </Typography>
                            </Grid>

                        </Grid>)}
                    { tagList.length ===0 &&
                        <label> No Data Available, please add category based expenses. </label>
                    }
                </Grid>
                <Grid item xs={12} sm={8} md={5} lg={4}>
                    { tagList.length !==0 && <Doughnut data={chartData} style={{backgroundColor: "#ffffff", marginBottom: "17px"}}
                              options={optionsIndi}/>}
                    { tagList.length ===0 &&
                    <label> No Data Available, please add category based expenses. </label>
                    }
                </Grid>


            </Grid>
        </div>

    )
}

export default SpendingTrends