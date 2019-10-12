import React, { Component } from 'react';
import Wrapper from '../../Shared/Wrapper';
import Machine from './Machines';
import Part from './Parts';

export default class Units extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: true
        }
    }

    render() {
        return (
            <Wrapper>
                <div className="container">
                    <ul className="nav nav-tabs yekan mt-1" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" onClick={() => this.setState({ tab: true })}>
                                ماشین آلات
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" onClick={() => this.setState({ tab: false })}>
                                بخش ها
                            </a>
                        </li>
                    </ul>
                    <div className="card-body border-left border-right border-bottom">
                        {this.state.tab ? <Machine /> : <Part />}
                    </div>
                </div>
            </Wrapper>
        )
    }
}