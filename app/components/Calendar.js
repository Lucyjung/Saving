import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
const styles = {
    content: {
        textAlign: 'center',
    }
}
class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            startDate: moment()
        };
    }

    render() {
        return (
            <div className=".col-sm-6 center-block" style={styles.content}>
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange.bind(this)}
            />
            </div>

        );
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
}

export default Calendar;