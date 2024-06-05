import React from 'react'
import thankyou from '/thankyou.svg'

const Thankyou = () => {
  return (
    <div className='thankyou'> 
        <img  className='last' src={thankyou} alt='thankyou' />
        {/* <div className='thanks'> */}
            <p className='thank'><b>Thank you!</b></p>
            <p className='confirm'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        {/* </div> */}
    </div>
  )
}

export default Thankyou;