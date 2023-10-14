import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiCall } from "../services/Userservices";
import Userdetails from "../components/Userdetails";
import Loader from "../components/Loader";
const UserDetailsPage = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const getUserDetailsById = async (id) => {
    const detailsById = await apiCall(
      "GET",
      `https://rickandmortyapi.com/api/character/${Number(id)}`
    );
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setUserDetails(detailsById.data);
  };

  useEffect(() => {
    getUserDetailsById(id);
  }, []);

  return (
    <>{loading ? <Loader /> : <Userdetails userDetails={userDetails} />}</>
  );
};

export default UserDetailsPage;
