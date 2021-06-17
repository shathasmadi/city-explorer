import react from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


class Movie extends react.Component {

    render() {
        
        return (
            <div style={{ display: 'flex', 'flex-wrap': 'wrap', gap: '4%' }}>
                {this.props.movies.map(item => {
                    return (
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.overview}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup>vote: {item.averageVotes}</ListGroup>
                                <ListGroup>popularity: {item.popularity}</ListGroup>
                                <ListGroup>release date: {item.releasedOn}</ListGroup>
                            </ListGroup>
                        </Card>
                    )
                })}
            </div>
        )
    }
}









export default Movie;