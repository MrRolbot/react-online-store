import React from 'react'
import './Collections.css'

const Collections = () => {
  return (
    <section className='collection-section'>
        <h1>Hot <span className='highlight'>DEALS</span></h1>
        <div className='collection-links'>
            <ul>
                <li>Boots</li>
                <li>Shoes</li>
                <li>Sandals</li>
                <li>Sports Shoes</li>
                <li>Slippers</li>
            </ul>
        </div>
        <div className='collection-type'>
            <div className='shoe-card'>
                <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png" alt='shoe'/>
                <p className='price'>$160.00</p>
                <div className='shoe-name'>
                    <h5>Nike Air Max 270</h5>
                    <hr/>
                </div>
            </div>
            <div className='shoe-card'>
                <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/249438dd-c851-4570-bb2d-566d8ccbd1c4/air-max-97-womens-shoes-Fr6rM4.png" alt='shoe'/>
                <p className='price'>$185.00</p>
                <div className='shoe-name'>
                    <h5>Nike Air Max 97</h5>
                    <hr/>
                </div>
            </div>
            <div className='shoe-card'>
                <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c01d4b66-d09b-4aa1-bba3-315ba2501556/air-max-2021-womens-shoes-CkfHnZ.png" alt='shoe'/>
                <p className='price'>$160.00</p>
                <div className='shoe-name'>
                    <h5>Nike Air Max 2021</h5>
                    <hr/>
                </div>
            </div>
            <div className='shoe-card'>
                <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a6089e22-d1db-49fb-b44b-5513668b5a29/air-max-90-womens-shoes-g5nqKN.png" alt='shoe'/>
                <p className='price'>$130.00</p>
                <div className='shoe-name'>
                    <h5>Nike Air Max 90</h5>
                    <hr/>
                </div>
            </div>
            <div className='shoe-card'>
                <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c32ed0a0-7df4-431e-a23a-5187775cd6d8/air-vapormax-2021-fk-mens-shoes-NpTfFz.png" alt='shoe'/>
                <p className='price'>$210.00</p>
                <div className='shoe-name'>
                    <h5>Nike Air VaporMax 2021 FK</h5>
                    <hr/>
                </div>
            </div>
            <div className='shoe-card'>
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/13ac1fb8-a1c7-40ae-b9d7-2f39e98bed02/air-max-97-mens-shoes-127hcQ.png" alt='shoe'/>
                <p className='price'>$185.00</p>
                <div className='shoe-name'>
                    <h5>Nike Air Max 97</h5>
                    <hr/>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Collections