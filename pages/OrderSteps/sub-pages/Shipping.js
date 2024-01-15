// {
//     name: '',
//     address: '',
//     phone: '',
//  }

import { useEffect } from 'react'

function Shipping(props) {
  const { shipping, setShippingData } = props

  const handleFieldChange = (e) => {
    const newShipping = { ...shipping, [e.target.name]: e.target.value }
    setShippingData(newShipping)

    console.log(newShipping)
  }

  return (
    <>
      <h1>運送資訊 - Shipping</h1>
      <div>
        <label htmlFor='name'>姓名</label>
        <input
          type="text"
          name="name"
          value={shipping.name}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label htmlFor='address'>住址</label>
        <input
          type="text"
          name="address"
          value={shipping.address}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label htmlFor='mobile'>電話</label>
        <input
          type="text"
          name="phone"
          value={shipping.phone}
          onChange={handleFieldChange}
        />
      </div>
    </>
  )
}

export default Shipping
