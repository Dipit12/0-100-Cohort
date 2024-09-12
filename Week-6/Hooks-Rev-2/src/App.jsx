// using useEffect hook - mainly used when want to fetch some data from somewhere

import { useState , useEffect} from 'react'

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});
useEffect(() => {
  setTimeout(() => {
    setBankData({
      returns: 100
    });
  }, 3000);
}, []);
  
useEffect(() => {
  setTimeout(() => {
    setExchangeData({
      returns: 100
    });
  }, 1000);
}, [])
 

  const incomeTax = (bankData.income + exchangeData) * 0.3;

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App