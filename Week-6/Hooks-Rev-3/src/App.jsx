// useMemo 

import { useEffect, useState, useMemo } from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100
    });
  }, [])

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100
      });
    },1000)
  }, [])

  // const cryptoReturns = exchange1Data.returns + exchange2Data.returns;
  const cryptoReturns = useMemo(() =>{
      return exchange1Data.returns + exchange2Data.returns
  },[exchange1Data,exchange2Data])
  const incomeTax = (cryptoReturns + bankData.income) * 0.3

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}
// Should you recompute cryptoReturns
// If only bankData has changed in a render? 

export default App