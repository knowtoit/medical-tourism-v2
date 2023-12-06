// ** React Imports
import { useState, useEffect, Fragment } from 'react'

// ** Third Party Components
import axios from 'axios'

// ** Demo Components
import PricingHeader from './PricingHeader.jsx'
import PricingCards from './PricingCards.jsx'

// ** Styles
import '@styles/base/pages/page-pricing.scss'

const Pricing = () => {
  // ** States
  const [data, setData] = useState(null),
    [faq, setFaq] = useState(null),
    [duration, setDuration] = useState('monthly')

    useEffect(() => {
        axios.get('/src/assets/data/locales/en.json').then(res => {
          const dataArr = [],
            faqArr = []
         Object.entries(res.data).forEach(([key, val]) => {
           if (key !== 'qandA') {
             setData([...dataArr])
              dataArr.push(val)
            } else {
              faqArr.push(val)
              setFaq(faqArr)
            }
          })
        })
      }, [])

  return (
    <div id='pricing-table'>
      <PricingHeader duration={duration} setDuration={setDuration} />
        <Fragment>
          <PricingCards data={data} duration={duration} />
        </Fragment>
    </div>
  )
}

export default Pricing
