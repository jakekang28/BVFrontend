import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useRef } from 'react'
import styles from '../styles/RegisterForm.module.css'

const DB_HOSTNAME = 'bvdb.cxcje3yvf9kh.ap-northeast-2.rds.amazonaws.com'
function AddEquip() {
    const onSubmit =  async (data, e) =>{
        const formData = new FormData()
        formData.append("files", data.picture[0])
        formData.append("name", data.name)
        formData.append("price",data.price)
        formData.append("type_sports",data.type_sports)
        formData.append("type",data.type)
        formData.append("summary",data.summary)
        const config = {
            headers: {
            'Content-Type': 'multipart/form-data',
                },
            };
            await axios.post(`http://${process.env.REACT_APP_PUBLIC_IP}:${process.env.REACT_APP_SERVER_PORT}/api/addequip`, formData, config)
            alert('등록되었습니다.')
    }
    const { register, handleSubmit, formState : { errors}, control} = useForm()
    const textarea = useRef();
    const handleResizeHeight = () =>{ 
        textarea.current.style.height = 'auto'
        textarea.current.style.height = textarea.current.scrollHeight + 'px';
    }
    // const Wrapper = styled.div`
    //     width : 80%;
    //     height : 1200px;
    //     margin : 0 auto;
    // `
    // const Title = styled.span`
    //     font-size : ${props => props.fs}
    // `
    // const RowContainer = styled.div`
    //     width : 100%;
    //     height : 15%;
    //     margin : 10px;
    //     border : 5px solid #EF6C00;
    //     padding : 5px 5px;
    // `
    // const Form = styled.form`
    //     background: #f7bf6f;
    //     display: flex;
    //     flex-direction: column;
    //     padding: 20px 50px;
    //     height: 100%;
    //     border-radius : 10px;
    //     input[type='text']{
    //         background: #eee;
    //         padding: 10px;
    //         margin: 8px 0;
    //         width: 65%;
    //         border: 0;
    //         outline: none;
    //         border-radius: 20px;
    //         box-shadow: inset 7px 2px 10px #babebc, inset -5px -5px 12px #fff;
    //      }

    // `
    // const Label = styled.label`
    //     font-size : 40px;
    //     color : white;
    //     margin : 20px;
    // `
    // const RadioButton = styled.input.attrs({
    //     type : "radio"
    // })
    // `
    //     vertical-align: middle;
    //     appearance: none;
    //     border: max(2px, 0.1em) solid gray;
    //     border-radius: 50%;
    //     width: 1.25em;
    //     height: 1.25em;
    //     &:checked{
    //         border: 0.4em solid tomato;
    //     }
    //     &:focus-visible{
    //         outline: max(2px, 0.1em) dotted tomato;
    //         outline-offset: max(2px, 0.1em);
    //     }
    //     &:hover{
    //         box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
    //         cursor: pointer;
    //     }
    //     &:hover + span{
    //         cursor: pointer;
    //     }
return (
            
        <div className = {styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} action = '../../server/app.js' method = "POST" encType = 'multipart/form-data'>
                <h1>새 장비 등록하기</h1>
                <label htmlFor = "type_sports">종목</label>
                <div className={styles.rowcontainer}>
                    <label><input type="radio"  name="football" value="football" {...register("type_sports",{required : "A type should be taken"})}/><span>축구</span></label> 
                    <label><input type="radio"  name="basketball" value="basketball" {...register("type_sports",{required : "A type should be taken"})}/><span>농구</span></label>
                    <label><input type="radio"  name="baseball" value="baseball" {...register("type_sports",{required : "A type should be taken"})}/><span>야구</span></label>
                </div>
                <label htmlFor = "name">장비 이름</label>
                <div className={styles.rowcontainer}>
                    <input id="name" type="text" name = "name" placeholder ="아디다스 코파 메시 에디션" {...register("name",{required : "Equipment name is required"})}></input>
                </div>
                <label htmlFor = "picture">장비 사진</label>
                <div className={styles.rowcontainer}>
                    <input id="picture" type="file" name="picture" {...register("picture",{required : "Model pic is required"})}></input>
                </div>
                <label htmlFor = "price">가격</label>
                <div className={styles.rowcontainer}>
                    <input id="price" type = "text" name="price" {...register("price",{required : "Price should be given"})}></input>
                </div>
                <label htmlFor = "type">장비 종류</label>
                <div className={styles.rowcontainer}>
                    <input id = "type" type="text" name="type" placeholder="축구공" {...register("type",{required : "Equipment type required"})}></input>
                </div>
                <label htmlFor = "summary">장비 상태 설명 주의점</label>
                <div className={styles.rowcontainer}>
                    <textarea cols='50' rows ='7' id = "summary" type="text" name="summary" placeholder="ex) 1년 정도 사용했고, 스터드가 닳아서 조금 미끄럽습니다." onChange = {handleResizeHeight}{...register("summary")}></textarea>
                </div>
                
                <button type="submit">등록하기</button>
            </form>
            </div>
)
}
export default AddEquip;