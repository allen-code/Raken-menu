import styled from 'styled-components'

const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding-right: ${props => props.theme.LINK_WRAPPER_PADDING};
`

export default LinkWrapper