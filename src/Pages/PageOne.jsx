
import {
  PageContainer,
  ContentContainer,
  Title,
  Text,
} from './PageStyles.jsx';

import Header from '../ReUsableComp/HeaderFolder/Header.jsx';

const PageOne = () => {
  return (
    <PageContainer>
      <div style={{ position: 'sticky', top: '0', zIndex: '100' }}>
        <Header />
      </div>
      <ContentContainer>
        <Title>Mobile First Page</Title>
        <Text>Welcome to the mobile version of your site.</Text>
      </ContentContainer>
    </PageContainer>
  );
};

export default PageOne;


