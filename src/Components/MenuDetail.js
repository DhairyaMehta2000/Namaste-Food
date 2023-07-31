//  Rendering out other details from Menu such as name, costForTwo etc

const MenuDetail = (props)=>{
    // console.log(props.data)
    return(
        <div>
            <h1>
                 {props.data.name}
            </h1>
        </div>
    )
}
export default MenuDetail;