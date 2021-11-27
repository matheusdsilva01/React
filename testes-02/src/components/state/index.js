import React, { useState } from 'react'

export default function Index() {
    const [contador, setContador] = useState(1);

    return (
        <>
            <button onClick={() => setContador(contador + 1)}>aumentar</button>
            <p>{contador}</p>
            <button onClick={() => setContador(contador - 1)} >diminuir</button>
        </>
    )
}
