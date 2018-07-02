import React from 'react'
import {Route} from 'react-router-dom'
import {Dashboard, Projects, Team, Company, Help, Login, MyProfile, MyProjects, Tasks, Notifications} from '../../pages'

const Content = () => {
    return (
        <div>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/company" component={Company} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/myprofile" component={MyProfile} />
            <Route exact path="/myprojects" component={MyProjects} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/notifications" component={Notifications} />
        </div>
    );
};

export default Content