import styled from "styled-components";

export const InfromationMainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(7, 1fr);
  @media screen and (max-width: 470px){
    grid-template-rows: repeat(110, 1fr);
  }

  margin-top: 50px;
  .checked {
    color: orange;
  }
`;
export const ProductImageContainer = styled.div`
  grid-column: 1 /4;
  grid-row: 1/4;
  @media screen and (max-width: 1100px) {
    padding-top: 150px;
  }
  @media screen and (max-width: 880px) {
    padding-top: 0px;
    grid-row: 1/3;
  }
  @media screen and (max-width: 750px){
    grid-column: 1 /6;
  }
  @media screen and (max-width: 580px){
    grid-column: 1 /5;
}
@media screen and (max-width: 470px){
  grid-column: 1 /11;
  grid-row: 1/2;
}


  img {
    width: 100%;
  }
`;


export const Details = styled.div`
  grid-column: 5 / 11;
  grid-row: 1/3;

  
  @media screen and (max-width: 750px){
    grid-column: 7 / 11;
    .product-price {
      button {
        min-width: 160px !important;
      }
    }
  }
  @media screen and (max-width: 580px){
    grid-column: 6 / 11;
  }
  @media screen and (max-width: 470px){
  grid-column: 1 /11;
  grid-row: 2/6;
}
  .rating {
    padding-left: 20px;
  }
  h2 {
    letter-spacing: 8px;
    font-size: 35px;
    margin-bottom: 30px;
  }
  .product-price {
    margin-top: 50px;

    h1 {
      font-weight: 300;
      margin-bottom: 50px;
    }
    button {
      min-width: 372px;
    }
  }
`;
export const About = styled.div`
  grid-column: 5 / 11;
  grid-row: 3 / span 2;

  h2 {
    letter-spacing: 1px;
    font-size: 25px;
  }
  p {
    font-size: 20px;
    font-weight: 300;
  }

  @media screen and (max-width: 880px) {
    grid-column: 1 / 11;
  }
  @media screen and (max-width: 470px){
    grid-row: 3 / span 2;
  }
`;
