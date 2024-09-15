import {useState} from 'react'


function Checkbox(){
    const [ischecked, setChecked] = useState(false)
    const checkHandler = (e) => {
        setChecked(!ischecked)
    }
    return <input type="checkbox" checked = {ischecked} onChange = {e => checkHandler(e)}></input>
}
    

export default Checkbox