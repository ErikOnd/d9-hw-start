import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const Favourites = () => {

    const companies = useSelector((state) => state.favourites.content)
    const dispatch = useDispatch()
    return (
        <Container>
            <Row className="justify-content-center mt-5 align-items-center"><h1>Favourite Companies</h1>
                <Link to="/" className="ml-3">
                    <Button variant="info"> Back to Companies</Button>
                </Link>
            </Row>

            {console.log(companies)}
            {companies.map(companie => {
                return (
                    <div className="d-flex justify-content-center align-items-center mb-4" key={companie._id}>
                        <div>


                            <a href={companie.url} className="mr-3">{companie.company_name}</a>
                            <Button variant="danger" className='' onClick={() => {
                                dispatch({
                                    type: 'REMOVE_FROM_FAV',
                                    payload: companies.indexOf(companie)

                                })
                            }}>Remove</Button>

                        </div>


                    </div>

                )


            })}

        </Container>
    )


}

export default Favourites