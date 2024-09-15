import styled from 'styled-components'
import bvhome from '../assets/bvlogo2.png'
import { useNavigate } from 'react-router-dom'
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
    height : 550px;
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


function Home(){
    const navigate = useNavigate()
    const onLogin = () =>{
        navigate('/users/login')
    }
    const onRegister = () =>{
        navigate('/users/register')
    }
    return (
    <Wrapper>
        <Title>Ball Village</Title>
        <Subtitle>Sports in Everyday Life!</Subtitle>
        <Logo></Logo>
        <Span>귀찮은 사전 준비는 이제 그만.</Span><br></br>
        <Span>저렴한 가격으로 품질 좋은 스포츠 용품을 대여해 언제 어디서든 스포츠를 즐기세요!</Span>
        <AuthBtn onClick ={onLogin} >로그인</AuthBtn>
        <AuthBtn onClick = {onRegister}>회원가입</AuthBtn>
    </Wrapper>
    
    
    
)

}

export default Home;