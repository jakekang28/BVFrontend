import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bvlogo from '../assets/bvlogo.jpeg'

const Wrapper  = styled.div`
        display : flex;
        width : 50%;
        height : 600px;
        margin : 10% auto;

    `
    const Container = styled.div`
        display : flex;
        flex-direction : column;
        width : 50%;
        height : 600px;
        border : 2px solid black;
        border-radius: 20px;
        background-color : ${props => props.backColor};
        opacity : 0.7;
        text-align : center;
    `
    const RowSpan = styled.span`
        font-size : ${props=>props.fs};
    `
    const Input = styled.input`
        width : 90%;
        height : 5%;
        margin : 20px;
        background-color : #CED4EA;
    `
    const Button = styled.button`
        margin: 0 auto;
        width : 80%;
        border-radius : 20px;
        border : 1px solid #FF9100;
        background-color : #FF9100;
        color : #FFFFFF;
        font-size : 12px;
        font-weight : bold;
        padding : 12px 45px;
        letter-spacing : 1px;
        transition : transform 80ms ease-in;
    
    `



const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [islend, setLend] = useState(false)
    const navigate = useNavigate();
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
                    navigate('/');
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
            <Container backColor = "#FFD180">
                <RowSpan fs='40px'>로그인</RowSpan>
                <Input type="text" value={id} placeholder = "아이디" onChange={(e) => setId(e.target.value)} required/>
                <Input type="password" value={pw} placeholder = "비밀번호" onChange={(e) => setPw(e.target.value)} required/>
                <Button type='submit' onClick={loginSubmit}>로그인</Button>
            </Container>
            <Container backColor = "#FF6D00">
                <RowSpan fs='40px'>회원가입</RowSpan>
                <br></br>
                <div style={{height : '21%', fontSize : '30px',fontWeight : 'bold', color : 'white', margin : '0 auto'}}>볼빌리지에 오신 것을 환영합니다!</div>
                <Button type='submit' onClick={moveSignUp}>회원가입</Button>
            </Container>      
        </Wrapper>
        


    )

    // return (
    //     <div className = {styles.wrapper}>
    //         <div className ={styles.container}>
    //             <div className = {styles.form_container}>
    //                 <h1>로그인</h1>
    //                 <input type="text" value={id} placeholder = "아이디" onChange={(e) => setId(e.target.value)} required/>
    //                 <input type="password" value={pw} placeholder = "비밀번호" onChange={(e) => setPw(e.target.value)} required/>
    //                 <label><input type="checkbox" checked = {islend} onChange = {e => checkHandler(e)}/><span>장비 대여(공급)자이신가요?</span></label>
    //                 <div>
    //                     <button className={styles.auth_button} type='submit' onClick={loginSubmit}>로그인</button>
    //                     <button className={styles.auth_button} onClick={moveSignUP}>회원가입</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
};

export default Login;