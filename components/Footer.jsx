import React from "react";
import { Icon } from '@iconify/react';

function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer>
        <div>
            <a className={"links"} href="mailto:eldossjogy@gmail.com" target="_blank" rel="noopener noreferrer">
                <Icon className={"socialMedia"} icon="carbon:email" width="38" height="38" cursor="pointer" />
            </a>
            <a className={"links"} href="https://github.com/eldossjogy" target="_blank" rel="noopener noreferrer">
                <Icon className={"socialMedia"} icon="akar-icons:github-fill" width="35" height="35" cursor="pointer" />
            </a>
            <a className={"links"} href="https://www.linkedin.com/in/eldossjogy/" target="_blank" rel="noopener noreferrer">
                <Icon className={"socialMedia"} icon="akar-icons:linkedin-box-fill" width="35" height="35" cursor="pointer" />
            </a>
        </div>
        <div>©{currentYear} EldossJogy </div></footer>
}
export default Footer