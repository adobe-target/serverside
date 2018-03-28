const React = require("react");

const Navigation = () => {
  return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a className="navbar-brand" href="#">Adobe Target</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
             <ul className="nav navbar-nav navbar-right">
                <li className="ab"><a href="/ab">AB</a></li>
                <li className="xt"><a href="/xt">XT</a></li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

module.exports = Navigation;
