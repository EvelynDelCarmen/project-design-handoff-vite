import styled from 'styled-components';
import BigYogaImage from "../../assets/images/yoga_image_4.png";

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

const BigCircleImage = ({ alt, top, left, headerSpace }) => {
    return (
        <BigCircleImageContainer headerSpace={headerSpace}>
            <CircleImage src={BigYogaImage} alt={alt} top={top} left={left} />
        </BigCircleImageContainer>
    );
};

export default BigCircleImage;
