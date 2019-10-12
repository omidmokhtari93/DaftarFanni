import React, { Component } from 'react';
import Wrapper from '../../Shared/Wrapper';

export default class Machine extends Component {
    render() {
        return (
            <Wrapper>
                <div className="row yekan">
                    <div className="col-md-2">
                        &nbsp;
                    <button className="btn btn-primary btn-block">ثبت</button>
                    </div>
                    <div className="col-md-10 text-right">
                        نام ماشین
                    <input className="form-control rtl" />
                    </div>
                </div>
                <hr />
                <table className="table table-sm">
                    <thead>
                        <tr className="table-primary">
                            <th>#</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </Wrapper>
        )
    }
}