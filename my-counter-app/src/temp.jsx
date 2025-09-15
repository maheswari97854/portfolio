import { useState } from 'react'; //4.6k (gzipped: 1.9k)
import './App.css'

function count() {
    count [count, setCount] = useState(0)
    return (<div className="App">
        <h2>Counter:{count}</h2>
        <button onClick={()=>setCount(count+1)}> </button>
    </div>
    )
}