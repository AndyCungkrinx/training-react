import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../action';
import { Link } from "react-router-dom";
import {  MDBCol, MDBContainer, MDBRow, MDBCardImage} from "mdbreact";

const Dashboard = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.user)
    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <>
          <MDBContainer className="page-account">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="4" className="mb-md-0 mb-5 ">
              <MDBCardImage
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">Profile</h4>
              <h6 className="text-uppercase grey-text mb-3">
              Fullname: {`${data.user.fullname}`}
              </h6><br></br>
              <h6 className="text-uppercase grey-text mb-3">
              Email: {`${data.user.email}`}
              </h6><br></br>
              <h6 className="text-uppercase grey-text mb-3">
              Phone: {`${data.user.telepon}`}
              </h6><br></br>
              <h6 className="text-uppercase grey-text mb-3">
              Password: {`${data.user.password}`}
              </h6><br></br>
                <Link to="/home">
                    <button className="btn peach-gradient" onClick={handleLogout}>Logout</button>
                </Link>
            </MDBCol>
          </MDBRow>
          </MDBContainer>
        </>
    )
}



// export default function Profile(data) {
//     let mail = data.user;
//     return (
//       <div>
//         {!mail && (
//           <Null />
//         )}
//         {mail && (
//           <Dashboard />
//         )}
//       </div>
//     );
// }


export default Dashboard;

