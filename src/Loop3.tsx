import { useEffect, useState } from "react"

export default function Loop3() {

    const [loopVal, setLoopVal] = useState<number[]>([])


    useEffect(()=>{

        let loopV: number[] = [];

        let i: number = 1;
        do {
            loopV.push(i)
            i++;
        } while (i <= 50);

        setLoopVal(loopV)
    }, [])

  return (
    <>
        <p style={{fontSize : 18, marginTop : 20, marginBottom : 10, fontWeight : 'bolder'}}>Tugas 3</p>
    
    <div>Loop 1 sampai 50</div>
    <div style={{display : "flex", fontSize : 14, gap : '8px'}}>
        {loopVal.map((v, i)=>(
            <>
                <p key={i}>{v},</p>
            </>
        ))}
    </div>
    </>
  )
}
