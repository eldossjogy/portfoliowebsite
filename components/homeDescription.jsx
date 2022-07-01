import React, { useState, useEffect } from "react";
import parse from 'html-react-parser'
import { useTheme } from 'next-themes'

function Description(props) {
    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    if (theme === "light") {
        return <div>
            <h2 className="homeHeading">{props.title}</h2>
            <p> <mark>
                {parse(props.content)}
            </mark>
            </p>
        </div>
    }

    return <div>
        <h2 className="homeHeading">{props.title}</h2>
        <p>
            {parse(props.content)}
        </p>
    </div>

}

export default Description