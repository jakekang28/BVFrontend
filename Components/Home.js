import styled from 'styled-components'
import bvhome from '../assets/bvlogo2.png'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
const Wrapper = styled.div`
    margin : 0 auto;
    width : 50%;
    height : 80%;
    border : 0px solid black;
    text-align : center;
`
const Title = styled.h1`
    margin : 0 auto;
    font-size : 60px;
    color : #FF9100;
`
const Subtitle = styled.h2`
    margin : 0 auto;
    font-size : 35px;
`
const Logo = styled.div`
    margin : 0 auto;
    width : 400px;
    height : 350px;
    background-image : url(${bvhome});
    background-repeat : no-repeat;
`
const Span = styled.span`
    margin : 10px 10px;
    font-size : 20px;
    font-weight : bold;
    letter-spacing : 2px;
`
const AuthBtn =  styled.button`
    background-color : #FFAB40;
    width : 90%;
    margin : 10px auto;
    font-size : 25px;
    padding : 10px 10px;
    color : white;
    border : 1px solid #FFAB40;
    &:hover{
        box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
        cursor: pointer;
    }
`
const Input = styled.input`
        width : 90%;
        height : 10%;
        margin : 20px;
        background-color : #FFD180;
        padding : 15px 10px;
        border-radius : 5px;
    `
const Checkbox = styled.input.attrs({type : 'checkbox'})`
        zoom : 1.8;
        margin : 20px 20px;
    `

function Home(){

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [islend, setLend] = useState(false)

    const navigate = useNavigate()
    const checkHandler = (e) => {
        setLend(!islend)
    }
    const loginSubmit = async () => {
        if (id === '' || pw === '') {
            alert('아이디 또는 비밀번호를 입력해주시기 바랍니다');
            return
        } else {
            try {
                const res = await fetch(`http://${process.env.REACT_APP_PUBLIC_IP}:${process.env.REACT_APP_SERVER_PORT}/api/users/login`, {
                    method: 'POST',
                    body: JSON.stringify({userID: id, userPW: pw, lend : islend}),
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const data = await res.json();
                alert(data);
                if (res.status === 200) {
                    navigate('/equipment');
                } else {
                    setId('');
                    setPw('');
                    setLend(false)
                    return;
                }
            } catch(err) {
                console.log(err);
            }
        }
    }

    const moveSignUp = () => {
        navigate('/users/register');
    }
    



    return (
    <Wrapper>
        <Title>Ball Village</Title>
        <Subtitle>Sports in Everyday Life!</Subtitle>
        <Logo></Logo>
        <Span>귀찮은 사전 준비는 이제 그만.</Span><br></br>
        <Span>저렴한 가격으로 품질 좋은 스포츠 용품을 대여해 언제 어디서든 스포츠를 즐기세요!</Span>
        <Input type="text" value={id} placeholder = "아이디" onChange={(e) => setId(e.target.value)} required/>
        <Input type="password" value={pw} placeholder = "비밀번호" onChange={(e) => setPw(e.target.value)} required/>
        <label><Checkbox type="checkbox" checked = {islend} onChange = {e => checkHandler(e)}/><Span>장비 대여(공급)를 희망하시는 경우, 체크해주세요.</Span></label>
        <AuthBtn onClick ={loginSubmit} >로그인</AuthBtn>
        <AuthBtn onClick = {moveSignUp}>회원가입</AuthBtn>
    </Wrapper>
    
    
    
)

}

export default Home;