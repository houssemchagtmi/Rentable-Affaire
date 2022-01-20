import { Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { lougout } from "../Redux/Actions/LawyerActions";
import './Header.css'
const Header = () => {
  const { users,user } = useSelector((state) => state.loginDetails);

  const dispatch = useDispatch();
  const handleLougOut = () => {
    dispatch(lougout());
  };

  return (
    <div>
        <div className="header-bar">
         
        <h1 class="logo">RA</h1>

          <div className="slider-menu">
            <LinkContainer to="/" className="li">
              <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>
            {user&& user.Lawyer ? (
              <>
                <LinkContainer to={`/workShop/${user.Lawyer._id}`} className="li">
                  <Nav.Link>Calendar</Nav.Link>
                </LinkContainer>

                <LinkContainer to={`/profile/${user.Lawyer._id}`} className="li">
                  <Nav.Link>Profile</Nav.Link>
                </LinkContainer>
              
              
              </>
            ) : user&& user.Secretary ? (
              <LinkContainer to={`/profileSec/${user.Secretary._id}`} className="li">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            ) :(
              <LinkContainer to="/login" className="li">
                <Nav.Link>Login/SignUP</Nav.Link>
              </LinkContainer>
            )}
            {user ? (
              <>
                <LinkContainer to="/login" className="li">
                  <Nav.Link onClick={handleLougOut} >Log out</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Header;
