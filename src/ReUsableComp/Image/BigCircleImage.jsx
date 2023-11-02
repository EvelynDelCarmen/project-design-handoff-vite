import styled from 'styled-components';
import BigYogaImage from '../../assets/images/yoga_image_4.png';
import BigTitle from '../Text/BigTitle';

const CircleImage = styled.img
    .withConfig({
        shouldForwardProp: (prop) => prop !== 'headerSpace',
    })
    .attrs((props) => ({
        top: props.top || '50%',
        left: props.left || '50%',
    }))`
    border-radius: 50%;
    width: 757px; /* Adjust the width as needed */
    height: 757px; /* Adjust the height as needed */
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    transform: translate(-50%, -50%); /* Center the content */

    
    @media (min-width: 1024px) {
        left: 100%; /* Center on desktop */
  `;

const BigCircleImageContainer = styled.div
    .withConfig({
        shouldForwardProp: (prop) => prop !== 'headerSpace',
    })
    .attrs((props) => ({
        top: props.top || '50%',
        left: props.left || '50%',
        headerSpace: props.headerSpace,
    }))`
    position: relative;
    top: ${(props) => props.headerSpace};
  `;

const TitleContainer = styled.div`
  position: absolute;
  top: 50%; /* Adjust the top value as needed */
  left: 50%; /* Adjust the left value as needed */
  transform: translate(50%, 50%); /* Center the content */
  z-index: 2; /* Ensure it's above the image */
`;

const BigCircleImage = ({ alt, top, left, headerSpace }) => {
    return (
        <BigCircleImageContainer headerSpace={headerSpace}>
            <TitleContainer>
                <BigTitle>Warm your body and soul</BigTitle>
            </TitleContainer>
            <CircleImage src={BigYogaImage} alt={alt} top={top} left={left} />
        </BigCircleImageContainer>
    );
};

export default BigCircleImage;
