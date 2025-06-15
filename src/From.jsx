import {useRef} from 'react';

export default function From(){
    const inputRef = useRef(null);
    function handleClick(){
        inputRef.current.focus();
        alert(inputRef.current.value);
    }
    return (<>
    <input ref={inputRef}/>
    <button onClick={()=>alert(inputRef.current.value)}>Focus the input</button>
    </>);
}
