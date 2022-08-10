//our Higher order component


//HOC is a function that takes component dynamically 
//returning a function within a component
//adding a extra property to it 

const HOC=(Component)=>{
    //creating sample object to pass to incoming components

    const sampleObject={
        name:"Vignesh",
        role:"Front end developer",
        company:"HCL"
    };

    return ()=><Component value={sampleObject}/>
};

export default HOC;