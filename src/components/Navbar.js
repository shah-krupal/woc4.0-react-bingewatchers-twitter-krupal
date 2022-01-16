import React from 'react'

const Navbar = () => {
    return (
        <div>

          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"style={{color: "green", fontFamily:"serif", fontWeight:"bolder", fontSize:40}}>
                <img src="https://cdn-icons-png.flaticon.com/512/81/81725.png" alt width={70} height={56} className="d-inline-block align-text-top" />
                Bingewatchers-Twitter
              </a>
            </div>
          </nav>

        </div>
    )
}

export default Navbar