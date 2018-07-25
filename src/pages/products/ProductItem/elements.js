import styled from 'styled-components';

export const ProductItemContainer = styled.main`
  width: 60%;
  height: 150px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 80px 70px;
  border: 0.1px dotted blue;
  margin: 20px 0;
`;

export const ProductImage = styled.img`
  padding: 1%;
  height: 98%;
  grid-column: 1 / 3;
  grid-row: span 2;
  src: ${({ src }) => src};
`;

export const ProductName = styled.div`
  grid-column: 3 / span 10;
  line-height: 35px;
  padding: 0 10px;
`;

export const ProductPrice = styled.div`
  grid-column: 3 / span 10;
  line-height: 25px;
  padding: 0 10px;
`;
