import React from "react";
const portrait = require("../images/portrait.JPG");
const msi = require("../images/msi.jpg");

function MyMainContent() {
    return (
        <div class="main-content">
            <p class="main-para">
                Magna adipisicing dolor eiusmod cupidatat fugiat tempor tempor
                est est voluptate mollit nisi. Cupidatat quis velit cupidatat
                est fugiat excepteur ullamco occaecat cillum anim aliquip ex.
                Elit sint aliqua eiusmod exercitation commodo laborum ea minim
                minim dolor ullamco minim. Non nulla adipisicing pariatur ipsum
                aliqua sit cillum eiusmod voluptate nisi ut nostrud. Cupidatat
                dolore voluptate dolore labore aliquip eiusmod duis incididunt
                sint non eiusmod ex ut sunt.
            </p>
            <div class="box-container">
                <div class="box">
                    <p class="box-text">Stuff about me</p>
                    <img class="portrait" src={portrait} alt="Portrait of me" />
                </div>
                <div class="box">
                    <p class="box-text">Another thingy</p>
                    <img class="portrait" src={msi} alt="graphics card" />
                </div>
            </div>
        </div>
    );
}

export default MyMainContent;
