import React, { useState } from 'react'

export default function EnquireUserContainer({srNo, UserName ,mobileNumber ,email ,enquire}) {
  const [showReplyContainer ,setShowReplyContainer] =useState(false);
  let handleReply=()=>{
   setShowReplyContainer(!showReplyContainer)
  }
  return (
    <>
    <div className='EnquireUserContainer'>
     <div>Sr.No.{srNo}</div>
     <p>Name: {UserName}</p>
     <p>Mobile: {mobileNumber}</p>
     <p>Email: {email}</p>
     <p> {enquire}</p>
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
