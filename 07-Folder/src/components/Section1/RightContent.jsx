import React from 'react'
import RightCard from './RightCard';


const RightContent = (Props) => {
  console.log(Props);
  return (
    <div id="Right" className="h-full w-3/4 px-6 py-3 flex flex-row flex-nowrap gap-4 overflow-x-auto rounded-4xl">
      {Props.Users.map(function(elam,idx){

        return <RightCard key={idx} id={idx} img={elam.img} tag={elam.tag} />

      })}
    </div>
  )
}

export default RightContent;
