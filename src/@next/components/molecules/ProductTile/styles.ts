import { media, styled } from "@styles";
import { css } from "styled-components";

const textProps = css`
  font-size: ${props => props.theme.typography.baseFontSize};
  margin: 0 0 0.5rem 0;
  text-align: left;
`;

export const Wrapper = styled.div`
  text-align: center;
  max-height: 30rem;
  transition: 0.3s;

  ${media.largeScreen`
    padding: 1.8rem;
  `}
`;

export const Title = styled.h4`
  text-transform: capitalize;
  font-weight: normal;
  padding: 1.5rem 1rem 1rem 1rem;
  ${textProps}
`;

export const Price = styled.strong`
  float: right;
  ${textProps}
`;

export const Image = styled.div`
  background: ${props => props.theme.colors.light};
  width: auto;
  height: auto;
  max-width: 100%;
  border-radius: 1rem;
  box-shadow: 0 25px 20px -27px ${props => props.theme.colors.lightFont};

  > img {
    width: auto;
    height: auto;
    max-width: 100%;
  }
`;
