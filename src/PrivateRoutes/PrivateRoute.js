import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Navigate, Outlet, useParams } from 'react-router-dom'

export const PrivateRoute = () => {
    const [authorised, setauthorised] = useState(null)
    const {id}=useParams()

    useEffect(()=>{
        console.log(id)
        setauthorised(true)
    },[])
if(authorised===null){
return <Spinner/>
}else if(authorised===true){
return <Outlet/>
}else{
    <Navigate to="/" />
}

}
