import React, { useState } from 'react'
import ButtonCalculador from '../components/ButtonCalculador';

import { Column, Container, InputCalculator, Row } from '../styles/styles/calculator'

export default function Calculator() {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');

    const handleAddNumber = (number: string) => {
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
    }

    const handleOnClear = () => {
        setCurrentNumber('0')
        setFirstNumber('0')
        setOperation('')
    }

    const handleSomeNumber = () => {

        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('+')
        } else {
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum))
            setOperation('')
        }
    }

    const handleMinusNumber = () => {

        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('-')
        } else {
            const sum = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(sum))
            setOperation('')
        }
    }

    const handleMultNumber = () => {

        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('*')
        } else {
            const sum = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(String(sum))
            setOperation('')
        }
    }

    const handleDivNumber = () => {

        if (firstNumber === '0') {
            setFirstNumber(String(currentNumber));
            setCurrentNumber('0')
            setOperation('/')
        } else {
            const sum = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(String(sum))
            setOperation('')
        }
    }

    const handleResult = () => {

        if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
            switch (operation) {
                case '+':
                    handleSomeNumber();
                    break;
                case '-':
                    handleMinusNumber();
                    break;
                case '*':
                    handleMultNumber();
                    break;
                case '/':
                    handleDivNumber();
                    break;
            }
        }
    }

    return (
        <Container>
            <InputCalculator disabled value={currentNumber} />
            <Column>
                <Row>
                    <ButtonCalculador title='0' onClick={() => handleAddNumber('0')} />
                    <ButtonCalculador title='C' onClick={handleOnClear} />
                    <ButtonCalculador title='/' onClick={handleDivNumber} />
                    <ButtonCalculador title='*' onClick={handleMultNumber} />
                </Row>
                <Row>
                    <ButtonCalculador title='7' onClick={() => handleAddNumber('7')} />
                    <ButtonCalculador title='8' onClick={() => handleAddNumber('8')} />
                    <ButtonCalculador title='9' onClick={() => handleAddNumber('9')} />
                    <ButtonCalculador title='-' onClick={handleMinusNumber} />
                </Row>
                <Row>
                    <ButtonCalculador title='4' onClick={() => handleAddNumber('4')} />
                    <ButtonCalculador title='5' onClick={() => handleAddNumber('5')} />
                    <ButtonCalculador title='6' onClick={() => handleAddNumber('6')} />
                    <ButtonCalculador title='+' onClick={handleSomeNumber} />
                </Row>
                <Row>
                    <ButtonCalculador title='1' className='border1' onClick={() => handleAddNumber('1')} />
                    <ButtonCalculador title='2' onClick={() => handleAddNumber('2')} />
                    <ButtonCalculador title='3' onClick={() => handleAddNumber('3')} />
                    <ButtonCalculador title='=' className='border2' onClick={handleResult} />
                </Row>
            </Column>
        </Container>
    )
};