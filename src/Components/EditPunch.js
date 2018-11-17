import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Homepage from './Homepage';
import axios from 'axios';
import('./style/EditPunch.css')

class EditPunch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            punchType: '',
            dateId: '',
            dayOfWeek: '',
            hourNum: '',
            minuteNum: '',
            amPm: ''
        }
        this.getPunchType = this.getPunchType.bind(this);
        this.getDate = this.getDate.bind(this);
        this.getDayOfWeek = this.getDayOfWeek.bind(this);
        this.getHourNum = this.getHourNum.bind(this);
        this.getMinuteNum = this.getMinuteNum.bind(this);
        this.getAmPm = this.getAmPm.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    async componentDidMount() {
        let id = this.props.match.id
        await axios.get(`/api/getEditPunch/${id}`)
        .then(res => {
            console.log(res.data)
            let punch = res.data[0]
            this.setState({
                punchType: punch.punchType,
                dateId: punch.punchType,
                dayOfWeek: punch.dayOfWeek,
                hourNum: punch.hourNum,
                minuteNum: punch.minuteNum,
                amPm: punch.amPm
            })
        })
    }

    handleEdit = (id) => {
        const {punchType, dateId, dayOfWeek, hourNum, minuteNum, amPm} = this.state;
        axios.put(`/api/editpunch/${id}`, {punchType, dateId, dayOfWeek, hourNum, minuteNum, amPm})
        .then(res => {
            // console.log(res.data)
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
                <div className='overall2'>
                    <div className="card">
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
                            <h2 className='timeTitle'>Time: </h2>
                            <h3 className='hour'>HR: <input type='number' min='1' max='12' placeholder='00' onChange={this.getHourNum} value={this.state.hourNum}></input></h3>
                            <h3 className='minute'>Min: <input type='number' min='0' max='59' placeholder='00' onChange={this.getMinuteNum} value={this.state.minuteNum}></input></h3>
                            <select className='ampm' onChange={this.getAmPm} value={this.state.amPm}>
                                <option value='am/pm' disabled>-AM/PM-</option>
                                <option value='empty option'></option>
                                <option value='am'>AM</option>
                                <option value='pm'>PM</option>
                            </select>

                        </div>
                        <div className='punchType2'>
                            <h2>Punch Type: <select onChange={this.getPunchType} value={this.state.punchType}>
                                <option value='in/out' disabled>-IN/OUT-</option>
                                <option value='empty option'></option>
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
            </div>
        )
    }
}
export default EditPunch;