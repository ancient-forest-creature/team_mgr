import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = (props) => {
    const { managePlayerStatus, setManagePlayerStatus } = props;
    const [mPStyle, setMPStyle] = useState({});
    const [mPSStyle, setMPSStyle] = useState({});
    const theStyle ={fontWeight: "bold",};

    useEffect(() => {
        if(managePlayerStatus) {
            setMPStyle({});
            setMPSStyle(theStyle);
        } else {
            setMPStyle(theStyle);
            setMPSStyle({});
        }
    }, [managePlayerStatus]);
    return (
        <div className="my-4 h1">
            <span style={mPStyle}>
                <Link to="/players/list">Manage Players | </Link>
            </span>
            <span style={mPSStyle}>
                <Link to="/status/game/1">Manage Player Status</Link>
            </span>
        </div>

    );

};

export default Nav;