import React from 'react'
import '../../../index.css'

const PromosiSection = ({matches}) => {
  const message = 'Halo, saya mau bertanya untuk paket UTBK'
  const phoneNumber = "+628812518233"

  const handleClosePromo = () => {
      window.open('https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message));
  }

  return (
    <div className='mt-40'>
        {
          matches? 
          // Mobile View
          (<div className='bg-promo-mobile text-white'>
            <div className='pt-10'>
              <h2 className='text-center text-[24px] font-bold'>Kuy, segera raih persiapan masuk PTN Favorit kamu dengan ikut Program dari Prof. Bob Excellent!</h2>
              <div onClick={handleClosePromo} className='text-center mt-10'>
                <button className='bg-orange-500 py-3 px-6 rounded-full font-semibold'>Hubungi Kami</button>
              </div>
            </div>
          </div>) 
          : (<div></div>)
        }
    </div>
  )
}

export default PromosiSection