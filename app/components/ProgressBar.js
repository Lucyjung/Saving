import React, { PropTypes } from 'react'

function ProgressBar (props) {
    const widthStyle = {width : props.progress + '%'}
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={widthStyle}>
                <span>{props.text}</span>
            </div>
        </div>
    )
}

ProgressBar.propTypes = {
    text: PropTypes.string,
    progress : PropTypes.string
}


export default ProgressBar