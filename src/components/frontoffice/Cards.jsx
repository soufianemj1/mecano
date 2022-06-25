import React from 'react'

function Cards() {
  return (
    <div className='flex flex-row justify-center gap-8 content-center mb-10 mt-20'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/face?w=400&h=225" alt="face" /></figure>
  <div className="card-body">
    <h2 className="card-title justify-center">Ahmed salamat</h2>
    <p>Mercedes expert.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Reserver une visite</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/face?w=400&h=225" alt="face" /></figure>
  <div className="card-body ">
    <h2 className="card-title justify-center">Ilyass Foja</h2>
    <p>Volkswagen expert.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Reserver une visite</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/face?w=400&h=225" alt="face" /></figure>
  <div className="card-body ">
    <h2 className="card-title justify-center ">Naoufal khay</h2>
    <p >Mutsibishi expert.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary ">Reserver une visite</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards