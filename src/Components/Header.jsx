import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <Link to={"/"}>
              <img
                src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp"
                height="30"
                alt=""
                loading="lazy"
              />
              MDBootstrap
            </Link>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;
