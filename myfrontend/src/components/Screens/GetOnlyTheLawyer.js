import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getLawyer } from "../../Redux/Actions/LawyerActions";
import Editbutton from "./Editbutton";

export const GetOnlyTheLawyer = () => {
  const dispatch = useDispatch();
  let { loading, user } = useSelector((state) => state.getLawyer);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getLawyer(id));
  }, [dispatch]);

  return (
    <>
      <div className="margintop">
        <div className="card user-card-full">
          <div className="row m-l-0 m-r-0">
            <div className="col-sm-4 bg-c-lite-green user-profile">
              <div className="card-block text-center text-white">
                <div className="m-b-25">
                  {" "}
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/user.png"
                    className="img-radius"
                    alt="User-Profile-Image"
                  />{" "}
                </div>
                <h6 className="f-w-600">
                  Firstname:<br/>
                  {user && user.Lawyer.Firstname}
                </h6>

                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                  Lastname: <br/> {user && user.Lawyer.Lastname}
                </h6>
                <p>
                  {" "}
                  Description:<br/>
                  {user && user.Lawyer.descreption}
                </p>{" "}
                <Editbutton id={id} />

                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
              </div>
            </div>
            <div className="col-sm-8">
              <div className="card-block">
                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                  Information
                </h6>
                <div className="row">
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">zipCode:</p>
                    <h6 className="text-muted f-w-400">
                      {" "}
                      {user && user.Lawyer.zipCode}                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Address:</p>
                    <h6 className="text-muted f-w-400">
                      {" "}
                      {user && user.Lawyer.address}                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Phone Number:</p>
                    <h6 className="text-muted f-w-400">
                      {" "}
                      {user && user.Lawyer.phone}                    </h6>
                  </div>
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Email:</p>
                    <h6 className="text-muted f-w-400">
                      {" "}
                      {user && user.Lawyer.email}                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
