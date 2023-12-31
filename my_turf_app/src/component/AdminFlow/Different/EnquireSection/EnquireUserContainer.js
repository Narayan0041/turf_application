import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { count } from '../../../../store/action';

export default function EnquireUserContainer({srNo, UserName ,mobileNumber ,email ,enquire ,address}) {
  const dispatch =useDispatch();
  const [showReplyContainer ,setShowReplyContainer] =useState(false);
  let handleReply=()=>{
   setShowReplyContainer(!showReplyContainer)
  }
  
  let Count= useSelector((state)=>state.UserRegister.Count);
  const handleClick =()=>{
    Count++
    dispatch(count(Count));
  }
  return (
    <>
    <div className='EnquireUserContainer' onClick={handleClick}>
     <div>Sr.No.{srNo}</div>
     <p>Name: {UserName}</p>
     <p>Mobile: {mobileNumber}</p>
     <p>Email: {email}</p>
     <p>Address: {address}</p>
     <div className='reply' onClick={handleReply}><i class="fa-solid fa-reply"></i>Reply Back</div>
    </div>
     {showReplyContainer &&(
      <div className='replyContainer'>
      <div className="replyHeaderSection">
      <p>Your Reply </p>
      <i class="fa-solid fa-xmark" onClick={()=>setShowReplyContainer(false)}></i>
      </div>
      <textarea rows={4} cols={33} placeholder='Give the reply ...'/>
      <button  className="replyButton">Send Reply</button>
     </div>
     )}
    </>
  )
}
