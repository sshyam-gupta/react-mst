import styled from 'styled-components';

export const ProductItemContainer = styled.main`
  width: 100%;
  height: 150px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 40px 110px;
  border: 0.5px solid #000;
  border-radius: 5px;
  margin: 20px 0;
`;

export const ProductImage = styled.img`
  height: 99%;
  grid-column: 1 / 3;
  grid-row: 1 / -1;
  src: ${({ src }) => src};
`;

export const ProductName = styled.div`
  grid-column: 3 / span 8;
  line-height: 35px;
  padding: 0 10px;
`;

export const ProductPrice = styled.div`
  grid-column: 3 / span 10;
  line-height: 25px;
  padding: 0 10px;
`;

export const BtnEditProduct = styled.button`
  grid-column: 11 / 12;
  grid-row: 1;
`;

export const BtnDeleteProduct = styled.button`
  grid-column: 12 / 13;
  grid-row: 1;
`;
