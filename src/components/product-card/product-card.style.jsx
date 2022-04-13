import styled from "styled-components";

import { BaseButton, InvertedButton } from "../button/button.style";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  ${BaseButton},
  ${InvertedButton} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {

    
    ${BaseButton},
    ${InvertedButton} {
      display: flex;
    }
    &:hover {
    img {
      opacity: unset;
    }

    button {
      
      display: flex;
    }
  }
  }
`;
export const ProductsImageAndFootContainer = styled.div`
  width: 100%;
  height: 100%;
 
  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    margin-bottom: 5px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
export const Name = styled.span`
  padding-left: 10px;
  width: 90%;
  
`;
export const Price = styled.span`
  padding-right: 25px;
  width: 10%;
`;
