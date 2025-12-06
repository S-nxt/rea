import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {
    let [countValue, setCount ]=useState(0)


    const counterStore = useSelector((store)=>store)
    const count= counterStore.count

    const dispatch = useDispatch()
  return (
    <div className='text-4xl flex justify-center items=text-lg-center h-[70vh] flex-column'>
        count: {count}
        <div>
            <button className='light_btn'  onClick={()=>{
                dispatch({type:"INCREASE"})
            }}>increase count</button>

            <button className='dark_btn'  onClick={()=>{
                dispatch({type:"DECREASE"})
            }}>Decrease count</button>

            <button className='light_btn'  onClick={()=>{
                dispatch({type:"RESET"})
            }}>Reset count</button>
            <div>
                <input type="text" className='outline px-4 py-2 border-3' />
                <button>Set Count</button>
            </div>

        </div>
    </div>
  )
}

export default ReduxCounter