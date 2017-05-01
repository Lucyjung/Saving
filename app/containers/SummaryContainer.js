import React, { Component,PropTypes } from 'react'
import WrapperContainer from '../containers/WrapperContainer'
import BarChartGraph from '../components/BarChartGraph'
import LineChartGraph from '../components/LineChartGraph'
import Checkbox from 'rc-checkbox';

const dataInfo1 = {
        name : 'Incomes',
        color : '#0000FF'
};
const dataInfo2 = {
    name : 'Expenses',
    color : '#FF0000'
};
const incomeExpenseData = [
            {month: 'Jan', Incomes: 4000, Expenses: 2400},
            {month: 'Feb', target: 0, actual: 0},
            {month: 'Mar', target: 0, actual: 0},
            {month: 'Apr', target: 0, actual: 0},
            {month: 'May', target: 0, actual: 0},
            {month: 'Jun', target: 0, actual: 0},
            {month: 'Jul', target: 0, actual: 0},
            {month: 'Aug', target: 0, actual: 0},
            {month: 'Sep', target: 0, actual: 0},
            {month: 'Oct', target: 0, actual: 0},
            {month: 'Nov', target: 0, actual: 0},
            {month: 'Dec', target: 0, actual: 0},
];

const netUsageData = [
            {month: 'Jan', net : 1000},
            {month: 'Feb', net : -3000 },
            {month: 'Mar', net : 8000},
            {month: 'Apr', net : -4000 },
            {month: 'May', net : 1000 },
            {month: 'Jun', net : -1000},
            {month: 'Jul', net : 1000},
            {month: 'Aug', net : 1000},
            {month: 'Sep', net : 1000},
            {month: 'Oct', net : 1000},
            {month: 'Nov', net : 1000},
            {month: 'Dec', net : 1000},
];

const netUsageInfo = [
    {name : 'net' , key : 'net' , color : '#0000FF'},
];
let allCreditCardInfo = [];
class SummaryContainer extends Component{
    constructor () {
        super()
        this.state = {
            isLoading: true,
            status: true,
            creditCardData : [
                {month: 'Jan', KBank1: 4000, Scb: 2400, Citi : 1000 },
                {month: 'Feb', KBank1: 3000, Scb: 1398, Citi : 1220 },
                {month: 'Mar', KBank1: 2000, Scb: 9800, Citi : 0 },
                {month: 'Apr', KBank1: 2780, Scb: 3908 ,Citi : 0 },
                {month: 'May', KBank1: 1890, Scb: 4800, Citi : 0 },
                {month: 'Jun', KBank1: 2390, Scb: 3800, Citi : 0},
                {month: 'Jul', KBank1: 3490, Scb: 4300, Citi : 0},
                {month: 'Aug', KBank1: 3490, Scb: 4300, Citi : 0},
                {month: 'Sep', KBank1: 3490, Scb: 4300, Citi : 0},
                {month: 'Oct', KBank1: 3490, Scb: 4300, Citi : 0},
                {month: 'Nov', KBank1: 3490, Scb: 4300, Citi : 0},
                {month: 'Dec', KBank1: 3490, Scb: 4300, Citi : 0},
            ],
            creditCardInfo : [
                {name : 'KBank' , key : 'KBank1' , color : '#0000FF'},
                {name : 'SCB'   , key : 'Scb' , color : '#00FF00'},
                {name : 'CITI'  , key : 'Citi' , color : '#FF0000'},
            ],
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        for (var i in allCreditCardInfo){
            if(e.target.name == allCreditCardInfo[i].name){
                break;
            }
        }
        let info = allCreditCardInfo[i];
        let tempCreditCardInfo = Array.from(this.state.creditCardInfo);
        if (e.target.checked){
            tempCreditCardInfo.push(info);
        }
        else{
            tempCreditCardInfo.splice(i,1);
        }
        this.setState({
            creditCardInfo: tempCreditCardInfo
        });

    }
    componentWillMount () {
        allCreditCardInfo = Array.from(this.state.creditCardInfo);
    }
    render() {
        return (
            <WrapperContainer>
                <h2>Income - Expense</h2>
                <BarChartGraph
                    dataKey1={dataInfo1}
                    dataKey2={dataInfo2}
                    data={incomeExpenseData}
                />
                <h2>Net usage</h2>
                <LineChartGraph
                    data= {netUsageData}
                    inputs={netUsageInfo}
                />
                <h2>Credit Card Usage</h2>
                <LineChartGraph
                    data= {this.state.creditCardData}
                    inputs={this.state.creditCardInfo}
                />
                {allCreditCardInfo.map((info) => <label key={info.name}><Checkbox defaultChecked  onChange={this.onChange} name={info.name}/> {info.name}</label>)}
            </WrapperContainer>
        )
    }
}
export default SummaryContainer