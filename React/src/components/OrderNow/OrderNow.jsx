import React from 'react'
import { FlexCon } from '../../css-components/css-components'
import styled from 'styled-components'
import SecLeft from './SecLeft/SecLeft'
import SecRight from './SecRight/SecRight'

const Con = styled(FlexCon)`
  align-items: center;
`
const Div = styled.div`
  width: 20vw;
  display: flex;
`
const OrderNow = () => {
  return (
    <Con>
      <SecLeft />
      <Div>
        <svg xmlns="http://www.w3.org/2000/svg" width="337" height="176" viewBox="0 0 337 176" fill="none">
          <path d="M1 173.818C54.1672 165.932 163.401 134.592 175.002 72.3176C189.502 -5.52527 37.5 -18 61.29 90.6335C72.6749 142.621 198 141.5 220.5 110.5C256.5 60.899 255.5 -4.00037 336 1.99969" stroke="#E4E4E4" stroke-width="3" stroke-dasharray="12 12" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
          <path d="M71.7434 17.1766C77.6919 18.7705 79.6843 26.2062 75.3297 30.5608L30.5609 75.3296C26.2062 79.6843 18.7705 77.6919 17.1766 71.7433L0.790082 10.588C-0.80383 4.63945 4.63948 -0.803875 10.588 0.790036L71.7434 17.1766Z" fill="#E4E4E4" />
        </svg>
      </Div>
      <SecRight />
    </Con>
  )
}

export default OrderNow