import styled from 'styled-components';

const CircleImage = styled.img`
  border-radius: 50%;
  width: 150px; /* Adjust the width as needed */
  height: 150px; /* Adjust the height as needed */
  position: absolute;
  object-fit: cover;
`;

const SmallCircleImages = ({ src, alt, top, left }) => {
    return <CircleImage src={src} alt={alt} style={{ top, left }} />;
};

const positions = [
    { top: '1356px', right: '228px', left: '24px', },
    { top: '1444px', right: '24px', left: '228px' },
    { top: '2380px', right: '211px', left: '41.2px' },
    { top: '2724px', right: '23.8px', left: '227px' },
    // Add more positions as needed

    //The top is vertical and left horizontal
];

const images = [
    'src/assets/images/yoga_image_1.png',
    'src/assets/images/yoga_image_5.png',
    'src/assets/images/yoga_image_7.png',
    'src/assets/images/yoga_image_6.png',
    // Add more image paths
];

const SmallCircleImage = () => {
    return (
        <>
            {positions.map((position, index) => (
                <SmallCircleImages
                    key={index}
                    src={images[index]}
                    alt={`Small Circle Image ${index}`}
                    top={position.top}
                    left={position.left}
                />
            ))}
        </>
    );
};

export default SmallCircleImage;
