import styled from 'styled-components'

const Hamburger = styled.div`
    display: none;
    input
    {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;
        
        cursor: pointer;
        
        opacity: 0;
        z-index: 2;
        
        -webkit-touch-callout: none;
    }
    span
    {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        
        background: #cdcdcd;
        border-radius: 3px;
        
        z-index: 1;
        
        transform-origin: 4px 0px;
        
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                    opacity 0.55s ease;
    }

    span:first-child
    {
        transform-origin: 0% 0%;
    }

    span:nth-last-child(2)
    {
        transform-origin: 0% 100%;
    }

    input.checked ~ span
    {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: #232323;
    }

    input.checked ~ span:nth-last-child(3)
    {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }

    input.checked ~ span:nth-last-child(2)
    {
        transform: rotate(-45deg) translate(0, -1px);
    }
    input.checked ~ ul
    {
        transform: none;
    }

    ul 
    {
        position: absolute;
        width: 280px;
        margin: -100px 0 0 -50px;
        padding: 125px 0 80px 50px;
        
        background: #ededed;
        list-style-type: none;
        -webkit-font-smoothing: antialiased;
        
        transform-origin: 0% 0%;
        transform: translate(-100%, 0);
        
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
        display: flex;
        flex-direction: column;
        box-shadow: 1px 0 3px -2px rgba(0, 0, 0, 0.25);
        > a 
        {
            padding: 20px 10px;
            text-decoration: none;
            color: black;
        }
    }

    @media (max-width: 667px) {
        display: block;
        position: relative;
        left:30px;
        z-index: 1;    
        -webkit-user-select: none;
        user-select: none;
    }
`

export default Hamburger