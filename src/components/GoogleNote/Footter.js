import React from 'react';

const Footter = () => {
    return (
        <div>
            <nav className="navbar text-white navbar-dark fixed-bottom bg-dark">
                <div className="container">
                   <div className="pull-right">
                    <i class="pr-1 fa fa-copyright" aria-hidden="true"></i>
                        {new Date().getFullYear()} Copyright | Google Note
                   </div>
                </div>
            </nav>
        </div>
    );
};

export default Footter;