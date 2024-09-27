import styled from 'styled-components'
export const MusicasStyle = styled.section `

h1{
    font-size: 3rem;
    font-weight: 600;
}

p, Link, a{
    font-size: 1.3rem;
    font-weight: 800;
    text-decoration:none;
}

.background{
    display: flex;
    flex-direction:row;
    justify-content: space-evenly;
    margin-top: 10%;
    margin-bottom: 10%
}
.container{
    display: grid;
    width: 15rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #2e2ca0;
    border: solid #1100ff 3px;
    border-radius: 15px;
    overflow:auto;
    padding: 10px 50px 20px 50px;
    background-color: #96969655;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.404);
}

img{
    height:15rem;
    width:15rem;
    align-self:center;
    border-radius:5%;
}


`