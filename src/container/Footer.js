import React from "react";
import Footer from "../components/Footer";
import Icon from "../components/Icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>ABOUT US</Footer.Title>
            <Footer.Link href="#">About BeautyFace store</Footer.Link>
            <Footer.Link href="#">About WISHFUL</Footer.Link>
            <Footer.Link href="#">Blog</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>ACCOUNT</Footer.Title>
            <Footer.Link href="#">My Account</Footer.Link>
            <Footer.Link href="#">Check Order</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>CUSTOMER SERVICE</Footer.Title>
            <Footer.Link href="#">Contact Us</Footer.Link>
            <Footer.Link href="#">Shipping & Returns</Footer.Link>
            <Footer.Link href="#">Consultations</Footer.Link>
            <Footer.Link href="#">FAQ</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>SOCIAL</Footer.Title>
            <Footer.Link href="#">
              <Icon className={"fab fa-facebook"} />
              Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className={"fab fa-instagram"} />
              Instagram
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className={"fab fa-youtube"} />
              Youtube
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className={"fab fa-twitter"} />
              Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
