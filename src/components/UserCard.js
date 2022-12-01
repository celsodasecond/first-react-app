import React from 'react'

export default function UserCard(props) {
    // console.log(props)
  return (
    <div className='ui card'>
        <div className='content'>
            <div className='header'>{props.children.props.dogname}</div>
            <div className='description'>{props.children}</div>
        </div>
        <div className='ui bottom button'>
            <i className='add icon'></i>
            Add Friend
        </div>
    </div>
  )
}
