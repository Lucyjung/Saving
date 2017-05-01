import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, XAxis ,YAxis ,CartesianGrid , Tooltip, Legend, Bar} from 'recharts';

class BarChartGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
            {month: 'Jan', target: 4000, actual: 2400},
            {month: 'Feb', target: 3000, actual: 1398},
            {month: 'Mar', target: 2000, actual: 9800},
            {month: 'Apr', target: 2780, actual: 3908},
            {month: 'May', target: 1890, actual: 4800},
            {month: 'Jun', target: 2390, actual: 3800},
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
                <BarChart width={730} height={250} data={this.props.data ||  this.state.data}>
                    <XAxis dataKey={this.props.xKey || this.state.xKey} />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={this.props.dataKey1.name} fill={this.props.dataKey1.color} />
                    <Bar dataKey={this.props.dataKey2.name}  fill={this.props.dataKey2.color} />
                </BarChart>
            </ResponsiveContainer>

        );
    }
}



export default BarChartGraph;