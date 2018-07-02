import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

describe('App Root component', () =>
{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('initial state is false', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    const wrapper = shallow(<App />)
    const initalState = wrapper.state().isProfileMenuOpen
    expect(initalState).toEqual(false)
  })

  it('state change to true after button clicked', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    const wrapper = shallow(<App />)
    wrapper.instance().handleProfileMenuClicked()
    expect(wrapper.state().isProfileMenuOpen).toEqual(true)
  })
})

