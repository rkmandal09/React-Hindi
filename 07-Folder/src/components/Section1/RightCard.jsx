import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = (Props) => {
  return (
    <div className="h-full w-80 shrink-0 rounded-4xl overflow-hidden relative">
      <img className="h-full w-full object-cover" src={Props.img} alt="profile" />
      <RightCardContent tag={Props.tag} id={Props.id} />
    </div>
  )
};

export default RightCard;
