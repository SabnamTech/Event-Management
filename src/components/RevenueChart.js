import "../styles/Dashboard.css";

import {

    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid

} from "recharts";

const data=[

    {month:"Jan",revenue:18000},
    {month:"Feb",revenue:26000},
    {month:"Mar",revenue:22000},
    {month:"Apr",revenue:35000},
    {month:"May",revenue:30000},
    {month:"Jun",revenue:48000}

];

function RevenueChart(){

    return(

        <div className="revenue-card">

            <h2>Revenue Analytics</h2>

            <p className="chart-subtitle">

                Monthly earnings overview

            </p>

            <ResponsiveContainer
                width="100%"
                height={280}
            >

                <LineChart data={data}>

                    <CartesianGrid
                        stroke="#2f3555"
                        strokeDasharray="5 5"
                    />

                    <XAxis
                        dataKey="month"
                        stroke="#ccc"
                    />

                    <YAxis
                        stroke="#ccc"
                    />

                    <Tooltip/>

                    <Line

                        type="monotone"

                        dataKey="revenue"

                        stroke="#8b5cf6"

                        strokeWidth={4}

                        dot={{

                            fill:"#8b5cf6",

                            r:6

                        }}

                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    )

}

export default RevenueChart;