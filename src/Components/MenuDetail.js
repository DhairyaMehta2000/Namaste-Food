//  Rendering out other details from Menu such as name, costForTwo etc

const MenuDetail = (props)=>{
    // console.log(props.data)
    return(
        <div className="flex items-center justify-center font-bold mt-3 mb-3" >
            <h1>
                 {props.data.name}
            </h1>
        </div>
    )
}
export default MenuDetail;