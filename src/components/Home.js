import React from 'react'
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex  h-screen items-center justify-center">
            <div className="">
                <ul className="flex-column gap-3 mb-3 nav nav-pills content-center">
                    <li className="nav-item">
                        <NavLink to='/problem-1' className="">Problem - 1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/problem-2' className="nav-link active">Problem - 2</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
