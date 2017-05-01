import React from 'react'
import { Link } from 'react-router'

const Main = React.createClass({
  render () {
    return (
        
      <div>
        <div className="row">
          <div className="col-md-12">
            <ul className="nav nav-tabs">
              <li>
                <Link to='/index'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/summary'>
                  Summary
                </Link>
              </li>
              <li className="dropdown pull-right">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle">Setting<strong className="caret"></strong></a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Profile</a>
                  </li>
                  <li>
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
});

export default Main