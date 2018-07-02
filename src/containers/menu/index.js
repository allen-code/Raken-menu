import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import Hamburger from './hamburger'
import MenuCard from './menuCard'
import Menu from '../../blocks/menu'
import { AppConfig } from '../../constant/config'
import placeholder from '../../assets/user-placeholder.png'

class RakenMenu extends Component {
    constructor(props) {
        super(props)
        this.openProfileMenu = this.openProfileMenu.bind(this)
        this.closeProfileMenuCard = this.closeProfileMenuCard.bind(this)
    }
    openProfileMenu() {
        this.props.handleProfileMenuClicked(this.props.isProfileMenuOpen)
    }
    closeProfileMenuCard()
    {
        this.props.handleProfileMenuClose()
    }
    render() {
        return (
            <Menu>
                <Hamburger />
                <Menu.MainWrapper>
                    <Menu.Title>
                        {AppConfig.APP_NAME}
                    </Menu.Title>
                    <Menu.LinkWrapper>
                        {AppConfig.APP_MENU_ITEMS.map((item, index) => {
                            return <Menu.LinkItem key={index}>
                                <NavLink to={item.link} activeClassName="active">{item.name}</NavLink>
                            </Menu.LinkItem>
                        })}
                    </Menu.LinkWrapper>
                </Menu.MainWrapper>
                <Menu.Profile>
                    <a onClick={() => this.openProfileMenu()}><img src={placeholder} /></a>
                    <Menu.ProfileMenu visible={this.props.isProfileMenuOpen}>
                        <MenuCard closeProfileMenuCard={this.closeProfileMenuCard} />
                    </Menu.ProfileMenu>
                </Menu.Profile>
            </Menu>
        )
    }
}

export default RakenMenu