import React from "react";
import { Icon } from '@iconify/react';
import { useRouter } from "next/router";

function Footer() {
    const currentYear = new Date().getFullYear();
    const router = useRouter();
    return <footer>
        <div>
            <Icon className={"socialMedia"} icon="carbon:email" width="38" height="38" onClick={() => { router.push("mailto:eldossjogy@gmail.com") }} cursor="pointer" />


            <Icon className={"socialMedia"} icon="akar-icons:github-fill" width="35" height="35" onClick={() => { router.push("https://github.com/eldossjogy") }} cursor="pointer" />


            <Icon className={"socialMedia"} icon="akar-icons:linkedin-box-fill" width="35" height="35" onClick={() => { router.push("https://www.linkedin.com/in/eldossjogy/") }} cursor="pointer" />

        </div>
        <div>©{currentYear} EldossJogy </div></footer>
}
export default Footer