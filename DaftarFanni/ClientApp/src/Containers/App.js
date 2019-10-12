import React, { Component } from 'react';
import Wrapper from '../Shared/Wrapper';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchDocument from '../Components/DocumentSearch/DocumentSearch';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import DocumentEntry from '../Components/DocumentEntry/DocumentEntry';
import Units from '../Components/UnitDifinitions/UnitDifinition';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Wrapper>
                <Router>
                    <div className="bg-primary text-center p-3 yekan">
                        <label className="text-white mb-0 h4" style={{ fontWeight: 800, marginLeft: '160px' }}>دفتر فنی</label>
                        <Link to="/searchdoc">
                            <button className="btn btn-warning p-1 m-0 yekan float-right ml-2">
                                ثبت سند جدید <span className="fa fa-plus green-text align-middle"></span>
                            </button>
                        </Link>
                        <Link to="/">
                            <button className="btn btn-warning p-1 m-0 yekan float-right ml-2">
                                جستجوی سند
                            </button>
                        </Link>
                        <Link to="/units">
                            <button className="btn btn-warning p-1 m-0 yekan float-right">
                                تعریف ماشین آلات
                            </button>
                        </Link>
                    </div>
                    <Switch>
                        <Route exact path="/">
                            <SearchDocument />
                        </Route>
                        <Route exact path="/searchdoc">
                            <DocumentEntry />
                        </Route>
                        <Route exact path="/units">
                            <Units />
                        </Route>
                    </Switch>
                    <div className="footer bg-primary">
                        <span className="yekan-small float-right text-white">شرکت صنایع چینی تقدیس</span>
                        <span className="yekan-small float-left text-white">تهیه شده توسط واحد نرم افزار</span>
                    </div>
                </Router>
            </Wrapper>
        );
    }
}