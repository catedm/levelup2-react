import styled from 'styled-components';
import { elevation, transition, teal } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  color: ${teal};
  ${elevation[3]};
  ${transition({})};
  &:hover {
    ${elevation[4]};
  }
`;
