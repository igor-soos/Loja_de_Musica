import styled from 'styled-components'
export const NavStyle = styled.section `

.nav{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 10%;
    background-image: linear-gradient(#d7f5fa,#4fe8ff);
    text-align: center;
    padding-right: 5%;
    padding-left: 1%;
    padding-top:1%;
    padding-bottom:1%;
    font-weight: 400;
}

a{
    text-decoration: none;
}

.link{
    color: #000291;
    text-transform: uppercase;
    transition: 0.4s ease-in-out;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-size: 1.6rem;
    justify-content: center;
    align-items: center;
}

.link:hover{
    color:rgb(0, 17, 255);
    transform: scale(1.1);
}

`