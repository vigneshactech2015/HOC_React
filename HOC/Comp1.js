import forwardRef from "react";
//ref cannot be passed from parent to child as a prop hence to pass ref we use forwardRef

import withDimensions from "./withDimension"

function Comp1(props,forwardRefFromParent){

return(
<div ref={forwardRefFromParent}>
This Component width is {props.width}
This Component Height is {props.height}
</div>
)

}

export default withDimesions(forwardRef(Comp1))
