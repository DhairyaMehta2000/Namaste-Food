const Shimmer = ()=>{

    return(
<>
<div className="bg-gray-200 p-4 animate-pulse shadow-md rounded-md h-72">
      {/* Shimmer image /}
      <div className="h-40 bg-gray-300 rounded-md mb-4"></div>
      {/ Shimmer content */}
      <div className="h-6 bg-gray-300 w-3/4 rounded-md mb-2"></div>
      <div className="h-4 bg-gray-300 w-1/2 rounded-md"></div>
    </div>

        </>
    )
}
export default Shimmer;