import React from 'react'
import { Link } from 'react-router'
import WrapperContainer from '../containers/WrapperContainer'

function Home () {
  return (
    <WrapperContainer>
      <h1>Please Login</h1>
      <Link to='/login'>
        <button type='button' className='btn btn-lg btn-success'>Log in</button>
      </Link>
    </WrapperContainer>
  )
}

export default Home