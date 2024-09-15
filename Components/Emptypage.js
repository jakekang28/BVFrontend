import {Link} from 'react-router-dom'

function Emptypage(){
    return (
    <div>
        <h1>404 Not Found</h1>
        <Link to = "/">Back</Link> 
    </div>   
    )
}
export default Emptypage;