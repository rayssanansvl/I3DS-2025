import React from 'react'
import PromoCard from './PromoCard'

const Promotion = () => {
  return (
    <div id="promotion">
        <h2>Promoções</h2>
    <div id='itensPromo' className='d-flex flex-wrap gap-4 justify-content-around'>
    {/* inserir os cards de promoção */}
    <PromoCard />
    <PromoCard />
    <PromoCard />
    </div>
    </div>
  )
}

export default Promotion