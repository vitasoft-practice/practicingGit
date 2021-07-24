import React from "react";
import Link from "next/link";

export default function FirstPost(){
    return (<div>
        <h1>next js</h1>
        <br/>
        <p>
        Generally, we recommend that you don’t reuse the same CSS classes across different components. For example, instead of using a .Button CSS class in components, we recommend creating acomponent with its own .Button styles, that both  can render (but not inherit).
        </p>
        <br/>
        <Link href="/"><a>Back</a></Link>
    </div>)
}