import styled from "styled-components";

const size = {
    mobileSmall: '375px',
    mobileLarge: '425px',
    medium: '620px',
    tablet: '768px',
    laptop: '1024px'
}

export const device = {
    mobileSmall: `(max-width: ${size.mobileSmall})`,
    mobileLarge: `(max-width: ${size.mobileLarge})`,
    medium: `(max-width: ${size.medium})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
}



export const YellowBg = styled.img`
  width: 50vw;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -2;
`;

export const PlantBg = styled.img`
  width: 38vw;
  position: absolute;
  right: 20vw;
  top: 0;
  z-index: -1;

  @media ${device.laptop} {
        display: none;
    }
`;