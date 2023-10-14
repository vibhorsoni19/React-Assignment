import { Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

function DetailsPage({ userDetails }) {


  return (
    <div className="container mt-5">
      {userDetails && (
        
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={userDetails.image} />
            <Card.Body>
              <Card.Title>{userDetails.name}</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Status:</strong> {userDetails.status}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Species:</strong> {userDetails.species}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Gender:</strong> {userDetails.gender}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Origin:</strong> {userDetails.origin.name}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Location:</strong> {userDetails.name}
                </ListGroup.Item>
              </ListGroup>
              <Card.Text>
                <strong>Episodes:</strong>
                <ul>
                  {userDetails.episode.map((ep, idx) => (
                    <li key={idx}>
                      <a href={ep} target="_blank" rel="noopener noreferrer">
                        Episode Link
                      </a>
                    </li>
                  ))}
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
      
      )}
    </div>
  );
}

export default DetailsPage;
