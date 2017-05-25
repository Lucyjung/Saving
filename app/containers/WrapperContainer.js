import React from 'react'



function WrapperContainer (props) {
  return (
      <div className="center-block col-centered">
            {props.children}
      </div>
  )
}

export default WrapperContainer
