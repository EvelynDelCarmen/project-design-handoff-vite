import styled from 'styled-components';
import MediumYogaImage from 'src/assets/images/yoga_image_9.png'; // Replace with your image path

const CircleImage = styled.img`
  border-radius: 50%;
  width: 150px; /* Adjust the width as needed */
  height: 150px; /* Adjust the height as needed */
  position: absolute;
  object-fit: cover; /* To maintain the image aspect ratio */
  /* Add more styles if required */
`;

const positions = [
    { top: '2991px', left: '77px', right: '75px' },
];

const MediumCircleImage = ({ alt }) => {
    return (
        <>
            {positions.map((position, index) => (
                <CircleImage
                    key={index}
                    src={MediumYogaImage}
                    alt={`${alt}-${index}`}
                    style={{ top: position.top, left: position.left, right: position.right }}
                />
            ))}
        </>
    );
};

export default MediumCircleImage;
