import React from 'react'

const RightCardContent = (Props) => {
  return (
    <div className= "absolute top-0 left-0 w-full h-full rounded-4xl p-8 flex flex-col justify-between">
        <h2 className="text-xl font-semibold h-12 w-12 rounded-full bg-white flex items-center justify-center">{Props.id+1}</h2>
        <div>
            <p className="text-xl text-white leading-relaxed mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptatem? Dicta amet sapiente harum fugit aliquid necessitatibus excepturi.</p>
            <div className="flex justify-between">
                <button className="bg-blue-600 text-medium font-bold text-white px-8 py-3 rounded-full">{Props.tag}</button>
                <button className="bg-blue-600 text-medium font-bold text-white px-4 py-3 rounded-full"><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent;
