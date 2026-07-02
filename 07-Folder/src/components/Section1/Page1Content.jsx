import React from 'react'
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Page1Content = (Props) => {
  return (
    <div className="px-18 py-3 gap-10 flex h-[88vh]  items-center">
      < LeftContent />
      < RightContent Users={Props.Users} />
    </div>
  )
}
// console.log(Users);
export default Page1Content;
