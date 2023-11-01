
import {
  PageContainer,
  ContentContainer,
  Title,
  Text,
} from './PageStyles.jsx'; // Import your styled components

const PageOne = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Title>Mobile First Page</Title>
        <Text>Welcome to the mobile version of your site.</Text>
      </ContentContainer>
    </PageContainer>
  );
};

export default PageOne;


