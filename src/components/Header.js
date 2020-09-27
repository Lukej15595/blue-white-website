import React from "react";

function MyHeader() {
    return (
        <div class="header-body">
            <ul class="header-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        About Me
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Contact
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Projects
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        Experience
                    </a>
                </li>
            </ul>
            <h1 class="title-name">Luke Jacobs</h1>
        </div>
    );
}

export default MyHeader;
