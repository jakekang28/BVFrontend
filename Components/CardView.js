import Card from 'react-bootstrap/Card'

import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Calendar from 'react-calendar';
import '../styles/ReactCalendar.css';
import moment from 'moment'
import styled from 'styled-components';

const Container = styled.div`
    margin : 40px 40px;
    width : 1800px;
    height : 2000px;
    border : 1px solid; 
  `
  const ImgCalContainer = styled.div`
    display : flex;
    width : 100%;
    height : 550px;
    padding : 40px 30px;
  `
  const CalContainer = styled.div`

  `
  const ProductImg = styled.img`
    display : inline-block;
    margin : 30px;
    width : 40%;
    height : 550px;
    padding : 10px 10px;
  `
  const BtnContainer = styled.div`
    display : flex;
    width : 100%;
  
  `
  const AddBtn = styled.button`
    display : inline-block;
    width : 45%;
    height : 70px;
    border : 0px solid; 
    border-radius : 4px;
    margin : 10px 2px;
    color : white;
    font-size : 20px;
    background-color : ${props => props.bgColor} 
  `
  const DetailContainer = styled.div`
    width : 100%;
    height : 30%;
    margin : 20px 10px;
  `
  const Title = styled.span`
    display : block;
    font-size : ${props => props.fs};
  `



function CardView(){
  const [show, setShow] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const setCalRange = (e) =>{
    const startDate = moment(e[0]).format('YYYY/MM/DD')
    const endDate = moment(e[1]).format('YYYY/MM/DD')
    setStartDate(startDate)
    setEndDate(endDate)
  }
  const {id} = useParams()
  
  const getDetail = async () =>{
      const detail = await axios.get(`http://${process.env.REACT_APP_PUBLIC_IP}:${process.env.REACT_APP_SERVER_PORT}/api/detail/${id}`).then(response => response.data).catch((e)=>console.log('실패'))
      setShow(detail)
  }
  useEffect(() =>{
      getDetail()
  },[])

    const navigate = useNavigate()
    const onClickBack = () =>{
        navigate(`/equipment/${show[0].type_sports}`)
    }
    const onAddtoCart = async () =>{
      const res = await fetch(`http://${process.env.REACT_APP_PUBLIC_IP}:${process.env.REACT_APP_SERVER_PORT}/api/cart`, {
                      method: 'POST',
                      body: JSON.stringify({name: show[0].name, price : show[0].price, type : show[0].type_sports, startDate : startDate, endDate : endDate}),
                      headers: {
                          'Content-Type': 'application/json'
                      }
      })
      const data = await res.json()
      if(startDate==undefined || endDate == undefined){
        alert('예약 시작 날짜와 종료 날짜를 다시 선택해주세요.')
      }
      else if(res.status === 200){
          if(window.confirm('예약하신 날짜 : ' + startDate + '~' + endDate + '이 맞으신가요?')){
            alert('장바구니에 물품이 담겼습니다.')
          }
          else{
            alert('예약 날짜를 다시 선택해주세요.')
          }
      }
      else{
          alert('예기치 못한 오류가 발생했습니다.')
      }
  }



  
    return show && (
      <>
        <Container>
            <ImgCalContainer>
              <ProductImg src={`/uploads/${show[0].imgsrc}`}></ProductImg>
              <CalContainer>
                <Calendar onChange = {setCalRange} 
                          prev2Label={null}
                          next2Label={null}
                          selectRange={true}
                          />
                <BtnContainer>
                  <AddBtn bgColor = '#F57C00'onClick={onClickBack}>돌아가기</AddBtn>
                  <AddBtn bgColor = '#FFB74D'onClick ={onAddtoCart}>장바구니에 담기</AddBtn>
                </BtnContainer>
              </CalContainer>
            </ImgCalContainer>
            <DetailContainer>
              <Title fs = '50px'>{show[0].name} </Title>
              <Title fs= '40px'>{show[0].price} 원</Title>
              <Title fs = '30px'>{show[0].summary}</Title>
            </DetailContainer>
        </Container>
          
      </>
      
    )
    // return show  && <Card className = {styles.card}>
      // <Card.Img variant="top" src={`/uploads/${show[0].imgsrc}`} />
    //   <Card.Body>
    //     <div>
    //     <Card.Title>{show[0].name} <br></br>{show[0].price} 원/ 1주</Card.Title>
    //     <Calendar onChange = {setCalRange} 
    //               prev2Label={null}
    //               next2Label={null}
    //               selectRange={true}
    //                />
    //     </div>
        
    //     <Card.Text>  
    //       {show[0].summary}
    //     </Card.Text>
        
    //     <button variant="primary" onClick = {onClick}>Back</button>
    //     <button variant ="primary" onClick ={onAddtoCart}>Add to Cart</button>
    //   </Card.Body>
    // </Card>
}
export default CardView