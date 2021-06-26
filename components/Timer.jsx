import React, {useEffect, useCallback, useState} from 'react';
import styled from "styled-components";
import numeral from 'numeral';

const CounterText = styled.div`
  margin-top: 10px;
  color: red;
`;

const Timer = ({ countDown }) => {
    if (!countDown) {
        return null;
    }
    const TIME_INTERVAL = 1000;
    const [count, setCount] = useState(countDown);

    useEffect(() => {
        const timer = count > 0 && setInterval(() => setCount(count - 1), TIME_INTERVAL);
        return () => clearInterval(timer);
    }, [count]);

    const getTimeText = () => {
        if (count > 0) {
            return `(${numeral(count).format('00:00').slice(3)})`;
        } else {
            return '(유효시간 만료됨)';
        }
    };

    return (
        <CounterText>{getTimeText()}</CounterText>
    );
};

export default Timer;