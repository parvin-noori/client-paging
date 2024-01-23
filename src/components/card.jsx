import React from 'react'

export default function Card({imageUrl,skills,name,mobile,email}) {
  return (
    <div className='card text-center border-0 shdow-lg'>
        <div className="card-body">
            <img src={imageUrl} alt={name} width="96" className='d-inline-block mb-3 rounded-circle'/>
            <h6>{name}</h6>
            <p className="fs-sm text-muted">{skills}</p>
            <p className="mt-4 mb-0 fs-sm fw-bold">{mobile}</p>
            <p className="fs-sm fw-bold">{email}</p>
        </div>
    </div>
  )
}
