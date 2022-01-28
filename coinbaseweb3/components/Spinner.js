import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';

const Spinner = ({ message }) => {
    return <Wrapper>
        <TailSpin type='Circles' color='#3773f5' height={80} width={200} className='m-5' />
        <Message>{message}</Message>
    </Wrapper>;
};

export default Spinner;
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;

`
const Message = styled.p`
font-size:40px;
text-align: center;
padding: 0 12px;

`