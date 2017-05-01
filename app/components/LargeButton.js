import React, { PropTypes } from 'react'

function LargeButton (props) {
    return (
        <button type="button" className="btn btn-primary btn-lg center-block" onClick={props.onSubmit}>
            {props.label}
        </button>
    )
}

LargeButton.propTypes = {
    onSubmit : PropTypes.func.isRequired,
    label : PropTypes.string.isRequired
}

export default LargeButton
