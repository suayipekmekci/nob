import React from 'react';
import {createHashHistory, createHistory, useBasename} from 'history';
import './Style.css'

var PageHeader = React.createClass({
    render: function() {
        return (
            <div className="content-header col-sm-12">
                <ul className="breadcrumb">
                    <li>
                        <a href="/">
                            <i className="fa fa-dashboard"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="active">DashboardPage</li>
                </ul>
            </div>
        );
    }
});

export default PageHeader;
