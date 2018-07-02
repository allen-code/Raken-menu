import styled from 'styled-components'

const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.LINK_WRAPPER_PADDING},
    box-sizing: border-box;
    flex: 1;
    border-right: 1px solid rgba(0, 0, 0, 0.15);
    height: 100%;
    @media (max-width: 667px) {
        display: none;
    }
`

export default MainWrapper