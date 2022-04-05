import { useEffect, useState } from 'react';
import '../css/timeSet.css'
import NumberSlide from './NumberSlide';

const TimeSet = ({ time='2330', onChange }) => {
    const [hourTen, setHourTen] = useState(2);
    const [hourOne, setHourOne] = useState(3);
    const [minTen, setMinTen] = useState(3);
    const [minOne, setMinOne] = useState(0);
    const [hourMax, setHourMax] = useState(9)
    const [isInit,setIsInit] = useState(false)

    useEffect(()=>{
        setIsInit(true);
        setHourTen(time.substring(0, 1)*1)
        setHourOne(time.substring(1, 2)*1)
        setMinTen(time.substring(2, 3)*1)
        setMinOne(time.substring(3, 4)*1)
    },[time])

    useEffect(() => {
        if(!isInit){
            onHourChange()
            onChange(`${hourTen}${hourOne}${minTen}${minOne}`)
        }
        setIsInit(false);
    }, [hourTen, hourOne, minTen, minOne])

    const onHourChange = () => {
        setHourMax(hourTen === 2 ? 3 : 9);
        setHourOne(curr => (hourTen === 2) && (curr > 3) ? 3 : curr);
    }
    return (<>
        <NumberSlide val={hourTen} setter={setHourTen} max='2' />
        <NumberSlide val={hourOne} setter={setHourOne} max={hourMax} />
        <NumberSlide val={minTen} setter={setMinTen} max='5' />
        <NumberSlide val={minOne} setter={setMinOne} max={9} />
    </>)
}

export default TimeSet;