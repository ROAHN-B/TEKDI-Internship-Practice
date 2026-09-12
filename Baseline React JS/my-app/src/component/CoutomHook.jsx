import {useState} from 'react';
function useCustomHook(){
  const [count, setCount] = useState(0);
  const HandleIncrement =() => {
  setCount(count+1);
  };
  return {
    count,
    HandleIncrement
  };
}

export default useCustomHook;