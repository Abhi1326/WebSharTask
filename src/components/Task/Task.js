/**
 * Created by Counter on 6/29/2017.
 */
import React ,{Component} from 'react'
import Profile from './profile/profile'
import Header from '../Header/header'
import {connect} from 'react-redux'
import * as actions from '../../actions/authActions'

export class Task extends Component {
    constructor(props){
        super(props);
        if(!localStorage.getItem('key')){
            this.props.history.push('/')
        }

    }
    componentWillReceiveProps(newProps){
        console.log(newProps,'ppppp');
        if(!newProps.isAuthenticated){
            this.props.history.push('/')
        }
    }
    render(){

        return(
            <div>
                <Header logout={this.props.logout}/>
                {(this.props.location.pathname==="/task")?<div>
                < h2 style={{textAlign:'center'}}><u>Tasks</u></h2>
                    <div>
                    <Profile/>
                        </div>


                    </div>:null
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{


    return {
        isAuthenticated:state.auth.isAuthenticated
    }
}


export default connect(mapStateToProps,actions)(Task);
