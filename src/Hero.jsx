import {React , useEffect , useState} from 'react'
import "./Hero.css"
import {IoIosCheckmarkCircleOutline} from "react-icons/io"
import {RxCrossCircled} from "react-icons/rx"
function Hero() {
const [time, settime] = useState();
const [toggle, settoggle] = useState(true);
const [toggle2, settoggle2] = useState(true);
const [toggle3, settoggle3] = useState(true);
const [toggle4, settoggle4] = useState(true);
const [correct, setcorrect] = useState(true);
const [correct2, setcorrect2] = useState(true);
const [correct3, setcorrect3] = useState(true);
const [correct4, setcorrect4] = useState(true);
const [correct5, setcorrect5] = useState(true);
const [correct6, setcorrect6] = useState(true);
const [correct7, setcorrect7] = useState(true);
const [correct8, setcorrect8] = useState(true);
const [correct9, setcorrect9] = useState(true);
const [correct10, setcorrect10] = useState(true);
const [correct11, setcorrect11] = useState(true);
const [correct12, setcorrect12] = useState(true);
const [correct13, setcorrect13] = useState(true);
const [correct14, setcorrect14] = useState(true);
const [correct15, setcorrect15] = useState(true);
const [correct16, setcorrect16] = useState(true);
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
    <p className='tag'>{value === 240 ? <>Completed ❤️</> : <>In Progress </>}</p>
    <meter  min={0}  value  = {value} max = {240}></meter>
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


<div className="card3">
            <span>
   <h2>Data Structure</h2>
   <p>Array III</p>
   </span>
   <h3 onClick={()=>{
    settoggle3(!toggle3)
   }}>Questions ❤️</h3>
   <p style={{background : "white" , padding : "5px" , borderRadius : "9px"}}>Merge Intervals</p>
        </div>
        {

toggle3 ? <></> : <>
<div className="questionbox">
<div className="question">
<button onClick={()=>{
    settoggle3(!toggle3);
}}>Close</button>
<p>Learn about Merge Intervals</p>
<ol>
<li>{correct9 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
setcorrect9(!correct9)
setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
setcorrect9(!correct9)
setvalue(value-20)
}}/>}
<p> { correct9 ?   <>Learn and Study How Merge Intervals Works</> : <strike className = "strike">Learn and Study How Sliding Window Algortihm Works</strike> }</p>
</li>
<li>{correct10 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
setcorrect10(!correct10)
setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
setcorrect10(!correct10)
setvalue(value-20)
}}/>}
<p> { correct10 ?   <> Merge overlapping Intervals <a href = "https://www.geeksforgeeks.org/merging-intervals/">Link</a>
</> : <strike className = "strike"> Merge overlapping Intervals <a href = "https://www.geeksforgeeks.org/merging-intervals/">Link</a> 
</strike> }</p>
</li>
<li>{correct11 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
setcorrect11(!correct11)
setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
setcorrect11(!correct11)
setvalue(value-20)
}}/>}
<p> { correct11 ?   <>Leetcode 511. Insert Intervals</> : <strike className = "strike">Leetcode 57. Insert Intervals</strike> }</p>
</li>
<li>{correct12 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
setcorrect12(!correct12)
setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
setcorrect12(!correct12)
setvalue(value-20)
}}/>}
<p> { correct12 ?   <>Leetcode 986 Intervals List Interaction 
</> : <strike className = "strike">Leetcode 986 Intervals List Interaction 
</strike> }</p>
</li>

</ol>

</div>
</div>
</>
}



<div className="card4">
            <span>
   <h2>Data Structure</h2>
   <p>Algo+ </p>
   </span>
   <h3 onClick={()=>{
    settoggle3(!toggle3)
   }}>Questions ❤️</h3>
   <p style={{background : "white" , padding : "5px" , borderRadius : "9px"}}>Fast and Slow Pointers</p>
        </div>
        {

toggle3 ? <></> : <>
<div className="questionbox">
<div className="question">
<button onClick={()=>{
    settoggle3(!toggle3);
}}>Close</button>
<p>Learn about Fast and Slow Pointers</p>
<ol>
<li>{correct9 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
setcorrect9(!correct9)
setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
setcorrect9(!correct9)
setvalue(value-20)
}}/>}
<p> { correct9 ?   <>Learn and Study How Fast and slow pointer Works</> : <strike className = "strike">Learn and Study How Fast and slow pointer Works</strike> }</p>
</li>
<li>{correct10 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
setcorrect10(!correct10)
setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
setcorrect10(!correct10)
setvalue(value-20)
}}/>}
<p> { correct10 ?   <> Leetcode 202 . Happy Numbers 
</> : <strike className = "strike"> Leetcode 202 . Happy Numbers  
</strike> }</p>
</li>
<li>{correct11 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
setcorrect11(!correct11)
setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
setcorrect11(!correct11)
setvalue(value-20)
}}/>}
<p> { correct11 ?   <>Leetcode 141. Linked List Cycle </> : <strike className = "strike">Leetcode 141. Linked List Cycle </strike> }</p>
</li>
<li>{correct12 ?<  IoIosCheckmarkCircleOutline size={30} color = {"green"}   onClick = {()=>{
setcorrect12(!correct12)
setvalue(value+20);
}} /> : <RxCrossCircled size={30} color = {"red"}  onClick = {()=>{
setcorrect12(!correct12)
setvalue(value-20)
}}/>}
<p> { correct12 ?   <>Middle of the Linked List 
</> : <strike className = "strike">Middle of the Linked List 
</strike> }</p>
</li>

</ol>

</div>
</div>
</>
}



</div>
{
    value=== 240 ? <div className="congo-box">
    
    </div>
:<>

</>
}


    </>
  )
}

export default Hero