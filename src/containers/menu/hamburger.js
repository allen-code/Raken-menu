import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Menu from '../../blocks/menu'
import { AppConfig } from '../../constant/config'

class Hamburger extends Component {

    constructor()
    {
        super()
        this.state = {hamburgerOpen: false}
        this.handleLinkClicked = this.handleLinkClicked.bind(this)
    }

    handleLinkClicked()
    {
        this.setState({
            hamburgerOpen: !this.state.hamburgerOpen
        })
    }

    render() {
        return (
            <Menu.Hamburger>
                <input 
                    type="checkbox" 
                    onClick={this.handleLinkClicked}
                    className={this.state.hamburgerOpen ? 'checked': ''}
                 />
                <span></span>
                <span></span>
                <span></span>
                <ul>
                    {AppConfig.APP_MENU_ITEMS.map((item, index) =>
                    {
                        return <NavLink key={index} onClick={this.handleLinkClicked} to={item.link}>{item.name}</NavLink>
                    })}
                </ul>
            </Menu.Hamburger>
        )
    }
}

export default Hamburger