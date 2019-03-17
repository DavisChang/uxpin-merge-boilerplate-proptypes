import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import PaymentIconStyles from './PaymentIcon.styles';
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

const PaymentIcon = (props) => (
  <PaymentIconStyles {...props}>
    <div className={paymentName}>
      {props.name}
    </div>
    <div className={iconDiv}>
      {
        React.createElement(Icons[mapping[props.icon]], {
          marginRight: '10px',
          height: '22px',
        })
      }
    </div>
  </PaymentIconStyles>
);

PaymentIcon.defaultProps = {
  name: PropTypes.string,
  icon: PropTypes.oneOf(['Visa', 'Mastercard', 'Amex', 'Paypal', 'Alipay', 'Wechat']),
};

PaymentIcon.propTypes = {
  name: 'Visa',
  icon: 'Visa',
};

export default PaymentIcon;
