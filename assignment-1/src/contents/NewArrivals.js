import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBTooltip,
} from 'mdbreact';

// Data
const tabs = [{
  title: "Denim",
  category: "Jeans",
  price: "60$",
  discount: "49$",
  img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg"
},{
  title: "Shoes",
  category: "High heels",
  price: "100$",
  discount: "89$",
  img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg"
},{
  title: "Brown coat",
  category: "Outwear",
  price: "75$",
  discount: "50$",
  img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg"
},{
  title: "Blouses",
  category: "Shirt",
  price: "120$",
  discount: "80$",
  img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg"
}]
const NewArrivals = (props) => {
return (
    <section className='text-center my-5'>
    <h2 className='h1-responsive font-weight-bold text-center my-5'>New Arrival</h2>
    <p className='grey-text text-center w-responsive mx-auto mb-5'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
      totam voluptas nostrum quisquam eum porro a pariatur veniam.
    </p>
    <MDBRow>
    {
      tabs.map((tab, index) =>(
      <MDBCol lg='3' md='6' className='mb-lg-0 mb-4' key={ index }>
        <MDBCard cascade narrow ecommerce>
          <MDBCardImage
            cascade
            src={tab.img}
            top
            alt='sample photo'
            overlay='white-slight'
          />
          <MDBCardBody cascade className='text-center'>
            <a href='#!' className='grey-text'>
              <h5>{tab.category}</h5>
            </a>
            <MDBCardTitle>
              <strong>
                <a href='#!'>{tab.title}</a>
              </strong>
            </MDBCardTitle>
            <MDBCardText>Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</MDBCardText>
            <MDBCardFooter className='px-1'>
              <span className='float-left font-weight-bold'>
                <del className='coret'>{tab.price}</del><br/>
                <strong>{tab.discount}</strong>
              </span>
              <span className='float-right'>
                <MDBTooltip domElement placement='top'>
                  <i className='grey-text fa fa-eye mr-3' />
                  <span>View More</span>
                </MDBTooltip>
                <MDBTooltip domElement placement='top'>
                  <i className='grey-text fa fa-heart' />
                  <span>Add to Whishlist</span>
                </MDBTooltip>
              </span>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      ))
    }
    </MDBRow>
  </section>
)
};
export default NewArrivals;