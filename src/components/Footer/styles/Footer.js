import styled from "styled-components";

export const Container = styled.div`
  padding: auto auto;
  width: 100%;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin: 20px;
  width: 210px;
  grid-gap: -10px;
  @media screen and (max-width: 960px) {
    width: 155px;
    margin: 20px auto;
  }
`;

export const Row = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    grid-gap: 15px;
  }
`;

export const Link = styled.a`
  color: green;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
    color: #a52a2a;
    transition: 200ms ease-in;
    cursor: pointer;
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    font-size: 15px;
    margin-bottom: 12px;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #a52a2a;
  margin-bottom: 40px;
  font-weight: bold;
  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
`;
