import React, { useState, useEffect } from 'react';

import { fetchDailyData } from '../../api';

import { Header } from 'semantic-ui-react';

import { Line, Bar } from 'react-chartjs-2';

const Chart = (props) => {

    const { country, data } = props;

    console.log(props);
    
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {

        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    const lineChart = (
        dailyData[0] 
            ? (
                <Line 
                data = {{
                    labels: dailyData.map(({ reportDate }) => reportDate),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed.total),
                        label: 'Infected',
                        borderColor: 'yellow',
                        backgroundColor: 'yellow',
                        fill: true,
                    }, {
                        data: dailyData.map((data) => data.deaths.total),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'red',
                        fill: true,
                    }],
                }}
                />
            ) : null
    );
    
    const barChart = (
        data.confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['yellow', 'green', 'red'],
                            data: [data.confirmed.value, data.recovered.value, data.deaths.value],
                        },
                    ],
            }}
            options={{
                legend: { display: false },
                title: { display: false },
            }}
        />
        ) : null
    );

    return (

        <div className="ui segment">
            <Header as="h2" textAlign="center">
                <Header.Content>{country}</Header.Content>
            </Header>
            { country === 'Global' ? lineChart : barChart}
        </div>
    )
}

export default Chart;