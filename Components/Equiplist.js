import {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

    const Wrapper = styled.div`
        width : 1800px;
        height : 1500px;
    `
    const Container = styled.button`
        width : 420px;
        height : 480px;
        margin : 10px 10px;
        background-color : #FFD180;
        border : 0px;
        border-radius : 10px;
    `
    const Thumbnail = styled.img.attrs({alt : '제품이미지'})`
        display : flex;
        margin : 5px 5px;
        width : 400px;
        height : 410px;
    `
    const Name = styled.span`
        display : flex;
        width : 450px;
        height : 30px;
        font-size : 25px;
    `
    const Price = styled.span`
        display : flex;    
        width : 450px;
        height : 20px;
        font-size : 15px;
    
    `

function Equiplist(){
    const {sports} = useParams()
    const [loading,setLoading] = useState(true)
    const [equiplist, setEquiplist] = useState([])
    const getEquip = async () =>{
        const equip = await axios.get(`http://${process.env.REACT_APP_PUBLIC_IP}:${process.env.REACT_APP_SERVER_PORT}/api/equiplist`)
        setEquiplist(equip.data)
        setLoading(false)
    }
    useEffect(()=>{
        getEquip()
    },[])
            return (
                <Wrapper>
                    {equiplist && equiplist.map((equip) =>{
                        if(sports == undefined){
                        return (
                            <NavLink to = {`/detail/${equip.idx}`}>
                                <Container>
                                    <Thumbnail src = {`http://${process.env.REACT_APP_PUBLIC_IP}:${process.env.REACT_APP_SERVER_PORT}/${equip.imgsrc}`}/>
                                    <Name>{equip.name}</Name>
                                    <Price>제시 가격 :  {equip.price} 원</Price>
                                </Container>
                            </NavLink>   
                        )
                        }   
                        else{
                            return ((equip.type_sports === sports) && 
                        <NavLink to = {`/detail/${equip.idx}`}>
                            <Container>
                                <Thumbnail src = {`http://${process.env.REACT_APP_PUBLIC_IP}:${process.env.REACT_APP_SERVER_PORT}/${equip.imgsrc}`}/>
                                <Name>{equip.name}</Name>
                                <Price>제시 가격 :  {equip.price} 원</Price>
                            </Container>
                        </NavLink> )
                        }
                    })}
                </Wrapper>


            )
            // return (
            //     <div className = {styles.equips}>
            //             {equiplist && equiplist.map((equip) =>{
            //                 return (
            //                 <div className = {styles.cardgrid}>
            //                     <h3 className = {styles.name}>
            //                         <Link to = {`/detail/${equip.idx}`}>{equip.name}</Link>
            //                     </h3>
            //                     <img src = {`/uploads/${equip.imgsrc}`} className = {styles.equip_img}></img>
            //                     <h4>
            //                         <span>제시 가격 :  {equip.price} 원 /1주</span>
            //                     </h4>
            //                 </div>)
            //             })}
            //     </div> 
            //         )
}
    
export default Equiplist;