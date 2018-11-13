import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Homepage from './Homepage';
import ('./style/NewPunch.css')

class NewPunch extends Component {
    render() {
        return (
            <div>
            <header>
            <h1 className='newTitle'>New Punch</h1>
            </header>
           <div className='app-newPunch'>
               <div className='date'>
                    <h2>Date: <input type='date' onChange={e => e.target.value} /></h2>
               </div>
               <div className='day'>
                   <h2>Day: <select onChange={e => e.target.value}>
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
                    <h2>Time: <div className='timeInputs'>
                        <h3>HR: <input type='number' min='1' max='12' placeholder='00'></input></h3>
                        <h3>Min: <input type='number' min='0' max='59' placeholder='00'></input></h3>
                        <select onChange={e => e.target.value}>
                            <option className='ampm' value='am'>AM</option>
                            <option className='ampm' value='pm'>PM</option>
                        </select>
                    </div>
                    </h2>
               </div>
               <div className='punchType'>
                    <h2>Punch Type: <select onChange={e => e.target.value}>
                        <option value='in'>IN</option>
                        <option value='out'>OUT</option>
                        </select>
                    </h2>
               </div>
               <div className='save-cancel'>
                    <button className='createBtn'>Create Punch</button>
                    <Link to='/' component={Homepage}><button className='cancelBtn'>Cancel</button></Link>
               </div>
           </div>
           </div>
        )
    }
}
export default NewPunch;