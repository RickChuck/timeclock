import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NewPunch from './NewPunch';
import EditPunch from './EditPunch';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           myPunches: [] 
        }
    }

    componentDidMount() {
        axios.get('/api/punches')
        .then(res => {
           this.setState({myPunches: res.data})
        })
    }

    render() {
        console.log(this.state.myPunches)
      return (
        <div className="App">
            <header>
                <h1 className='title'>My Punches</h1>
            </header>
            <body>
                    <div className='allPunches'>
                    {
                       this.state.myPunches.map((el) => {
                            return (
                                <div className='Edit-Delete'>
                                    <h2 id='punch'>{`${el.punch_type}`}</h2>
                                    <h3 id='date'>Date:{`${el.date_id}`}</h3>
                                    <h3>{`${el.day_of_week}`}</h3>
                                    <button><Link to='/editPunch' component={EditPunch}>EDIT</Link></button>
                                    <button>DELETE</button>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className='newPunch'>
                        <button className='newPunchButton'><Link to='/newPunch' component={NewPunch}>New Punch</Link></button>
                    </div>
            </body>
        </div>
      );
    }
}
export default Homepage;