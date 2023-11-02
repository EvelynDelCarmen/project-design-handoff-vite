
import {
  PageContainer,
  ContentContainer,
} from './PageStyles.jsx';

import Header from '../ReUsableComp/HeaderFolder/Header.jsx';
import BigCircleImage from '../ReUsableComp/Image/BigCircleImage.jsx';

const PageOne = () => {
  return (
    <PageContainer>
      <div>
        <Header />
      </div>
      <ContentContainer>
        <BigCircleImage top="50%" left="40%" headerSpace="400px" />

      </ContentContainer>
    </PageContainer>
  );
};

export default PageOne;


