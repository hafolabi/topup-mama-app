import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    const getUser =  () => {
      // try {
      //   const res = axios.get("https://reqres.in/api/users")
      //   console.log(res)
      //   setData(res.data)
      // } catch (err) { }

       axios
      .get("https://reqres.in/api/users")
      .then(response => {
        console.log(response.data.data);
        setData(response.data.data)
      })
      .catch(error => {
        console.log(error);
      });
  }
    
    getUser()
  }, [data])

  return (
    <div className="container p-4">
      <div className="row">
        {
          data?.map((dat) => (
            <div className="col-md-3" key={dat.id}>
              <PostCard user={dat} key={dat.id} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
