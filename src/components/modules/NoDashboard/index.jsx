import React from 'react';
import {Col} from 'react-bootstrap';
import './style.css'
const MyComponent = React.createClass({
    render() {
        return (
            <div className="dashboardEmptyContainer">
                <div className="p-rel">
                    <div className="dashboardArrow"></div>
                    <div className="dashboardIcon"></div>
                    <h2 className="dashboardEmptyTitle">You don't have any dashboards yet.</h2>
                    <div className="dashboardEmptyText">Use the + button on the top-right corner to add one!</div>
                  </div>
            </div>
        )
      }
})

export default MyComponent;
