import HOC from './HOC';

//we get value as prop

const App=({value})=>{
    return(
        <div>
        <h1>This is {value.name}</h1>
        <h1>I work as a {value.role}</h1>
        <h1>I work for {value.company}</h1>
        </div>
    )
}

export default HOC(App);
//wrapping our component within our HOC.