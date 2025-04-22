import React from 'react'
import PromoCard from './PromoCard'

const Promotion = () => {
  return (
    <div id="promotion">
        <h2>Promoções</h2>
    <div id='itensPromo'>
    {/* inserir os cards de promoção */}
    <PromoCard />
    </div>
    </div>
  )
}

export default Promotion