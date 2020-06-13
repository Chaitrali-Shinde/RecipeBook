import React from 'react'
import {Card, Container, Row, Col, Image} from 'react-bootstrap';

const Recipes= ({title, calories, image, ingredients, url})=> {
    return(
    <div>
        <Container>
        <Row>
        <Col >
            <Card style={{marginTop: 20, background:"#edc7b7"}}>
                <Container>
                <h1 style={{color: "#ac3b61"}}>{title}</h1>
                <center><Image src= {image}/></center>
                <center><p style={{color: "#ac3b61"}}>Calories:{calories}</p></center><br/>
                <a href= {url}>Click for info...</a>
                <h4 style={{color: "#ac3b61"}}>Ingredients</h4>
                <ol>
                    {ingredients.map(ingredient=>(
                        <li>{ingredient.text}</li>
                    ))}
                </ol>
                </Container>
            </Card>
            </Col><br/>
        </Row>
        </Container>
    </div>);
}

export default Recipes;