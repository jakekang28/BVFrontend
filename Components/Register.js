import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import backbtn from '../assets/backicon.png'
const Wrapper = styled.div`
        width : 80%;
        background-color : #FFAB40;
        border-radius : 10px;
        margin : 0 auto;
    ` 
    const Container = styled.div`
        width : 80%;
        margin : 0 auto;
        display : flex;
        flex-direction : column;
    `
    const Input = styled.input`
        width : 30%;
        height : 25%;
        margin : 20px 20px;
        font-size : 30px;
    `
    const Checkbox = styled.input.attrs({type : 'checkbox'})`
        zoom : 1.8;
        margin : 20px 20px;
    `
    const Span = styled.span`
        font-size : 30px;
    `
    const SubmitBtn = styled.button`
        width : 30%;
        margin : 0 auto;
        font-size : 30px;
        display : inline-block;
    `
    const BackBtn = styled.button`
        width : 50px;
        height : 50px;
        background-image : url(${backbtn});
        background-repeat : no-repeat;
        border : 0px;
        border-radius : 25px;
    `
const Register = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [islend, setLend] = useState(false)
    const navigate = useNavigate();
    const checkHandler = (e) => {
        setLend(!islend)
    }
    const backBtn = () =>{
        navigate('/users/login')
    }
    const submitBtn = async () => {
        if (id === '' || pw === '') {
            alert("아이디 또는 비밀번호를 입력해주시기 바랍니다");
            return;
        } else {
            try {
                const res = await fetch(`http://${process.env.REACT_APP_PUBLIC_IP}:${process.env.REACT_APP_SERVER_PORT}/api/users/register`, {
                    method: 'POST',
                    body: JSON.stringify({userId: id, userPw: pw, lend : islend}),
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                });
                const data = await res.json();
                console.log(data)
                alert(data);
                if (res.status === 200) {
                    navigate('/users/login');
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

    
    return (
        <Wrapper>
            <Container>
                    <h1>회원가입</h1>
                    <Input type="text" value={id} placeholder = "아이디" onChange={(e) => setId(e.target.value)}/>
                    <Input type="password" value={pw} placeholder = "비밀번호" onChange={(e) => setPw(e.target.value)}/>
                    <label><Checkbox type="checkbox" checked = {islend} onChange = {e => checkHandler(e)}/><Span>장비 대여(공급)를 희망하시는 경우, 체크해주세요.</Span></label>
                    <SubmitBtn type='submit' onClick={submitBtn}>등록하기</SubmitBtn>
                    <BackBtn type='text' onClick={backBtn}></BackBtn> 
            </Container>
        </Wrapper>
            
        

    );
};



export default Register