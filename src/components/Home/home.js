/**
 * Created by Counter on 7/1/2017.
 */
/**
 * Created by Counter on 7/1/2017.
 */
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/header'
import './home.css'
import {Link} from 'react-router-dom'
import * as actions from '../../actions/authActions'
import {connect} from 'react-redux'
// import {BrowserRouter as Router} from 'react-router-dom'

export class Home extends Component{
    constructor(props,context){

        super(props,context);
        if(!localStorage.getItem('key')){
            this.props.history.push('/')
        }



        this.openTaskone = this.openTaskone.bind(this);
        this.openTasktwo = this.openTasktwo.bind(this);

    }
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillReceiveProps(newProps){
        if(!newProps.isAuthenticated){
            this.props.history.push('/')
        }
    }

    openTaskone(){
        this.context.router.history.push("/task/one");
    }

    openTasktwo(){
        this.context.router.history.push("/task/taskRevised");
    }



    render(){
        return(
            <div>
                <Header logout={this.props.logout}/>
                <section id="banner">
                    <div className="inner">
                        <h2>WebShar</h2>
                        <p>WebShar works with clients to understand their market, customers and their team. We help clients design a software strategy to set them on the right course to reach their current goals along with foresight into the future.</p>
                        <ul className="actions">
                            <li><input onClick={this.openTaskone} type="button" value="Task One"/></li>
                            <li><input  onClick={this.openTasktwo} type="button" value="Task Revised"/></li>
                        </ul>
                    </div>
                </section>

                <section id="one" className="wrapper style1">
                    <div className="container">
                        <header className="major">
                            <h2>Webshar</h2>
                            <p>WebShar helps clients design and deliver operational plans, procedures and tools for running effective development teams<br /> that interface seamlessly with other organizations.<br /> We help you to collaborate with others in ways that were never before imaginable,<br /> which lets you break through boundaries to turn the impossible into the possible.<br />
                                WebShar's expert team is available to develop and implement software solutions<br /> that meet your needs and solve your most challenging<br /> business and organizational issues.<br /></p>
                        </header>
                    </div>
                </section>
                <footer id="footer">
                    <ul className="icons">
                        <li><a href="https://github.com/Abhi1326" className="icon fa-github"><span className="label">GitHub</span></a></li>
                        <li><a href=" https://gitlab.com/abhi2613" className="icon fa-gitlab"><span className="label">GitLab</span></a></li>
                        <li><a href=" https://www.linkedin.com/in/abhishek-jaimini" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                    </ul>
                    <ul className="menu">
                        <li><a href="">FAQ</a></li>
                        <li> <Link to="/task/profile">Profile</Link></li>
                        <li> <Link to="/task/one">Task One</Link></li>
                    </ul>
                    <span className="copyright">
					&copy; Copyright. All rights reserved
				</span>
                </footer>


            </div>

        )
    }
}
const mapStateToProps=(state)=>{


    return {
        isAuthenticated:state.auth.isAuthenticated
    }
}


export default connect(mapStateToProps,actions)(Home);
