import React from 'react'
import './List.css'

const list = ({state}) => {
    if(state === 4){
        state = 3;
    }
    const description = ["YOUR INFO","SELECT PLAN","ADD-ONS","SUMMARY"]
  return (
    <>
        {description.map((step, index) => (
            <div className='list-container'key={index}>
                <div className={`index ${state == index ? 'selected' : ""}`}>{index + 1}</div>
                <div className='info'>
                    <p className='gray'>STEP {index + 1} </p>
                    <div>{step}</div>
                </div>
            </div>
        ))}
        
        
        {/* <div className='list-container'>
            <div className='index'>2</div>
            <div className='info'>
                <p className='gray'>STEP 2 </p>
                <div>SELECT PLAN</div>
            </div>
        </div>
        
        <div className='list-container'>
            <div className='index'>3</div>
            <div className='info'>
                <p className='gray'>STEP 3 </p>
                <div>ADD-ONS  </div>
            </div>
        </div>
        
        <div className='list-container'>
            <div className='index'>4</div>
            <div className='info'>
                <p className='gray'>STEP 4 </p>
                <div>SUMMARY</div>
            </div>
        </div> */}
        
    </>
  )
}

export default list;