import React from 'react'

export default function Card(props) {
    return (
      <div class="w-[300px] rounded-md border flex-warp flex-column m-10">
        <div >
          <img src={props.image} alt={props.nametag} width={500} className='hover:scale-75'/>
        </div>
    
        <div className="p-4 flex-column font-sans">
          <a href='#' className="text-base font-semibold">{props.nametag}</a>
          <p className="p-3 text-sm text-pink-600">{props.price}</p>
        </div>
      </div>
    );
}
