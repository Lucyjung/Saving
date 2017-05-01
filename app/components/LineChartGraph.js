import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend} from 'recharts';

class LineChartGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
            {month: 'Jan', target: 4000, actual: 2400},
            {month: 'Feb', target: -3000, actual: 1398},
            {month: 'Mar', target: 2000, actual: 9800},
            {month: 'Apr', target: -2780, actual: 3908},
            {month: 'May', target: 1890, actual: 4800},
            {month: 'Jun', target: -2390, actual: 3800},
            {month: 'Jul', target: 3490, actual: 4300},
            {month: 'Aug', target: 3490, actual: 4300},
            {month: 'Sep', target: 3490, actual: 4300},
            {month: 'Oct', target: 3490, actual: 4300},
            {month: 'Nov', target: 3490, actual: 4300},
            {month: 'Dec', target: 3490, actual: 4300},
            ],
            xKey : 'month',
        };
    }

    render() {
        return (
            <ResponsiveContainer width="100%" height="80%" minHeight={200} minWidth={500}>
                <LineChart width={600} height={300} data={this.props.data}
                           margin={{top: 20, right: 50, left: 20, bottom: 5}}>
                    <XAxis dataKey="month"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <ReferenceLine y={0} label="" stroke="black"/>
                    {this.props.inputs.map((input) => <Line type="monotone" dataKey={input.key} stroke={input.color} key={input.name} />)}
                </LineChart>
            </ResponsiveContainer>

        );
    }
}



export default LineChartGraph;