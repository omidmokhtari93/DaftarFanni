import React, { Component } from 'react';
import Wrapper from '../../Shared/Wrapper';
import ReactNotification from 'react-notifications-component'
import notify from '../../Shared/Notification';

export default class Part extends Component {
    constructor(props) {
        super(props);
        this.state = {
            machine: null,
            part: null,
            formStatus: false
        }
    }

    saveData = () => {
        notify('danger', 'خطا در اطلاعات وارد شده')
    }

    render() {
        return (
            <Wrapper>
                <ReactNotification />
                <div className="row yekan">
                    <div className="col-md-2">
                        &nbsp;
                        <button onClick={this.saveData} className="btn btn-primary btn-block">ثبت</button>
                    </div>
                    <div className="col-md-5 text-right">
                        نام قسمت
                        <input className="form-control rtl" />
                    </div>
                    <div className="col-md-5 text-right">
                        نام ماشین
                        <select className="form-control rtl" >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
                <hr />
                <table className="table table-sm rtl">
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


    // notify(message, type) {
    //     store.addNotification({
    //         title: "",
    //         message: message,
    //         type: type,
    //         insert: "top",
    //         container: "top-left",
    //         animationIn: ["animated", "fadeIn"],
    //         animationOut: ["animated", "fadeOut"],
    //         dismiss: {
    //             duration: 2000,
    //             onScreen: true
    //         }
    //     })
    // }
}
