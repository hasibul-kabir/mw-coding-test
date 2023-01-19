import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <div className="flex justify-center mt-5">
                <ul className="flex gap-5">
                    <li className="bg-slate-400 rounded-full px-3 py-2">
                        <NavLink to='/problem-1' >Problem - 1</NavLink>
                    </li>
                    <li className="bg-slate-400 rounded-full px-3 py-2">
                        <NavLink to='/problem-2'>Problem - 2</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Menu;