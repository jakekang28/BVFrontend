import {useState, useEffect} from 'react'
import styles from '../styles/Cart.module.css'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate()
    const [wishlist, setWishList] = useState([])
    const handlePayment = () =>{
        navigate('/payment')
    }
    const handleDelete = async (id, e) =>{
        try{
            const res = await fetch(`http://${process.env.REACT_APP_PUBLIC_IP}:${process.env.REACT_APP_SERVER_PORT}/api/cart/delete/${id}`,{
                method : 'DELETE',
                headers : {
                    'Content-Type': 'application/json'
                }
            })
            alert('장바구니에서 물품이 삭제되었습니다.')
        }
        catch(err){
            console.log(err)
        }
    }
    const getCartItems = async () =>{
        if(wishlist == []){
            return (
                <h2>No items added to cart</h2>
            )
        }
        else{
            try{
                const res = await fetch(`http://${process.env.REACT_APP_PUBLIC_IP}:${process.env.REACT_APP_SERVER_PORT}/api/cart`, {
                    method : 'get',
                    headers : {"Content-Type" : 'application/json'}
                })
                const data = await res.json()
                console.log(data)
                setWishList(data)
            }
            catch(err){
                console.log(err)
            }
        }
    }
    useEffect(()=>{
        getCartItems()
    },[])
    return (
        <div>
            <table className = 'cart'>
                <thead>
                    <td>상품 이름</td>
                    <td>가격</td>
                    <td>예약 시작일</td>
                    <td>예약 종료일</td>
                    <td>삭제하기</td>
                </thead>
                    {wishlist.map(item => {
                             return (<tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.startDate}</td>
                                <td>{item.endDate}</td>
                                <td><button type='submit' onClick={(e)=>{handleDelete(item.idx, e)}}>삭제하기</button></td>
                                <td><button type='button' onClick ={handlePayment}>결제하기</button></td>
                            </tr>)
                    })}
            </table>
        </div>
    )
}

export default Cart