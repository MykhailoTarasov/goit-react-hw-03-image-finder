import styled from 'styled-components';

export const StyledItem = styled.li`
  height: 260px;
`;

export const StyledImage = styled.img`
  height: 260px;
  width: 394px;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 4px;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
