import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { RakenMenu, RakenContent } from './containers'
import { primaryTheme } from './blocks/themes/primaryTheme'

class App extends Component {
  constructor()
  {
    super()
    this.state = {isProfileMenuOpen: false}
    this.handleProfileMenuClicked = this.handleProfileMenuClicked.bind(this)
    this.handleProfileMenuClose = this.handleProfileMenuClose.bind(this)
  }

  handleProfileMenuClicked()
  {
    this.setState({
      isProfileMenuOpen: !this.state.isProfileMenuOpen
    })
  }

  handleProfileMenuClose()
  {
    this.setState({
      isProfileMenuOpen: false
    })
  }

  render() 
  {
    return (
      <ThemeProvider theme={primaryTheme}>
        <Router>
          <div>
            <RakenMenu isProfileMenuOpen={this.state.isProfileMenuOpen} handleProfileMenuClicked={this.handleProfileMenuClicked} handleProfileMenuClose={this.handleProfileMenuClose} />
            <RakenContent />
          </div>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App