import styled from 'styled-components';

import { popularProducts } from '../data';

import Product from './Product';

const Container = styled.div``;

const Products = () => {
  return (
    <Container>
      {popularProducts.map(({ id, img }) => (
        <Product key={id} img={img} />
      ))}
    </Container>
  );
};

export default Products;
