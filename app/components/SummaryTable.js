import React, { Component,PropTypes } from 'react'

const tableHeader = 'Expense Summary';
class SummaryTable extends Component{
    constructor (props) {
        super(props)
        this.state = {
            income : '0',
            expense : '0',
            cash : '0',
            creditCard : []
        }
    }
    render () {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>
                                {tableHeader} 
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td> Expense </td><td> {this.props.expense }</td>
                        </tr>
                        <tr>
                            <td> Cash </td><td> {this.props.cash }</td>
                        </tr>
                        <tr>
                            <td> Credit Card  </td><td> {this.props.creditCard }</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
};

export default SummaryTable