import styled, {css, keyframes} from "styled-components";
import { SkeletonProps } from ".";

type ContainerProps = Pick<SkeletonProps, 'spacings'>
type ContentProps = Pick<SkeletonProps, 'height'>

const animation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }

`

export const Container = styled.div<ContainerProps>`
  ${({spacings}) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${spacings}px;
  
  ` }
`

export const Content = styled.div<ContentProps>`
  ${({height}) => css`
    width: 100%;
    height: ${height}px;
    opacity: 0.6;
    border-radius: 8px;
   background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);;
    cursor: progress;
    background-size: 400% 400%;
  ` }
  animation: ${animation} 2s linear infinite


`
