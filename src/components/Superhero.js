import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from "../assets/images/superhero/antman.jpg"
import avangerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"


const SuperHero = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                    <Card className="bg-white movieImage ">
                        <Image src= {antmanImage} alt="Dune Movies" className="images" />
                        <div className="bg-dark">
                            <div className=" m-1 p-2 text-white">
                            <Card.Title className="text-center">ANTMAN</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with lead-in to additional content.
                                </Card.Text>
                               <Card.Text className="text-left">
                                Last updated 3 mins ago
                               </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-white movieImage ">
                        <Image src= {avangerImage} alt="Dune Movies" className="images" />
                        <div className="bg-dark">
                            <div className=" m-1 p-2 text-white">
                            <Card.Title className="text-center">AVENGER</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with lead-in to additional content.
                                </Card.Text>
                               <Card.Text className="text-left">
                                Last updated 3 mins ago
                               </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-white movieImage ">
                        <Image src= {batmanImage} alt="Dune Movies" className="images" />
                        <div className="bg-dark">
                            <div className=" m-1 p-2 text-white">
                            <Card.Title className="text-center">THE BATMAN</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with lead-in to additional content.
                                </Card.Text>
                               <Card.Text className="text-left">
                                Last updated 3 mins ago
                               </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-white movieImage ">
                        <Image src= {robinhoodImage} alt="Dune Movies" className="images" />
                        <div className="bg-dark">
                            <div className=" m-1 p-2 text-white">
                            <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with lead-in to additional content.
                                </Card.Text>
                               <Card.Text className="text-left">
                                Last updated 3 mins ago
                               </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-white movieImage ">
                        <Image src= {spidermanImage} alt="Dune Movies" className="images" />
                        <div className="bg-dark">
                            <div className=" m-1 p-2 text-white">
                            <Card.Title className="text-center">SPIDERMAN</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with lead-in to additional content.
                                </Card.Text>
                               <Card.Text className="text-left">
                                Last updated 3 mins ago
                               </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="bg-white movieImage ">
                        <Image src= {supermanImage} alt="Dune Movies" className="images" />
                        <div className="bg-dark">
                            <div className=" m-1 p-2 text-white">
                            <Card.Title className="text-center">SUPERMAN</Card.Title>
                                <Card.Text className="text-left">
                                This is a wider card with lead-in to additional content.
                                </Card.Text>
                               <Card.Text className="text-left">
                                Last updated 3 mins ago
                               </Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>

                </Row>
            </Container>
          
        </div>
    )
}

export default SuperHero