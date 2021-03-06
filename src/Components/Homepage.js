import React, {Component} from 'react';
import './style/Homepage.css'
import axios from 'axios';
import {Link} from 'react-router-dom';
// import NewPunch from './NewPunch';
// import EditPunch from './EditPunch';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           myPunches: []
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.refreshPage = this.refreshPage.bind(this)
    }

    componentDidMount() {
        axios.get('/api/punches')
        .then(res => {
           this.setState({myPunches: res.data})
        })
    }

    handleDelete(i) {
        axios.delete(`/api/deletePunch/${i}`)
        .then(res => {
            console.log(res.data)
            this.setState({myPunches: res.data})
        })
    }

    updatePunch = (myPunches) => {
        this.setState({myPunches: myPunches})
    }

    refreshPage() {
        window.location.reload();
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
                       this.state.myPunches.map((el, i) => {
                            return (
                                <div className='punchCard' key={i}>
                                    <h2 className='punchType'>{`${el.punch_type}`}</h2>
                                    <h3 className='date'>Date: {`${el.date_id}`}</h3>
                                    <h3 className='day'>Day: {`${el.day_of_week}`}</h3>
                                    <h3 className='time'>Time: {`${el.hour_num}`}:{`${el.minute_num}`} {`${el.am_pm}`}</h3>
                                    <Link to={`/editPunch/${el.punch_id}`}><button className='editBtn'>Edit</button></Link>
                                    <button className='deleteBtn' onClick={() => this.handleDelete(el.punch_id)}>DELETE</button>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className='newPunch'>
                        <Link to='/newPunch'><button className='newPunchBtn'>New Punch</button></Link>
                    </div>
            </body>
        </div>
      );
    }
}
export default Homepage;