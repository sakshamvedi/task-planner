import {React , useEffect , useState} from 'react'
import "./Hero.css"
import {IoIosCheckmarkCircleOutline} from "react-icons/io"
import {RxCrossCircled} from "react-icons/rx"
function Hero() {
const [time, settime] = useState();
const [toggle, settoggle] = useState(true);
const [toggle2, settoggle2] = useState(true);
const [correct, setcorrect] = useState(true);
const [correct2, setcorrect2] = useState(true);
const [correct3, setcorrect3] = useState(true);
const [correct4, setcorrect4] = useState(true);
const [correct5, setcorrect5] = useState(true);
const [correct6, setcorrect6] = useState(true);
const [correct7, setcorrect7] = useState(true);
const [correct8, setcorrect8] = useState(true);
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
    <p className='tag'>{value === 160 ? <>Completed ❤️</> : <>In Progress </>}</p>
    <meter  min={0}  value  = {value} max = {160}></meter>
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
   <p style={{background : "white" , padding : "5px" , borderRadius : "9px"}}>Kdane Algorithm</p>
   
        </div>
        
            
{

    toggle ? <></> : <>
    <div className="questionbox">
    <div className="question">
    <button onClick={()=>{
    settoggle(!toggle);
}}>Close</button>
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


<div className="card2">
            <span>
   <h2>Data Structure</h2>
   <p>Array</p>
   </span>
   <h3 onClick={()=>{
    settoggle2(!toggle2)
   }}>Questions ❤️</h3>
   <p style={{background : "white" , padding : "5px" , borderRadius : "9px"}}>Sliding Window</p>
        </div>

        {

toggle2 ? <></> : <>
<div className="questionbox">
<div className="question">
<button onClick={()=>{
    settoggle2(!toggle2);
}}>Close</button>
<p>Sliding Window Algorithm </p>
<ol>
<li>{correct5 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
setcorrect5(!correct5)
setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
setcorrect5(!correct5)
setvalue(value-20)
}}/>}
<p> { correct5 ?   <>Learn and Study How Sliding Window Algortihm Works</> : <strike className = "strike">Learn and Study How Sliding Window Algortihm Works</strike> }</p>
</li>
<li>{correct6 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
setcorrect6(!correct6)
setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
setcorrect6(!correct6)
setvalue(value-20)
}}/>}
<p> { correct6 ?   <>Find Maximum in Sliding Window
</> : <strike className = "strike">Find Maximum in Sliding Window
</strike> }</p>
</li>
<li>{correct7 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
setcorrect7(!correct7)
setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
setcorrect7(!correct7)
setvalue(value-20)
}}/>}
<p> { correct7 ?   <>Minimum Window Subsequence</> : <strike className = "strike">Minimum Window Subsequence</strike> }</p>
</li>
<li>{correct8 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
setcorrect8(!correct8)
setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
setcorrect8(!correct8)
setvalue(value-20)
}}/>}
<p> { correct8 ?   <>Longest Substring without Repeating Characters
</> : <strike className = "strike">Longest Substring without Repeating Characters
</strike> }</p>
</li>

</ol>

</div>
</div>
</>
}

</div>
{
    value=== 160 ? <div className="congo-box">
    
    </div>
:<>

</>
}


    </>
  )
}

export default Hero