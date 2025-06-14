import {useState} from 'react';
function Item({name,isBuy}){
    /*if(isBuy) return(<li><s>{name}</s>✅</li>);
    return (<li>{name}</li>);*/

    //return (<li>{isBuy?name+'✅':name}</li>)



    const [buy,setBuy]=useState(false);
    if(buy) 
        return(<li onClick={()=>{setBuy(!buy)}}><s>{name}</s>✅</li>);
    return (<li onClick={()=>{setBuy(!buy)}}>{name}</li>)
   
}
export default function Buylist(){
    const [value,setValue]= useState("");

    const ingred=["Banana","Milk","Egg","Onion","Bread"]

    const filterList = ingred.filter(it=>it.toLowerCase().includes(value.toLowerCase()));
    
    const itemlist=filterList.map(it=><Item name={it}/>)
    return (<><h4>Buying List</h4>
        Keyword: <input type ="text" value={value}
        onChange={e=>setValue(e.target.value)}
        />
    <ol>{itemlist}</ol></>);
}