//HOC--> takes component applies certain logic and then return that component with additional logic
//A higher-order component is a function that takes in a component and returns a new component

import {useRef,useState,useEffect} from "react";

const withDimensions = (Component) =>{

//it returns functional component
return function WithDimensions(props){
  const[width,setWidth] = useState(null)
  const[height,setHeight] = useState(null)
  
  const compRef = useRef()
  
  useEffect(()=>{
    if(compRef.current){
      setWidth(compRef.current.offsetWidth)
      setHeight(compRef.current.offsetHeight)
    }
  },[compRef]);

  return <Component ref={compRef} height={height} width={width} {...props}/> 
  }


}

export default withDimensions
