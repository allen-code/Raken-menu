import styled from 'styled-components'

const LinkItem = styled.div`
    padding: ${props => props.theme.LINK_PADDING};
    display: flex;
    align-items: center;
    > a
    {
        text-decoration: none;
        color: black;
        &:hover
        {
            color: ${props => props.theme.HOVER_LINK_COLOR}
        }
        &.active
        {
            color: ${props => props.theme.ACTIVE_LINK_COLOR}
        }
    }
`

export default LinkItem