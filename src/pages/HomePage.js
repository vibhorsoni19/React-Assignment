import React ,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { apiCall } from '../services/Userservices';
import AlluserComponent from '../components/AlluserComponent';
import Loader from "../components/Loader.js"
const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [pagination, setPagination] = useState({ prev: null, next: null });
    const [searchedName, setSearchedName] = useState("");
    const [isLoading,setIsLoading] = useState(true)


    const setSearchinguser  = (users)=>
    {

      setUsers(users)
    }
  
    const handleSearch = async (name = "", url) => {
      const filterData = await apiCall (
        "GET",
        !url ? `https://rickandmortyapi.com/api/character/?name=${name}` : `${url}`
      );
  
      if (filterData.status === 200) {
        setSearchedName(name);
        setTimeout(()=>{
          setIsLoading(false)
        },1000)
       
        setUsers(filterData.data.results);
  
        setPagination({
          prev: filterData.data.info.prev,
          next: filterData.data.info.next,
        });
      } else {
        setUsers([]);
      }
    };
  
    useEffect(() => {
      handleSearch();
    }, []);
  return (
    <Container fluid className="h-100">
      <Row className="h-100 justify-content-center align-items-center">
        <Col xs={12} className="text-center">
         
          {isLoading ?<Loader/>:<AlluserComponent users={users} setSearchinguser= {setSearchinguser} handleSearch={handleSearch} pagination={pagination}/> }
          
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage;
