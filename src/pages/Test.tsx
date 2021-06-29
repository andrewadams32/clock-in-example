import { useEffect, useMemo, useState } from 'react';
import AuthService from "src/services/AuthService"
import ClockService from 'src/services/ClockService';

function Test() {

  const [me, setMe] = useState({})
  const [clocks, setClocks] = useState([])

  useEffect(() => {
    try {
      getMe()
    } catch(err) {
      console.log('login err', err)
    }
  },[])

  const unFinished = useMemo(() => {
    //@ts-ignore
    return clocks.filter(c => c.startTime === c.endTime)[0]
  }, [clocks])

  const login = async () => {
    await AuthService.login({email: "test@test.com", password: "test"})
  }

  const getMe = async () => {
    try {
      const me = await AuthService.getMe()
      setMe(me)
    } catch(err) {
      console.log('get me', err)
      return {}
    }
  }
  const getTimes = async () => {
    try {
      const times = await ClockService.getTimes((me as any).id)
      setClocks(times)
    } catch(err) {
      console.log('get time', err)
    }
  }

  const logout = async () => {
    await AuthService.logout()
  }
  const clockIn = async () => {
    await ClockService.clockin((me as any).id)
  }
  const clockOut = async (clockId: number) => {
    await ClockService.clockout((me as any).id, clockId)
  }

  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <main>
        <button onClick={()=>getTimes()}>get times</button>
        <button onClick={()=>getMe()}>get me</button>
        <button onClick={()=>login()}>login</button>
        <button onClick={()=>logout()}>logout</button>
        <button onClick={()=>clockIn()}>clock in</button>
        <button onClick={()=>unFinished && clockOut((unFinished as any).id)}>clock out</button>
        <pre>{JSON.stringify(me, null, 2)}</pre>
        <table>
          <thead>
            <tr>
              <th>index</th>
              <th>{"startTime"}</th>
              <th>{"endTime"}</th>
              <th>{"totalTime"}</th>
              <th>{"project"}</th>
              <th>{"note"}</th>
              <th>{"id"}</th>
            </tr>
          </thead>
          <tbody>
          {clocks.map((clock: any, i) => {
            return (
              <tr style={{display: "flex"}}>
                <td>{i + 1}</td>
                <td>{clock.startTime}</td>
                <td>{clock.endTime}</td>
                <td>{(new Date(clock.endTime).getTime() - new Date(clock.startTime).getTime()) / 1000} seconds</td>
                <td>{clock.project}</td>
                <td>{clock.note}</td>
                <td>{clock.id}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Test;
