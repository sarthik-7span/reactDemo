import React from 'react'
import Text, { Text1, Text2, Text3, name } from "../component/default";
function Demo() {
    return (
        <>
            <h1>Demo component</h1>
            <h1>{Text}//{Text1}//{Text2}</h1>
            <p>{name()}</p>
        </>
    )
}

export default Demo