import styled from 'styled-components';
import MediumYogaImage from '../../assets/images/yoga_image_9.png';

const CircleImage = styled.img`
  border-radius: 50%;
  width: 150px; /* Adjust the width as needed */
  height: 150px; /* Adjust the height as needed */
  position: absolute;
  object-fit: cover; /* To maintain the image aspect ratio */
  /* Add more styles if required */
`;

const MediumCircleImage = ({ alt, positionIndex }) => {
    const positions = [
        { top: '1356px', right: '228px', left: '24px' }, // Add more positions as needed
        // Add more position objects as needed
    ];

    const { top, left, right } = positions[positionIndex];

    return <CircleImage src={MediumYogaImage} alt={alt} style={{ top, left, right }} />;
};

export default MediumCircleImage;


