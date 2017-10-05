var React=require('react');
var {Link, IndexLink}=require('react-router');

var Navigation = ()=>{
    return (
        <div>
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active-Link" >Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active-Link">Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                           Created by <a href="https://adityaacharya001.github.io/" target="_blank">Aditya Acharya</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

module.exports= Navigation;