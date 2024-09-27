import styled from 'styled-components'
export const HomeStyle = styled.section `

.background{
    display: flex;
    flex-direction:column;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    overflow:auto;
    margin-top:7rem;
}

.caixa_texto{
    display: flex;
    flex-direction:column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding:4rem;
    border-radius: 15px;
    margin-top:0.5rem;
    margin-bottom:5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.404);
}

h1{
    font-size:3rem;
    font-family: "Pacifico", cursive;
    font-optical-sizing: auto;
    text-transform: uppercase;
}

p{
    font-size:1.5rem;
    font-family: "Fredoka", sans-serif;
    font-optical-sizing: auto;
}

.login_button{
    background-color: blue;
    border-radius: 15px;
    padding:1rem;
    margin-top:1.5rem;
}

a{
    color: #ffffff;
    text-decoration:none;
    font-family: "Pacifico", cursive;
    font-size:1rem;
}

.login_button:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
}

`