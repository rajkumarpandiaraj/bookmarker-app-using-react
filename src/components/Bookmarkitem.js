import React from 'react'

function Bookmarkitem(props) {
    const {urlName, handleVisit, handleDelete} = props;
    return (
        <div>
            <li className='items'>
            <span>{urlName}</span>
            <button onClick={handleVisit}>Visit</button>
            <button onClick={handleDelete} className="delete" >Delete</button>
            </li>
        </div>
    )
}

export default Bookmarkitem
