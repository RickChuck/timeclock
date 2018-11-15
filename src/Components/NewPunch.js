import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Homepage from './Homepage';
import('./style/NewPunch.css')

class NewPunch extends Component {
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
        this.handleNewPunch = this.handleNewPunch.bind(this)
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
    
    handleNewPunch() {
        const { punchType, dateId, dayOfWeek, hourNum, minuteNum, amPm } = this.state;
        axios.post(`/api/newPunch`, this.state)
            .then(res => {
                this.setState({ myPunches: res.props.data })
            })
    }

    render() {
        return (
            <div>
                <header>
                    <h4 className='newTitle'>New Punch</h4>
                </header>
                <div className='app-newPunch'>
                    <div className='overall'>
                        <div className='date'>
                            <h2>Date: <input type='date' onChange={this.getDate} value={this.state.dateId} /></h2>
                        </div>
                        <div className='day'>
                            <h2>Day: <select  onChange={this.getDayOfWeek} value={this.state.dayOfWeek}>
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
                                <option value=''></option>
                                <option value='am'>AM</option>
                                <option value='pm'>PM</option>
                            </select>

                        </div>
                        <div className='punchType'>
                            <h2>Punch Type: <select onChange={this.getPunchType} value={this.state.punchType}>
                                <option value=''></option>
                                <option value='in'>IN</option>
                                <option value='out'>OUT</option>
                            </select>
                            </h2>
                        </div>
                    </div>
                    <div className='save-cancel'>
                        <Link to='/' component={Homepage}><button onClick={() => this.handleNewPunch()} className='createBtn'>Create Punch</button></Link>
                        <Link to='/' component={Homepage}><button className='cancelBtn'>Cancel</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewPunch;