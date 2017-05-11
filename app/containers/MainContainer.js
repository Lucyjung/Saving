import React, { Component } from 'react'
import WrapperContainer from '../containers/WrapperContainer'
import Calendar from '../components/Calendar'
import LargeButton from '../components/LargeButton'
import TransactionTable from '../components/TransactionTable'
import SummaryTable from '../components/SummaryTable'
import BarChartGraph from '../components/BarChartGraph'
import ProgressBar from '../components/ProgressBar'
import {writeUserData,readUserData} from '../utils/firebaseHelper'

const expenseLabel = 'Add Expense';
const incomeLabel = 'Add Income';
const defaultTableData = [
    {'Catagories' :'Food'   , 'Price' : '100'},
    {'Catagories' :'Traffic', 'Price' : '33'},
    {'Catagories' :'Salary', 'Price' : '-330000'}
];
const defaultSummaryData = {
    expense : '133',
    cash  : '100',
    creditCard : ''
};
const defaultProgressText = 'Expense/Bugget';
const dataKey1 = {
        name : 'target',
        color : '#8884d8'
};
const dataKey2 = {
    name : 'actual',
    color : '#82ca9d'
};

class MainContainer extends Component{
    constructor () {
        super()
        this.state = {
            isLoading: true,
            status: true
        }
    }
    componentDidMount () {

    }
    handleAddExpense (e) {
        writeUserData('TestUser','Nick','test@gmail.com','');
        console.log('TODO : Add function to manage expense ');
    }
    handleAddIncome (e) {
        readUserData('TestUser');
        console.log('TODO : Add function to manage income ')
    }
    render() {
        return (
            <WrapperContainer>
                <Calendar></Calendar>
                <div className="row">
                    <div className="col-md-6">
                        <LargeButton
                            onSubmit={(event) => this.handleAddExpense(event)}
                            label = {expenseLabel}
                        />
                    </div>
                    <div className="col-md-6">
                        <LargeButton
                            onSubmit={(event) => this.handleAddIncome(event)}
                            label = {incomeLabel}
                        />
                    </div>
                </div>
                <TransactionTable rowData={defaultTableData}/>
                <SummaryTable
                    expense={defaultSummaryData.expense}
                    cash={defaultSummaryData.cash}
                    creditCard={defaultSummaryData.creditCard}
                />
                <BarChartGraph
                    dataKey1={dataKey1}
                    dataKey2={dataKey2}
                />
                <ProgressBar text={defaultProgressText} progress="60"/>
            </WrapperContainer>
        )
    }
}
export default MainContainer
