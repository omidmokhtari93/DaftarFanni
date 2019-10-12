import React, { Component } from 'react';
import Wrapper from '../../Shared/Wrapper';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Units extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Wrapper>
                <Router>
                    <ul className="nav nav-tabs yekan" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" >
                                <Link to="/machines">ماشین آلات</Link>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab">
                                <Link to="/parts">بخش ها</Link>
                            </a>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/machines">
                            machines
                        </Route>
                        <Route exact path="/parts">
                            parts
                        </Route>
                    </Switch>
                </Router>
            </Wrapper>
        )
    }
}