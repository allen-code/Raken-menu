import styled from 'styled-components'

const Card = styled.div`
    border-radius: 50%;
    behavior: url(PIE.htc);
    width: 20px;
    height: 20px;
    margin-left: 5px;
    background: ${props => props.theme.NOTIFICATION_BACKGROUND};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 12px Arial, sans-serif;
    float: right;
`

export default Card