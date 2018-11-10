import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Homepage from './Homepage';
import ('./style/EditPunch.css')

class EditPunch extends Component {
    render() {
        return (
           <div className='app-editPunch'>
            <h1 className='editTitle'>Edit Punch</h1>
               <div className='date'>
                    <h2>Date: </h2>
                    <input type='date' onChange={e => e.target.value} />
               </div>
               <div className='day'>
                   <h2>Day:</h2>
                    <select onChange={e => e.target.value}>
                            <option value='monday'>Monday</option>
                            <option value='tuesday'>Tuesday</option>
                            <option value='wednesday'>Wednesday</option>
                            <option value='thursday'>Thursday</option>
                            <option value='Friday'>Friday</option>
                            <option value='saturday'>Saturday</option>
                            <option value='sunday'>Sunday</option>
                    </select>
               </div>
               <div className='time'>
                    <h2>Time:</h2>
                    <div className='timeInputs'>
                        <h3>HR:</h3>
                        <input></input>
                        <h3>Min:</h3>
                        <input></input>
                        <select onChange={e => e.target.value}>
                            <option value='am'>AM</option>
                            <option value='pm'>PM</option>
                        </select>
                    </div>
               </div>
               <div className='punchType'>
                    <h2>Punch Type:</h2>
                    <select onChange={e => e.target.value}>
                        <option value='in'>IN</option>
                        <option value='out'>OUT</option>
                    </select>
               </div>
               <div className='save-cancel'>
                    <button>Create Punch</button>
                    <button className='cancelButton'><Link to='/' component={Homepage}>Cancel</Link></button>
               </div>
           </div>
        )
    }
}
export default EditPunch;