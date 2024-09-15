import styles from '../styles/Search.module.css'
import { useState, useRef } from 'react'
function Search(){
    const [isAutoSearch, setIsAutoSearch] = useState(false)
    const [searchKeyword, setSearchKeyword] = useState("")
    const [autoSearchKeyword, setAutoSearchKeyword] = useState("")
    const [focusIndex, setFocusIndex] = useState(-1)
    const focusRef = useRef(null)
    const scrollRef = useRef(null)
    return (
        <div className={styles.container}>
            <input type="text" 
            placeholder="내가 찾는 상품은?" 
            value = {isAutoSearch ? autoSearchKeyword : searchKeyword}
        
            />
        </div>
    )
}
export default Search