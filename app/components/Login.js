import React, { PropTypes } from 'react'
import Loading from './Loading'
import Calendar from './Calendar'
import LargeButton from './LargeButton'
import WrapperContainer from '../containers/WrapperContainer'


function Login (props) {
    if (props.isLoading === true) {
        return <Loading/>
    }
    return (
        <WrapperContainer>
            <h1> Hello !! {props.usersInfo}</h1>
            <Calendar></Calendar>
            <div className="row">
                <div className="col-md-6">
                    <LargeButton />
                </div>
                <div className="col-md-6">
                    <LargeButton />
                </div>
            </div>
        </WrapperContainer>
    )
}



export default Login
