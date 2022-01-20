import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSecretary } from "../../Redux/Actions/SecretaryAction";
import Editbutton from "./Editbutton";

export const GetOnlyTheSecretary = () => {
  const dispatch = useDispatch();
  let { loading, user } = useSelector((state) => state.getSecretary);

  const { idSec } = useParams();
  useEffect(() => {
    dispatch(getSecretary(idSec));
  }, [dispatch]);
  return (
    <div>
      {loading &&'loading'}
      <h1> Firstname:{" "}   {user && user.Secretary.Firstname} </h1> 
      <h1> Lastname: {" "}   {user && user.Secretary.Lastname} </h1> 
      <h1> zipCode:  {" "}   {user && user.Secretary.zipCode}  </h1>  
      <h1> Address:  {" "}   {user && user.Secretary.Address}  </h1>  
      <h1>
        {" "}
        Description:{user && user.Secretary.descreption}
        <Editbutton idSec={idSec} />
      </h1>
    </div>
  );
};