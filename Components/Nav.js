import React from "react";
import { NavLink } from "react-router-dom";
import {Outlet} from 'react-router-dom'
import styled from 'styled-components'
import navtrailImg from '../assets/nav_rail.png'
import footballThumbnail from '../assets/football.png'
import basketballThumbnail from '../assets/basketball.png'
import baseballThumbnail from '../assets/baseball.png'
import workoutThumbnail from '../assets/workout.png'
const Container = styled.div`
    position : fixed;
    top : 164px;
    left : 95%;
    float : right;
    width : 72px;
    height : 1500px;
    overflow : hidden;
    margin : 0 auto;
    background-image: url(${navtrailImg})
  `
  const ButtonWrapper = styled.div`
    padding : 92px 0;
    height : 90%;
  `
  const Button = styled.button`
    width : 72px;
    height : 5%;
    overflow : hidden;
    margin : 2px auto;
    background-image : url(${props => props.image});
    background-size : 72px 65px;
    background : #FF9100
    transition: transform 80ms ease-in;
    border-radius: 5px;
    
  `


const Nav = () => {
  
  return (
    <>
      <Container>
        <ButtonWrapper>
          <NavLink to="/equipment/football">
            <Button image = {footballThumbnail}/>
          </NavLink>
          <NavLink to="/equipment/baseball">
            <Button image = {baseballThumbnail}/>
          </NavLink>
          <NavLink to = "/equipment/basketball">
            <Button image = {basketballThumbnail}/> 
          </NavLink>
          <NavLink to = "/equipment/workout">
            <Button image = {workoutThumbnail}/>
          </NavLink>
        </ButtonWrapper>
      </Container>
      <Outlet/>
    </>
    
  );
};

export default Nav;