import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariants } from '../../foundation/Text';

const ButtonGhost = css `
    background:transparent;
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

export const Button = styled.button `
    border :0;
    cursor:pointer;
    padding: 12px 26px;
    font-weight:bold;
    opacity:1;

    border-radius: 8px;
    ${TextStyleVariants.smallestException}
    ${function (props){
        if(props.ghost){
            return ButtonGhost;           
        }    
        return ButtonDefault;   
    }};
    &:hover,
    &:focus{
        opacity: .5;
    };
`;
