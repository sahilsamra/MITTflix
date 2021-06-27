import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

function Header (props) {
  
  const { history } = props

  const [searchKey, setSearchKey] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/search?query=${ searchKey }`)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setSearchKey(e.target.value)
  }

  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
          alt="netflix-font"
          border="0"
        />
      </Link>
      <div id="navigation" className="navigation">
        <nav>
          <ul>
            <li><Link to="/my-watch-list">Watch List</Link></li>
          </ul>
        </nav>
      </div>
      <form id="search" className="search" onSubmit={ handleSubmit }>
        <input type="search" placeholder="Search for a title..." value={ searchKey } onChange={(e) => handleChange(e)}/>
        <div className="searchResults"></div>
      </form>
    </header>
  );

}

export default React.memo(withRouter(Header))
