
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import styled from 'styled-components'

import bvlogo from '../assets/bvlogo.jpeg'
import searchicon from '../assets/searchicon.png'
import carticon from '../assets/carticon.png'
import profile from '../assets/profile.png'
import addition from '../assets/addition.png'
    const Wrapper = styled.div`
        width : 1920px;
        height : 164px;
        display : flex;
    `
    const TitleContainer = styled.div`
        display : inline-block;
        width : 30%;
        height : 140px;
        margin : 40px 40px;
    `
    const SearchContainer = styled.div`
        display : inline-block;
        width : 40%;
        height : 140px;
        margin : 0 auto;
    `
    const ProfileContainer = styled.div`
        display : inline-block;
        width : 20%;
        height : 140px;
    `
    const Bvlogo = styled.button`
        width : 400px;
        height : 100px;
        background-image : url(${bvlogo});
        background-repeat : no-repeat;
        border-radius : 10px;
        border : 0px;
    `
    const SearchBar = styled.input`
        width : 90%;
        height : 50px;
        border : 3px solid #FF9100;
        border-radius : 20px;
        background-image : url(${searchicon});
        background-repeat : no-repeat;
        background-position : 97% center;
        padding : 2px 10px;
        
        `
    const AuthBtn = styled.button`
        margin-top : 0px;
        width : 140px;
        height : 40px;  
        margin : 10px 10px;
        font-size : 20px;
        background-color : ${props => props.bgColor}
    `
    const CartBtn = styled.button`
        margin : 5px 5px;
        width : 80px;
        height : 80px;
        border : 0px solid black;
        border-radius : 40px;
        background-image : url(${props => props.image});
        background-position : center;
        background-repeat : no-repeat;
    ` 
function Header(){
    const navigate = useNavigate()
    const onClickAdd = () =>{
        navigate('/add')
    }
    const onLogin = () =>{
        navigate('/users/login')
    }
    const onRegister = () => {
        navigate('/users/register')
    }
    const onPayment = () =>{
        navigate('/payment')
    }
    const onAddtoCart = (e) =>{
        navigate('/cart')
    }
    const onHome = (e) =>{
        navigate('/')
    }
    
    return (
        <>
            <Wrapper>
            <TitleContainer>
                <NavLink to ="/equipment">
                    <Bvlogo/>
                </NavLink>
            </TitleContainer>
            <SearchContainer>
                <SearchBar placeholder='내가 찾는 상품은?'/>
            </SearchContainer>
            <ProfileContainer>
                <div>
                    <AuthBtn onClick = {onLogin} bgColor = '#FFAB40'>로그인</AuthBtn>
                    <AuthBtn onClick = {onRegister} bgColor = '#FFAB40'>회원가입</AuthBtn>
                </div>
                <div style={{ margin : '0 20px'}}>
                    <CartBtn image = {profile}/>
                    <CartBtn onClick={onAddtoCart} image = {carticon}/>
                    <CartBtn onClick ={onClickAdd}image = {addition}/>
                </div>
            </ProfileContainer>
        </Wrapper>
        <Outlet/>
        </>
    )
    // return(
    // <div className = {styles.header}>
    //     <button><img src='../assets/baseball.png'/></button>
    //     <button type="button" className = {styles.ball_village} onClick = {onHome}/>
    //     <div className = {styles.auth}>
    //         <button onClick = {onLogin}>로그인</button>
    //         <button onClick = {onRegister}>회원가입</button>
    //     </div>
    //     <div className = {styles.add}>
    //         <button onClick = {onClickAdd} >새 장비 등록하기</button>
    //     </div>
    //     <div className = {styles.payment}>
    //         <button  onClick = {onAddtoCart}>
    //             <div className ="">
    //                 <span>장바구니</span>
    //             </div>
    //         </button>
    //     </div>
    // </div> 
    // )
}

export default Header;