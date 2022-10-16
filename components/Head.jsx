import React from 'react'
import Head from 'next/head'

export default function newHead({title,description}) {
    const imgURL = `/api/og?title=${title}&context=${description}`
    return (
        <Head>
            <meta charset="utf-8" />
            <title>Eldoss Jogy</title>
            <link rel="icon" type="image/x-png" href="./icon.png"></link>
            <meta property="og:title" content="Eldoss Jogy's Portfolio Website" />
            <meta property="og:url" content="https://eldossjogy.vercel.app/" />
            <meta name="viewport" content="width=device-width" />
            <meta name="twitter:image:src" content={imgURL} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:image" content={imgURL} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="600" />
            <meta property="og:type" content="object" />
            <meta name="theme-color" content="#2b2d42" />
        </Head>
    )
}
