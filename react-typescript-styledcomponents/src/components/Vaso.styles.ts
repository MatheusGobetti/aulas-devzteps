import styled from 'styled-components';

export type VasoVariant = 'primary' | 'secondary' | 'warning' | 'danger' | 'neutral';

interface VasoContainerProps {
  variant: VasoVariant;
}

const buttonVariants = {
  primary: {
    backgroundColor: 'purple',
    // color: 'white',
    // borderRadius: '10px',
    // size: 'large',
  },
  secondary: {
    backgroundColor: 'orange',
    // color: 'white',
    // borderRadius: '0',
    // size: 'medium',
  },
  warning: {
    backgroundColor: 'yellow',
    // color: 'black',
    // borderRadius: '10px',
    // size: 'medium',
  },
  danger: {
    backgroundColor: 'red',
    // color: 'white',
    // borderRadius: '0',
    // size: 'large',
  },
  neutral: {
    backgroundColor: 'white',
    // color: 'black',
    // borderRadius: '0',
    // size: 'small',
  },
};

export const VasoContainer = styled.button<VasoContainerProps>`
  margin: 10px;
  width: 75px;
  height: 30px;

  /* width: ${({ variant }) => {
    if (buttonVariants[variant].size === 'large') return '100px';
    if (buttonVariants[variant].size === 'medium') return '75px';
    return '50px';
  }};
  
  height: ${({ variant }) => {
    if (buttonVariants[variant].size === 'large') return '75px';
    if (buttonVariants[variant].size === 'medium') return '50px';
    return '25px';
  }}; */

  background-color: ${({ variant }) => buttonVariants[variant].backgroundColor};
  /* color: ${({ variant }) => buttonVariants[variant].color};
  border-radius: ${({ variant }) => buttonVariants[variant].borderRadius || '0'}; */

  /* ${(props) => {
    return `background-color: ${buttonVariants[props.variant]};`;
  }} */
  
`;