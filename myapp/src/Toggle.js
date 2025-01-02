import React,{useState} from 'react'

const Toggle = () => {
    const [isOn,setIsOn] = useState(false);
    const toggleSwitch = () => {
        setIsOn(prevState=>!preState);
    };
  return (
    <div>Toggle Switch
        <p>The switch is currently:<strong>{isOn?"ON":"OFF"}</strong></p>
        <button onClick={toggleSwitch}>{isOn?"ON":"OFF"}</button>
    </div>
  );
};

export default Toggle;