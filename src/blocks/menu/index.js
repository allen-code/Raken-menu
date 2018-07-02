import styled from 'styled-components'
import "typeface-roboto"
import LinkWrapper from './linkWrapper'
import Title from './title'
import Profile from './profile'
import LinkItem from './linkItem/linkItem'
import MainWrapper from './main'
import ProfileMenu from './profileMenu/profileMenu'
import Hamburger from './hamburger'
import MobileNav from './mobileNav'

const Menu = styled.div`
    height: 76px;
    width: 100%;
    background: ${props => props.theme.MENU_BACKGROUND_COLOR};
    box-shadow: 0 8px 5px -5px ${props => props.theme.MENU_BACKGROUND_SHADOW};
    font-family: Roboto, sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`

Menu.LinkWrapper = LinkWrapper
Menu.Title = Title
Menu.Profile = Profile
Menu.LinkItem = LinkItem
Menu.MainWrapper = MainWrapper
Menu.ProfileMenu = ProfileMenu
Menu.Hamburger = Hamburger
Menu.MobileNav = MobileNav

export default Menu