// ** Third Party Components
import classnames from 'classnames'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardText, Badge, ListGroup, ListGroupItem, Button } from 'reactstrap'


const PricingCards = ({ data, duration, bordered, fullWidth, cols }) => {
  const colsProps = cols ? cols : { md: 4, xs: 12 }
let image1 = "../../../assets/images/pricing 1.png"
let image2 = "../../../assets/images/pricing 2.png"
let image3 = "../../../assets/images/pricing 3.png"
  const renderPricingCards = () => {
    // return data.map((item, index) => {
    //   const monthlyPrice = duration === 'yearly' ? item.yearlyPlan.perMonth : item.monthlyPrice,
    //     yearlyPrice = duration === 'yearly' ? item.yearlyPlan.totalAnnual : item.monthlyPrice,
    //     imgClasses = item.title === 'Basic' ? 'mb-2 mt-5' : item.title === 'Standard' ? 'mb-1' : 'mb-2'

    return (
      // <Col key={index} {...colsProps}>
      <>


        <Col  {...colsProps}>
          <Card
            className={classnames('text-center', {
              border: bordered,
              'shadow-none': bordered,
              // popular: item.popular === true,
              // 'border-primary': bordered && item.popular === true,
              // [`${item.title.toLowerCase()}-pricing`]: item.title
            })}
          >
            <CardBody>
              {/* {item.popular === true ? ( */}
              <div className='pricing-badge text-end'>
                <Badge color='light-primary' pill>
                  Popular
                </Badge>
              </div>
              {/* ) : null} */}

              {/* <img className={imgClasses} src={item.img} alt='pricing svg' /> */}
              <img alt='pricing svg'  src='../../../../src/assets/images/pricing 1.png'  style={{maxHeight:"50px"}}  />
              {/* <h3>{item.title}</h3> */}
              <h3>Basic</h3>
              {/* <CardText>{item.subtitle}</CardText> */}
              <CardText>A simple start for everyone</CardText>
              <div className='annual-plan'>
                <div className='plan-price mt-2'>
                  <sup className='font-medium-1 fw-bold text-primary me-25'>$</sup>
                  {/* <span className={`pricing-${item.title.toLowerCase()}-value fw-bolder text-primary`}>
                    {monthlyPrice}
                  </span> */}
                  <span className={`pricing-${0}-value fw-bolder text-primary`}>
                    0
                  </span>
                  <span className='pricing-duration text-body font-medium-1 fw-bold ms-25'>/month</span>
                </div>
                {/* {item.title !== 'Basic' && duration === 'yearly' ? (
                  <small className='annual-pricing text-muted'>USD {yearlyPrice} / year</small>
                ) : null} */}

                {/* {item.title !== 'Basic' && duration === 'yearly' ? (
                  <small className='annual-pricing text-muted'>USD {yearlyPrice} / year</small>
                ) : null} */}
              </div>

              <ListGroup tag='ul' className='list-group-circle text-start mb-2'>
                {/* {item.planBenefits.map((benefit, i) => (
                  <ListGroupItem key={i} tag='li'>
                    {benefit}
                  </ListGroupItem>
                ))} */}
                <ListGroupItem >
                  100 responses a month
                </ListGroupItem>
                <ListGroupItem >
                  Unlimited forms and surveys

                </ListGroupItem>
                <ListGroupItem >
                  Unlimited fields
                </ListGroupItem>
                <ListGroupItem >
                  Basic form creation tools

                </ListGroupItem>
                <ListGroupItem >
                  Up to 2 subdomains


                </ListGroupItem>
              </ListGroup>

              {/* <Button block outline={item.title !== 'Standard'} color={item.title === 'Basic' ? 'success' : 'primary'}>
                {item.title === 'Basic' ? 'Your current plan' : 'Upgrade'}
              </Button> */}
              <Button block outline color="success">
                Your current plan
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col  {...colsProps}>
          <Card
            className={classnames('text-center', {
              border: bordered,
              'shadow-none': bordered,
              // popular: item.popular === true,
              // 'border-primary': bordered && item.popular === true,
              // [`${item.title.toLowerCase()}-pricing`]: item.title
            })}
          >
            <CardBody>
              {/* {item.popular === true ? ( */}
              <div className='pricing-badge text-end'>
                <Badge color='light-primary' pill>
                  Popular
                </Badge>
              </div>
              {/* ) : null} */}

              {/* <img className={imgClasses} src={item.img} alt='pricing svg' /> */}
              <img alt='pricing svg' src='../../../../src/assets/images/pricing 2.png'  style={{maxHeight:"90px"}} />
              {/* <h3>{item.title}</h3> */}
              <h3>Standard
              </h3>
              {/* <CardText>{item.subtitle}</CardText> */}
              <CardText>For small to medium businesses</CardText>
              <div className='annual-plan'>
                <div className='plan-price mt-2'>
                  <sup className='font-medium-1 fw-bold text-primary me-25'>$</sup>
                  {/* <span className={`pricing-${item.title.toLowerCase()}-value fw-bolder text-primary`}>
                    {monthlyPrice}
                  </span> */}
                  <span className={`pricing-${0}-value fw-bolder text-primary`}>
                    49
                  </span>
                  <span className='pricing-duration text-body font-medium-1 fw-bold ms-25'>/month</span>
                </div>
                {/* {item.title !== 'Basic' && duration === 'yearly' ? (
                  <small className='annual-pricing text-muted'>USD {yearlyPrice} / year</small>
                ) : null} */}

                {/* {item.title !== 'Basic' && duration === 'yearly' ? (
                  <small className='annual-pricing text-muted'>USD {yearlyPrice} / year</small>
                ) : null} */}
              </div>

              <ListGroup tag='ul' className='list-group-circle text-start mb-2'>
                {/* {item.planBenefits.map((benefit, i) => (
                  <ListGroupItem key={i} tag='li'>
                    {benefit}
                  </ListGroupItem>
                ))} */}
                <ListGroupItem >
                  Unlimited responses

                </ListGroupItem>
                <ListGroupItem >
                  Unlimited forms and surveys

                </ListGroupItem>
                <ListGroupItem >
                  Instagram profile page

                </ListGroupItem>
                <ListGroupItem >
                  Google Docs integration


                </ListGroupItem>
                <ListGroupItem >
                  Custom “Thank you” page



                </ListGroupItem>
              </ListGroup>

              {/* <Button block outline={item.title !== 'Standard'} color={item.title === 'Basic' ? 'success' : 'primary'}>
                {item.title === 'Basic' ? 'Your current plan' : 'Upgrade'}
              </Button> */}
              <Button block outline color="success">
                Upgrade
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col  {...colsProps}>
          <Card
            className={classnames('text-center', {
              border: bordered,
              'shadow-none': bordered,
              // popular: item.popular === true,
              // 'border-primary': bordered && item.popular === true,
              // [`${item.title.toLowerCase()}-pricing`]: item.title
            })}
          >
            <CardBody>
              {/* {item.popular === true ? ( */}
              <div className='pricing-badge text-end'>
                <Badge color='light-primary' pill>
                  Popular
                </Badge>
              </div>
              {/* ) : null} */}

              {/* <img className={imgClasses} src={item.img} alt='pricing svg' /> */}
              <img alt='pricing svg'  src='../../../../src/assets/images/pricing 3.png'  style={{maxHeight:"50px"}}  />
              {/* <h3>{item.title}</h3> */}
              <h3>Enterprise</h3>
              {/* <CardText>{item.subtitle}</CardText> */}
              <CardText>Solution for big organizations</CardText>
              <div className='annual-plan'>
                <div className='plan-price mt-2'>
                  <sup className='font-medium-1 fw-bold text-primary me-25'>$</sup>
                  {/* <span className={`pricing-${item.title.toLowerCase()}-value fw-bolder text-primary`}>
                    {monthlyPrice}
                  </span> */}
                  <span className={`pricing-${0}-value fw-bolder text-primary`}>
                    99
                  </span>
                  <span className='pricing-duration text-body font-medium-1 fw-bold ms-25'>/month</span>
                </div>
                {/* {item.title !== 'Basic' && duration === 'yearly' ? (
                  <small className='annual-pricing text-muted'>USD {yearlyPrice} / year</small>
                ) : null} */}

                {/* {item.title !== 'Basic' && duration === 'yearly' ? (
                  <small className='annual-pricing text-muted'>USD {yearlyPrice} / year</small>
                ) : null} */}
              </div>

              <ListGroup tag='ul' className='list-group-circle text-start mb-2'>
                {/* {item.planBenefits.map((benefit, i) => (
                  <ListGroupItem key={i} tag='li'>
                    {benefit}
                  </ListGroupItem>
                ))} */}
                <ListGroupItem >
                  PayPal payments

                </ListGroupItem>
                <ListGroupItem >
                  Logic Jumps


                </ListGroupItem>
                <ListGroupItem >
                  File upload with 5GB storage

                </ListGroupItem>
                <ListGroupItem >
                  Custom domain support


                </ListGroupItem>
                <ListGroupItem >
                  Stripe integration




                </ListGroupItem>
              </ListGroup>

              {/* <Button block outline={item.title !== 'Standard'} color={item.title === 'Basic' ? 'success' : 'primary'}>
                {item.title === 'Basic' ? 'Your current plan' : 'Upgrade'}
              </Button> */}
              <Button block outline color="success">
                Upgrade
              </Button>
            </CardBody>
          </Card>
        </Col>

      </>
    )
    // })
  }

  const defaultCols = {
    sm: { offset: 2, size: 10 },
    lg: { offset: 2, size: 10 }
  }

  return (
    <Row className='pricing-card'>
      <Col {...(!fullWidth ? defaultCols : {})} className={classnames({ 'mx-auto': !fullWidth })}>
        <Row>{renderPricingCards()}</Row>
      </Col>
    </Row>
  )
}

export default PricingCards
