import React, { Component,PropTypes } from 'react'

class TransactionTable extends Component{
    constructor (props) {
        super(props)
        this.state = {
            rowData:[]
        }
    }
    addRow (value,index){
        let trClass = "danger";
        if (Number(value.Price) < 0 ){
            trClass = "success";
            value.Price = Number(value.Price) * -1 
        }

        return (
            <tr key={index} className={trClass}>
                <td >{index+1}</td>
                <td >{value.Catagories}</td>
                <td >{value.Price}</td>
            </tr>)
    }
    render () {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Catagories
                            </th>
                            <th>
                                $$$
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.rowData.map(this.addRow )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            
        )
    }
};
TransactionTable.propTypes = {
    rowData : PropTypes.array.isRequired
}
export default TransactionTable
