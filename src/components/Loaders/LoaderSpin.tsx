import styled from 'styled-components';
import { IconGraph } from '../Icons/IconGraph';

const LoaderArea = styled.div`
  width: 100px;
  animation: pulse 0.9s ease-out infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: 0.2;
    }
    70% {
      transform: scale(0.7);
      opacity: 0.9;
    }
    100% {
      transform: scale(1);
      opacity: 0.2;
    }
  }
`;

export function LoaderSpin() {
  return (
    <LoaderArea>
      <IconGraph />
    </LoaderArea>
  );
}
