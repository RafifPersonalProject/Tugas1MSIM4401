import { useEffect, useState } from "react"

export default function Loop2() {

    const [loopVal, setLoopVal] = useState<number[]>([])


    useEffect(()=>{

        let loopV: number[] = [];

        let i: number = 4;
        do {
            loopV.push(i)
            i++;
        } while (i <= 20);

        setLoopVal(loopV)
    }, [])

  return (
    <>
    <p style={{fontSize : 18, marginTop : 20, marginBottom : 10, fontWeight : 'bolder'}}>Tugas 2</p>
    
    <div>NIM : 043340244</div>
    <div style={{display : "flex", gap : '8px'}}>
        {loopVal.map((v, i)=>(
            <>
                <p key={i}>{v},</p>
            </>
        ))}
    </div>
    </>
  )
}
