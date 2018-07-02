import styled from 'styled-components'

const Profile = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;
    > a {
        cursor: pointer;
        width: 100%;
        display: flex;
        justify-content: center;
        > img {
            width: ${props => props.theme.PROFILE_WIDTH_AND_HEIGHT};
            height: ${props => props.theme.PROFILE_WIDTH_AND_HEIGHT};
        }
    }
`

export default Profile