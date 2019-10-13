import React, { Component } from 'react';
import Wrapper from '../../Shared/Wrapper';
import ReactNotification from 'react-notifications-component'
import notify from '../../Shared/Notification';
import http from 'axios';

export default class Part extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Machines: [],
            Parts: [],
            machineId: '-1',
            partName: '',
        }
    }

    componentDidMount() {
        http.get('/api/GetMachines').then(response => {
            this.setState({ Machines: response.data })
        })
    }

    filterParts = (e) => {
        let selectedVal = e.target.options[e.target.selectedIndex].value
        console.log(selectedVal)
        this.setState({ machineId: selectedVal });
        console.log(this.state)
        http.get('/api/GetParts', { params: { id: this.state.machineId } }).then(response => {
            console.log(response.data)
            //this.setState({ Parts: response.data })
        })
    }

    saveData = () => {
        if (this.state.partName === '' || this.state.machineId == '-1') {
            notify('danger', 'خطا در اطلاعات وارد شده')
        } else {
            console.log(this.state)
            http.get('/api/SavePart', {
                params: {
                    partName: this.state.partName,
                    machineId: this.state.machineId
                }
            }).then(response => {
                notify(response.data.type, response.data.message)
                this.setState({ partName: '' })
            })
        }
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
                        <input className="form-control rtl" value={this.state.partName}
                            onChange={(e) => this.setState({ partName: e.target.value })} />
                    </div>
                    <div className="col-md-5 text-right">
                        نام ماشین
                        <select onChange={(e) => this.filterParts(e)} className="form-control rtl" >
                            <option value="-1">انتخاب کنید</option>
                            {this.state.Machines.map((machine, index) =>
                                <option key={index} value={machine.id}>{machine.machineName}</option>)
                            }
                        </select>
                    </div>
                </div>
                <hr />
                <table className="table table-sm rtl">
                    <thead>
                        <tr className="table-primary">
                            <th>ردیف</th>
                            <th>نام بخش</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Parts.map((part, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{part.partName}</td>
                                <td>ویرایش</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Wrapper>
        )
    }
}
