import React, { useEffect, useState } from 'react'
import "./List.css"
import {toast} from "react-toastify"
import axios from "axios"

const List = ({url}) => {

  const [list,setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    console.log(response)
    if(response.data.success){
      setList(response.data.data.foods)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList()
  },[])

  const removeFood = async(foodId) =>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if(response.data.success){
      toast.success("Food removed successfully")
    }else{
      toast.error("Error")
    }
  }


  return (
    <div className='list add flex-col'>
      <p>All Foods list</p>
      <div className='list-table'>
        <div className='list-table-format title'>
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
        </div>
        {
          list.map((item)=>{
              return(
                <div key={item._id} className='list-table-format'>
                  <img src={`${url}/images/`+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>${item.price}</p>
                  <p onClick={()=>removeFood(item._id)}>Delete</p>
                </div>
              )
          })
        }
      </div>
    </div>
  )
}

export default List