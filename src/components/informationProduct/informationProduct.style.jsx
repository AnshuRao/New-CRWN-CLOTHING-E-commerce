import styled from "styled-components";

export const InfromationMainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
  .checked {
    color: orange;
  }
`;
export const ProductImageContainer = styled.div`
  width: 40%;
  height: 100%;

  img {
    width: 70%;
    height: 100%;
  }
`;
export const Details = styled.div`
  width: 40%;
  .rating {
    padding-left: 20px;
  }
  h2 {
    letter-spacing: 8px;
    font-size: 35px;
    margin-bottom: 30px;
  }
  .product-price {
      h1{
          font-weight: 300;
      }
  }
  .about{
      h2{
          letter-spacing:1px;
          font-size: 25px;
      }
  }

 
`;
