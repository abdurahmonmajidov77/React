import { useRef, useState } from 'react';
import './App.css';

function App() {
  const Sel = useRef();
  const Int1 = useRef();
  const Int2 = useRef();
  const [Res, setRes] = useState(0);
  const Go = () => {
    if(Sel.current.value == "+"){
      const plyus = Number(Int1.current.value) + Number(Int2.current.value)
      setRes(plyus)
    }
    if(Sel.current.value == "-"){
      const plyus = Number(Int1.current.value) - Number(Int2.current.value)
      setRes(plyus)
    }
    if(Sel.current.value == "÷"){
      const plyus = Number(Int1.current.value) / Number(Int2.current.value)
      setRes(plyus)
    }
    if(Sel.current.value == "*"){
      const plyus = Number(Int1.current.value) * Number(Int2.current.value)
      setRes(plyus)
    }
  }
  const [Result, setResult] = useState(0)
  const numberArr = []
  const [Equal, setEqual] = useState(0)
    const num = (e) =>{
      var number = ''
      var path = ''
      numberArr.push(e.target.value)
      for(var i of numberArr) {
        if ((i == "+" || i == "-") || (i == "*" || i == "/")) {
          path = i
        }
        number = number + i
      }
      const fNumbers = number.slice(0, number.indexOf(path));
      const sNumbers = number.slice(number.indexOf(path) + 1, 99);
      window.localStorage.setItem('path', path)
      window.localStorage.setItem('fNumbers', fNumbers)
      window.localStorage.setItem('sNumbers', sNumbers)
    }
    const Go1 = () =>{
      const path = window.localStorage.getItem('path')
      const fNumbers = window.localStorage.getItem('fNumbers')
      const sNumbers = window.localStorage.getItem('sNumbers')
      var pull = ''
      for(var el of numberArr){
        pull = pull + el
        console.log(pull);
        setEqual(pull)
      }
      setResult(fNumbers)
      setResult(path)
      setResult(sNumbers)
      if(path == "+"){
        setResult(Number(fNumbers) + Number(sNumbers))
        numberArr = []
      }
      if(path == "-"){
        setResult(Number(fNumbers) - Number(sNumbers))
        numberArr = []
      }
      if(path == "/"){
        setResult(Number(fNumbers) / Number(sNumbers))
        numberArr = []
      }
      if(path == "*"){
        setResult(Number(fNumbers) * Number(sNumbers))
        numberArr = []
      }
    }

  return (
    <>
    <div className='con'>
      <div className="Calculator">
        <h2 className='Title'>Calculator</h2>
        <span className='Int in'>{Res}</span>
        <input ref={Int1} className='Int' type="text"/>
        <select ref={Sel}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="÷">÷</option>
          <option value="*">*</option>
        </select>
        <input ref={Int2} className='Int' type="text"/>
        <button onClick={Go}>go</button>
      </div>
      <div className="Calculator">
        <h2 className='Title'>Calculator</h2>
        <span className='Int in'>{Equal}</span>
        <h3 className='Int in'>{Result}</h3>
        <div className='br'>
        <div className='br1'>
        <div>
        <button onClick={num} value="1">1</button>
        <button onClick={num} value="2">2</button>
        <button onClick={num} value="3">3</button>
        </div>
        <div>
        <button onClick={num} value="4">4</button>
        <button onClick={num} value="5">5</button>
        <button onClick={num} value="6">6</button>
        </div>
        <div>
        <button onClick={num} value="7">7</button>
        <button onClick={num} value="8">8</button>
        <button onClick={num} value="9">9</button>
        </div>
        <button onClick={num} value="0">0</button>
        </div>
        <div>
        <div className='br1'>
        <button onClick={num} value="+">+</button>
        <button onClick={num} value="-">-</button>
        <button onClick={num} value="/">÷</button>
        <button onClick={num} value="*">*</button>
        </div>
        </div>
        </div>
        <button className='btnCr' onClick={Go1}>=</button>
        {/* <button className='btnC' onClick={Go1}>Clear</button> */}
      </div>
    </div>
    </>
  );
}

export default App;
