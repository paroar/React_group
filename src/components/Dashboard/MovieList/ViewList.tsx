import React from 'react';
import { Link } from 'react-router-dom';

const ViewList = (path: any) => {
    return (
        <div className="view-btn">
            <button className="view-btn">
                <Link to={`/dashboard/lists/${path}`}/>
            </button>
        </div>
    )
}

export default ViewList;