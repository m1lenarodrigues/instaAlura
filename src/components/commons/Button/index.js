/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import TextStyleVariants from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
    background:transparent;
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    ${propToStyle('margin')}
    ${propToStyle('display')}
    `;

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};

  `;

export const Button = styled.button`
    border :0;
    cursor:pointer;
    padding: 12px 26px;
    font-weight:bold;
    opacity:1;
    border-radius: 8px;

    ${TextStyleVariants.smallestException}

    ${breakpointsMedia({
    xs: css`
          ${TextStyleVariants.smallestException}
        `,
    md: css`
          padding: 12px 43px;
          ${TextStyleVariants.paragraph1}
        `,
  })}
    &:disabled {
      cursor: not-allowed;
      opacity: .2;
    }
    ${({ fullWidth }) => fullWidth && css`
      width: 100%;
    `};

      ${propToStyle('margin')}
      ${propToStyle('display')}
      
    // eslint-disable-next-line func-names
    ${function (props) {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }};
    &:hover,
    &:focus{
        opacity: .5;
    };
`;
