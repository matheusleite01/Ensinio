import {Container, Content} from './styled'

export type SkeletonProps = {
  lines?: number;
  height?: number;
  spacings?: number;
};

const Skeleton = ({ lines = 5, height = 20, spacings = 6 }: SkeletonProps) => {
  return (
    <Container spacings={spacings}>
      {[...Array(lines)].map((_, index) => (
        <Content key={index} height={height} />
      ))}
    </Container>
  );
};

export default Skeleton;
