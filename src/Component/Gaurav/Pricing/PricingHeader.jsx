// ** Reactstrap Imports
import { Input } from 'reactstrap'

const PricingHeader = ({ duration, setDuration }) => {
  const onChange = e => {
    if (e.target.checked) {
      setDuration('yearly')
    } else {
      setDuration('monthly')
    }
  }

  return (
    <div className='text-center'>
      <h1 className='mt-5' style={{fontSize:"40px"}}>Pricing Plans</h1>
      <p style={{fontSize:"20px"}} className='mb-2 pb-75'>
      The pricing will vary depending on the complexity of your issue
and the type of business you are running.
      </p>
      {/* <div className='d-flex align-items-center justify-content-center mb-5 pb-50'>
        <h6 className='me-50 mb-0'>Monthly</h6>
        <div className='form-switch'>
          <Input id='plan-switch' type='switch' checked={duration === 'yearly'} onChange={onChange} />
        </div>
        <h6 className='ms-50 mb-0'>Annually</h6>
      </div> */}
    </div>
  )
}

export default PricingHeader
