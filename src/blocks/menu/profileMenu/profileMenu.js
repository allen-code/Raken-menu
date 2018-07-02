import styled from 'styled-components'

const ProfileMenu = styled.div`
    visibility: ${props => props.visible ? "visible": "hidden"};
    opacity: ${props => props.visible ? "1": "0"};;
    transition: visibility 0s, opacity 0.5s linear;
    position: absolute;
    top: 80px;
    right: 20px;
`

export default ProfileMenu