import {React , useEffect , useState} from 'react'
import "./Hero.css"
import {TiTickOutline} from "react-icons/ti";
import {AiOutlineCheck, AiOutlineSmile} from "react-icons/ai"
import {IoIosCheckmarkCircleOutline} from "react-icons/io"
import {RxCrossCircled} from "react-icons/rx"
function Hero() {
const [time, settime] = useState();
const [toggle, settoggle] = useState(true);
const [correct, setcorrect] = useState(true);
const [correct2, setcorrect2] = useState(true);
const [correct3, setcorrect3] = useState(true);
const [correct4, setcorrect4] = useState(true);
const [value, setvalue] = useState(0);

    useEffect(() => {
     mydate()
    
     
    }, [])

    function mydate(){
        const d = new Date();
        settime(d.getDate()+"/" + d.getMonth()+1 + "/" + d.getFullYear())
    }



  return (
    <>
<div className="upperbox">
    <h1> Happy Working Vidushi !</h1>
    <p>{time}</p>
    <p className='tag'>{value === 80 ? <>Completed ❤️</> : <>In Progress </>}</p>
    <meter  min={0}  value  = {value} max = {80}></meter>
</div>

<div className="itembox">
   
        <div className="card1">
            <span>
   <h2>Data Structure</h2>
   <p>Array</p>
   </span>
   <h3 onClick={()=>{
    settoggle(!toggle)
   }}>Questions ❤️</h3>
   <meter min={0}  value  = {value} max = {80} ></meter>
        </div>
        
            
{

    toggle ? <></> : <>
    <div className="questionbox">
    <div className="question">
  <p>Kdane Algorithm </p>
  <ol>
    <li>{correct ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
    setcorrect(!correct)
    setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
    setcorrect(!correct)
    setvalue(value-20)
}}/>}
   <p> { correct ?   <>Study and learn about how kdane algorithm works</> : <strike className = "strike">Study and learn about how kdane algorithm works</strike> }</p>
    </li>
    <li>{correct2 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
    setcorrect2(!correct2)
    setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
    setcorrect2(!correct2)
    setvalue(value-20)
}}/>}
   <p> { correct2 ?   <>Leetcode 53. Maximum Subarray
</> : <strike className = "strike">Leetcode 53. Maximum Subarray
</strike> }</p>
    </li>
    <li>{correct3 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
    setcorrect3(!correct3)
    setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
    setcorrect3(!correct3)
    setvalue(value-20)
}}/>}
   <p> { correct3 ?   <>GFG . Maximum Product Subarray <a href='https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1'>Solve </a></> : <strike className = "strike">GFG . Maximum Product Subarray <a href='https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1'>Solve </a></strike> }</p>
    </li>
    <li>{correct4 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
    setcorrect4(!correct4)
    setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
    setcorrect4(!correct4)
    setvalue(value-20)
}}/>}
   <p> { correct4 ?   <>Leetcode . 209. Minimum Size Subarray Sum
 </> : <strike className = "strike">Leetcode . 209. Minimum Size Subarray Sum
 </strike> }</p>
    </li>
   
  </ol>
</div>
</div>
    </>
}



</div>
{
    value=== 80 ? <div className="congo-box">
    
    </div>
:<>

</>
}


    </>
  )
}

export default Hero