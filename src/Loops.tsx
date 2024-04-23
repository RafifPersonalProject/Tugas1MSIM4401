import {useState, useEffect} from 'react'

export default function Loops() {

    const [oddValue, setOddValue] = useState<number[]>([]);
    const [evenValue, setEvenValue] = useState<number[]>([]);
    const showIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        let oddV: number[] = [];
        let evenV: number[] = [];

        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                oddV.push(i);
            } else {
                evenV.push(i);
            }
        }

        setOddValue(oddV);
        setEvenValue(evenV);
    }, []);

    return (
        <>
            <div className="">
            <p style={{fontSize : 18, marginTop : 20, marginBottom : -20, fontWeight : 'bolder'}}>Tugas 1</p>
                {/* Iterate through showIndex array to display results */}
                {showIndex.map((index) => (
                    <div key={index}>
                        {/* Display iteration number */}
                        <br />
                        Perulangan 10 ke-{index}:
                        <br />
                        {/* Display values based on condition */}
                        {index % 2 !== 0 ? (
                            // If odd index, display odd values
                            oddValue.slice((index - 1) * 5, index * 5).join('\n')
                        ) : (
                            // If even index, display even values
                            evenValue.slice((index - 1) * 5, index * 5).join('\n')
                        )}
                        <br />
                        {/* Display sum of values */}
                        --------------------------<br />
                        Jumlah: {index % 2 !== 0 ? (
                            // If odd index, calculate sum of odd values
                            oddValue.slice((index - 1) * 5, index * 5).reduce((acc, val) => acc + val, 0)
                        ) : (
                            // If even index, calculate sum of even values
                            evenValue.slice((index - 1) * 5, index * 5).reduce((acc, val) => acc + val, 0)
                        )}
                        <br />
                    </div>
                ))}
            </div>
        </>
    );
}
