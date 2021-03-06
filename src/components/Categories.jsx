import styled from 'styled-components';
import { mobile } from '../responsive';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: '0', flexDirection: 'column' })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map(({ id, title, img }) => (
        <CategoryItem key={id} title={title} img={img} />
      ))}
    </Container>
  );
};

export default Categories;
