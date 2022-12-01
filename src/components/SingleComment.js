import React from 'react'


export default function SingleComment(props) {
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img src={props.image} alt='profile' />
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    {props.dogname}
                </a>
                <div className='metadata'>
                    <span className='date'>
                        {props.date}
                    </span>
                </div>
                <div className='Text'>
                    {props.text}
                </div>
            </div>
        </div>
    )
}
