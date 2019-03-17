import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import NewComponentStyles from './NewComponent.styles';
import * as Icons from '../../icons';

const paymentName = css`
  font-weight: 700;
`;

const iconDiv = css`
  display: flex;
  align-items: center;
  flex-direction: row;

  svg:last-child {
    margin-right: 0;
  }
`;

const mapping = {
  Visa: 'LogoVisaSvg',
  Mastercard: 'LogoMastercardSvg',
  Amex: 'LogoAmexSvg',
  Alipay: 'LogoAlipaySvg',
  Wechat: 'LogoWechatSvg',
  Paypal: 'LogoPaypalSvg',
};

const NewComponent = (props) => (
  <NewComponentStyles {...props}>
    <div className={paymentName}>
      {props.name}
    </div>
    <div className={iconDiv}>
      {
        React.createElement(Icons[mapping[props.icon]], {
          className: 'normal',
        })
      }
    </div>
  </NewComponentStyles>
);

NewComponent.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.oneOf(['Visa', 'Mastercard', 'Amex', 'Paypal', 'Alipay', 'Wechat']),
};

NewComponent.defaultProps = {
  name: PropTypes.string,
  icon: PropTypes.oneOf(['Visa', 'Mastercard', 'Amex', 'Paypal', 'Alipay', 'Wechat']),
};

export default NewComponent;
