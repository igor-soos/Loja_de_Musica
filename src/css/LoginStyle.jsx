import styled from 'styled-components'
export const LoginStyle = styled.section `

.container{
    margin-top:3rem;
}
.container_login{

    min-height:80vh;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background:transparent;
}

.login{
    width: 35%;
    background: transparent;
}

.login_form{
    width:100%
}

.titulo_login{
    display: block;
    font-size: 40px;
    line-height: 1.3;
    text-align: center;
    font-family: "Fredoka", sans-serif;
    font-optical-sizing: auto;
}

.w_input{
    width: 100%;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    border-bottom:2px solid midnightblue;
}

.input_form{
    font-size:1rem;
    color: #555;
    line-height: 1.2;
    display:block;
    width:100%;
    height: 30px;
    padding: 0px;
    border:none;
}

.login_btn{
    width:100%;
    display:flex;
    justify-content: center;
    border-radius: 30px;
}

.login_form_btn{
    font-size:1rem;
    color:#fff;
    background: #113f7a;
    width: 40%;
    height: 50px;
    border-radius:15px;
    transition: all 0.4s;
}

.login_form_btn:hover{
    background: #2929c4;

}

.utils{
    margin-top:20px;
    margin-bottom:20px;
    font-family: "Fredoka", sans-serif;
    font-optical-sizing: auto;
}

.text1{
    color: #000;
}

.text2{
    color: #170080;
}

`