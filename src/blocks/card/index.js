import CardItemNotification from './cardItemNotification'
import CardItem from './cardItem'
import styled from 'styled-components'
import "typeface-roboto"

const Card = styled.div`
    background: white;
    box-shadow: 0 0 30px #ccc;
    border-radius: ${props => props.theme.CARD_BORDER_RADIUS}
    &:after,
    &:before {
        content: '';
        display: block;
        position: absolute;
        bottom: 100%;
        width: 0;
        height: 0;
    }
    &:before {
        right: 19px;
        border: 11px solid transparent;
        border-bottom-color: #ddd;
    }
    &:after {
        right: 20px;
        border: 10px solid transparent;
        border-bottom-color: #fff;
    }
`

Card.CardItem = CardItem
Card.CardItemNotification = CardItemNotification

export default Card