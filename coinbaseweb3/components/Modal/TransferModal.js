import React, { useState } from 'react';
import styled from 'styled-components';
import Tranfer from './Tranfer';
const Wrapper = styled.div`
height: 35rem;
width: 27rem;
color: white;
border: 1px solid #282b2f;
display: flex;
flex-direction: column;
`
const Selector = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
height: 5rem;
`
const Option = styled.div`
height:100%;
width: 100%;
display: grid;
place-items: center;
font-size: 1.2rem;
font-weight: 600;
&:hover{
    cursor: pointer;
    background-color:#111214;
}
`
const ModelMain = styled.div``
const TransferModal = () => {
    const [action, setAction] = useState('send');
    const selectedStyle = {
        color: '#3773f5',

    }
    const UnselectedStyle = {
        border: '1px solid #2B2b2f'
    }
    const selectedModal = (option)=>{
        switch (option) {
            case 'send':
                return <Tranfer/>
            case 'recieve':
                return <h2>Receive</h2>
        
            default:
                break;
        }
    }
    return (
        <Wrapper>
            <Selector>
                <Option style={action === 'send' ? selectedStyle : UnselectedStyle} onClick={() => setAction('send')}>
                    <p >Send</p>
                </Option>
                <Option style={action === 'recieve' ? selectedStyle : UnselectedStyle} onClick={() => setAction('recieve')}>
                    <p >Recieve</p>
                </Option>
            </Selector>
            <ModelMain>
            {selectedModal(action)}
            </ModelMain>
        </Wrapper>
    );
};


export default TransferModal;
