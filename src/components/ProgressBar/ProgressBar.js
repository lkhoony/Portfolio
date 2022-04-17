import React, {useState, useRef, useEffect} from 'react';
import {Container, Bar, Labels, Value, Name, Wrap} from './ProgressBarStyles';

const ProgressBar = (props) => {

    // 최대 value를 받음
    const {max, name} = props;
    const [value, setValue] = useState(0);
    const valueRef = useRef(0);

    useEffect(()=>{

        const increaseVal = setInterval(()=>{
            if(valueRef.current > max){
                clearInterval(increaseVal);
            }else{
                setValue(valueRef.current++);
            }
        },10);

        return () => clearInterval(increaseVal);
    },[])

    return(
        <Wrap>
            <Labels>
                <Name>{name}</Name>
                <Value>{value}%</Value>
            </Labels>
            <Container>
                <Bar value={value}></Bar>
            </Container>
        </Wrap>
        
    );

}

export default ProgressBar;