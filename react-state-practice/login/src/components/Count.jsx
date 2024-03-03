import React, { useState } from 'react'

function Count() {
    const [count , setCount] = useState(34);
    const [list, setList] = useState([])
    function addToList(){
        if(list.includes(count)){
            alert("bu element list'de var")
        }
        else{
            setList([...list, count])
        }
    }
    function sortList(){
        setList([...list.sort((a,b) => a - b)])
    }
  return (
    <div>
        <button onClick={() => setCount(count - 1)}>decrease</button>
        <button onClick={addToList}>{count}</button>
        <button onClick={() => setCount(count + 1)}>increase</button>
        <button onClick={sortList}>sort</button>
        <ul>
            {list.map(item => <li>{item}</li>)}            
        </ul>
    </div>
  )
}

export default Count