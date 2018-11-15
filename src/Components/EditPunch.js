import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Homepage from './Homepage';
import axios from 'axios';
import('./style/EditPunch.css')

class EditPunch extends Component {
    constructor() {
        super();
        this.state = {
            punchType: '',
            dateId: '',
            dayOfWeek: '',
            hourNum: '',
            minuteNum: '',
            amPm: ''
        }
    }
    componentDidMount(id) {
        axios.get(`/api/getEditPunch/${id}`)
        .then(res => {
           this.setState({punchType: res.data})
        })
    }

    handleEdit(id) {
        axios.put(`/api/editpunch/${id}`)
        .then(res => {
            this.props.updatePunch(res.data)
        })
    }

    getPunchType = (e) => {
        this.setState({ punchType: e.target.value })
    }
    getDate = (e) => {
        this.setState({ dateId: e.target.value })
    }
    getDayOfWeek = (e) => {
        this.setState({ dayOfWeek: e.target.value })
    }
    getHourNum = (e) => {
        this.setState({ hourNum: e.target.value })
    }
    getMinuteNum = (e) => {
        this.setState({ minuteNum: e.target.value })
    }
    getAmPm = (e) => {
        this.setState({ amPm: e.target.value })
    }

    render() {
        return (
            <div className='app-editPunch'>
                <div className='titleDiv'>
                    <h1 className='editTitle'>Edit Punch</h1>
                </div>
                <div className='overall'>
                        <div className='date'>
                            <h2>Date: <input type='date' onChange={this.getDate} value={this.state.dateId} /></h2>
                        </div>
                        <div className='day'>
                            <h2>Day: <select onChange={this.getDayOfWeek} value={this.state.dayOfWeek}>
                                <option value='monday'>Monday</option>
                                <option value='tuesday'>Tuesday</option>
                                <option value='wednesday'>Wednesday</option>
                                <option value='thursday'>Thursday</option>
                                <option value='Friday'>Friday</option>
                                <option value='saturday'>Saturday</option>
                                <option value='sunday'>Sunday</option>
                            </select>
                            </h2>
                        </div>
                        <div className='time'>
                            <h2>Time: </h2>
                            <h3 className='hour'>HR: <input type='number' min='1' max='12' placeholder='00' onChange={this.getHourNum} value={this.state.hourNum}></input></h3>
                            <h3 className='minute'>Min: <input type='number' min='0' max='59' placeholder='00' onChange={this.getMinuteNum} value={this.state.minuteNum}></input></h3>
                            <select className='ampm' onChange={this.getAmPm} value={this.state.amPm}>
                                <option>-AM/PM-</option>
                                <option value='am'>AM</option>
                                <option value='pm'>PM</option>
                            </select>

                        </div>
                        <div className='punchType'>
                            <h2>Punch Type: <select onChange={this.getPunchType} value={this.state.punchType}>
                                <option disabled selected>IN/OUT</option>
                                <option value='in'>IN</option>
                                <option value='out'>OUT</option>
                            </select>
                            </h2>
                        </div>
                        <div className='save-cancel'>
                            <Link to='/' component={Homepage}><button className='createBtn' onClick={() => this.handleEdit()}>Create Punch</button></Link>
                            <Link to='/' component={Homepage}><button className='cancelBtn'>Cancel</button></Link>
                        </div>
                    </div>
                </div>
        )
    }
}
export default EditPunch;