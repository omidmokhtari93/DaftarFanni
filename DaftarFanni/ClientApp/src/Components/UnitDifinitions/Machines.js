import React, { Component } from 'react';
import Wrapper from '../../Shared/Wrapper';
import ReactNotification from 'react-notifications-component'
import notify from '../../Shared/Notification';
import http from 'axios';
import Loading from 'react-loading-bar'

export default class Machine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            machineName: '',
            machines: [],
            showLoading: false,
            editState: false,
            editMachineId: null,
            editMachineName: ''
        }
    }

    componentDidMount() {
        this.getMachineData()
    }

    getMachineData() {
        http.get('/api/GetMachines').then(response => {
            console.log(response.data)
            this.setState({ machines: response.data })
        })
    }

    saveData = () => {
        if (this.state.machineName === '') {
            notify('danger', 'خطا در مقادیر وارد شده')
        } else {
            this.setState({ showLoading: true })
            http.get('/api/MachineEntry', { params: { machineName: this.state.machineName } }).then(resp => {
                notify(resp.data.type, resp.data.message)
                this.getMachineData();
                this.setState({ machineName: '', showLoading: false })
            })
        }
    }

    editMachine = (id, name, element) => {
        console.log(element.target.setAttribute(
            "style", "background-color: lightgreen;"))
        this.setState({
            editState: true,
            editMachineName: name,
            editMachineId: id
        })
    }

    updateMachine = () => {
        http.get('/api/UpdateMachine', {
            params: {
                machineId: this.state.editMachineId,
                machineName: this.state.editMachineName
            }
        }).then(response => {
            notify(response.data.type, response.data.message);
            this.getMachineData();
            this.setState({ editState: false })
        })
    }

    renderRows = () => {
        return this.state.machines.map((machine, index) => <tr key={index}>
            <th>{index + 1}</th>
            <td>{machine.machineName}</td>
            <td style={{ width: '10%' }} className="text-primary cursor" onClick={(e) => this.editMachine(machine.id, machine.machineName, e)}>ویرایش</td>
        </tr>)
    }


    render() {
        return (
            <Wrapper>
                <Loading show={this.state.showLoading} color="red" />
                <ReactNotification />
                <div className="row yekan">
                    <div className="col-md-2">
                        &nbsp;
                        {this.state.editState ? <input className="btn btn-info btn-block" type="button" value="ویرایش" onClick={this.updateMachine} /> :
                            <input className="btn btn-success btn-block" type="button" value="ثبت" onClick={this.saveData} />}
                    </div>
                    <div className="col-md-10 text-right">
                        نام ماشین
                    <input className="form-control rtl" type="text"
                            value={this.state.editState
                                ? this.state.editMachineName
                                : this.state.machineName}
                            onChange={(e) => {
                                this.state.editState
                                    ? this.setState({ editMachineName: e.target.value })
                                    : this.setState({ machineName: e.target.value })
                            }} />
                    </div>
                </div>
                <hr />
                <table className="table table-sm rtl">
                    <thead>
                        <tr className="table-primary">
                            <th>ردیف</th>
                            <th>نام ماشین</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Wrapper>
        )
    }
}