import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'



const Job = ({ data }) => {
  const companies = useSelector((state) => state.favourites.content)
  const dispatch = useDispatch()
  return (


    <Row
      className="mx-0 mt-3 p-3 company-holder"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Button variant="success" className='add-favourite' disabled={companies.some(companie => companie._id === data._id)} onClick={() => {
        dispatch({
          type: 'ADD_TO_FAV',
          payload: data

        })
      }}>Add to Favourites</Button>
    </Row>

  )

}




export default Job
