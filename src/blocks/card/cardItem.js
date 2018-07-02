import styled from 'styled-components'

const CardItem = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px; 
    position: relative;
    > div {
        padding: ${props => props.theme.CARD_ITEM_PADDING};
        width: 100%;
        height: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin: 0 25px;
        box-sizing: border-box;
        > a {
            text-decoration: none;
            color: black;
        }
    }
    &:first-of-type {
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }
    &:last-of-type {
        > div {
            width: 100%;
            height: 100%;
            margin: 0 25px;
            box-sizing: border-box;
            border-bottom: none;
        }
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
    }
    &:hover {
        background: #D8D8D8
    }
`

export default CardItem