import {useRouteError} from 'react-router-dom'

const Error = ()=>{
    const err = useRouteError()
    console.log(err)
return (
    <div>
        Oops Something went wrong
        Error Message - {err.statusText} and ErrorCode is- {err.status}
    </div>
    
)
}
export default Error