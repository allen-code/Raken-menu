import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../blocks/card'
import { AppConfig } from '../../constant/config'

class MenuCard extends Component {

    constructor(props) {
        super(props)
        this.setWrapperRef = this.setWrapperRef.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.handleCardItemClicked = this.handleCardItemClicked.bind(this)
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    setWrapperRef(node) {
        this.wrapperRef = node
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.closeProfileMenuCard()
        }
    }

    handleCardItemClicked() {
        this.props.closeProfileMenuCard()
    }


    render() {
        return (
            <div ref={this.setWrapperRef}>
                <Card>
                    {AppConfig.APP_DEFAULT_PROFILE_MENU_ITEMS.map((item, index) => {
                        return <Card.CardItem key={index} onClick={this.handleCardItemClicked}>
                            <div>
                                <Link to={item.link}>
                                    {item.name}
                                    {item.notification_number ? <Card.CardItemNotification>
                                        {item.notification_number}
                                    </Card.CardItemNotification> : ''}
                                </Link>
                            </div>
                        </Card.CardItem>
                    })}
                </Card>
            </div>
        )
    }
}

export default MenuCard