import React, {useState, useEffect , useCallback , useMemo, useRef} from 'react'
import Child from './child';
import CustomHook from './custom-hook/custom-hook';
export default function HooksPage() {
    const preNumber = useRef(0);
    const [number , setNumber] = useState(1);
    useEffect(()=>{
        console.log("useEfffect")
    },[]);
    // ComponentDidMount ben class -- tham so thu 2 la array rong
    useEffect(()=>{
        console.log("useEffect2")
    },[number])
    // ComponentDidUpate -- tham so thu 2 co gia tri tu state
    useEffect(()=>{
        let interval = setInterval(() => {
            // console.log("Hi")
        }, 100);
        return () =>{
            clearInterval(interval)
            //tuong duong ComponentWillUnMount ben class
        };
    },[])
    const showNumber = () =>{
        console.log("showNumber")
    }
    const showNumberCallBack = useCallback(showNumber,[]);
    const numberUp = () =>{
        let i=0;
        while(i<1000) i++;
        console.log(i);
        return i;
    }
    const numberUpMemo = useMemo(()=>numberUp(),[]);
    return (
        <div>
            <h3>Hook</h3>
            <h1>Number : {number}</h1>
            <h1>Pre-Number: {preNumber.current}</h1>
            <button className='btn btn-success' onClick={()=>{
                setNumber(number+1);
                preNumber.current = number;
            }}>Click</button>

            <h1>NumberUp: {numberUpMemo}</h1>
            <Child showNumber ={showNumberCallBack} />

            <CustomHook/>
        </div>
    )
}
