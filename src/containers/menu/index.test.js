import RakenMenu from './index'
import { MemoryRouter as Router, withRouter } from 'react-router-dom'


describe('Hamburger menu component', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <RakenMenu isProfileMenuOpen={false} handleProfileMenuClicked={() => { }} />
        )
        expect(wrapper).toMatchSnapshot()
    })

    it('nav links are rendered correctly', () => {
        const wrapper = mount(
            <Router><RakenMenu isProfileMenuOpen={false} handleProfileMenuClicked={() => { }} /></Router>
        )
        expect(wrapper.find("NavLink")).toHaveLength(8)
    })
})