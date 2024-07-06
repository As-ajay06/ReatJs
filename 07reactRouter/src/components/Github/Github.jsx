import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect (() => {
        fetch(`https://api.github.com/users/hiteshchoudhary`)
        .then((response) => response.json())
        .then(data => {
            console.log(data.followers)
            setData(data)
        })
    }, [])
  return (
    <>
    <div>Github : {data.followers}</div>
    <img src={data.avatar_url} width={300} />
    </>
  )
}

export default Github