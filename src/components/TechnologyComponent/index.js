import React from 'react'

export default function TechnologyComponent(technology) {
  return (
    <div className="card d-flex flex-row m-1">
      <div className="p-2 rounded">
        <img src={technology.technology.image} alt={technology.technology.title} style={{ height: '64px', width: '64px' }} />
      </div>
      <div className="p-2 d-flex align-items-center">
        {technology.technology.title}
      </div>
    </div>
  )
}