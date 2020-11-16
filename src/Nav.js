import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({BasketArr}) => {
    return(

        <div className='nav'>
            <Link to= ''>HOME</Link>
            <Link to= '/Bikes'>BIKES</Link>
            <Link to= '/Frames'>FRAMESETS</Link>
            <Link to= '/Wheels'>WHEELS</Link>
            <Link to= '/Basket'>BASKET<div className='basketTotal'>{BasketArr.length}</div></Link>
        </div>
    )

}

export default Nav