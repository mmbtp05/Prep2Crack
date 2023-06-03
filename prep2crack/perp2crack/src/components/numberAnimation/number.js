import * as React from 'react';
import { useSpring, animated } from '@react-spring/web'


function Number({ data }) {
    const { number } = useSpring({
      reset: true,
      reverse: false,
      from: { number: 0 },
      number: parseInt(`${data}`),
      delay: 500,
      config: { mass: 1, tension: 280, friction: 120 },
    })
    return <animated.div>{number.to(n => n.toFixed(0))}</animated.div>
  }

  export default Number;