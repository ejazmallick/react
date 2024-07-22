import React, {  useEffect , useState } from "react"
import { useLoaderData } from 'react-router-dom'

function Instagram() {
    const data= useLoaderData()

    return(
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Instagram followers: {data.followers}
    <img src={data.avatar_url} alt="Instagram picture" width={300} />
    </div>
    )

}

export default Instagram 

export const instagramInfoLoader = async () => {
    const response = await fetch('https://www.instagram.com/_.md_ejaz._/')
    return response.json()
}