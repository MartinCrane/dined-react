const horizontal = <div>
                    <Navbar className='navStyle'>
                      <Navbar.Header>
                        <Navbar.Brand >
                          <a href="#" className="navText">DINER</a>
                        </Navbar.Brand>
                      </Navbar.Header>
                      <Nav>
                        <NavDropdown className="navText" eventKey={3} onSelect={(event) => {this.changeNavigation(event)}} title="where to?" id="basic-nav-dropdown">
                          <MenuItem className="navText" eventKey={"favorites"} >Favorites</MenuItem>
                          <MenuItem className="navText" eventKey={"map"}>Map</MenuItem>
                          <MenuItem className="navText" eventKey={"search"}>Search</MenuItem>
                          <MenuItem className="navText" eventKey={"roulette"}>Roulette</MenuItem>
                        </NavDropdown>
                      </Nav>
                      <Nav>
                        <NavItem className="navText" >{this.props.email}</NavItem>
                      </Nav>
                      <Nav >
                        <NavItem className="navText" >{this.props.login ? logout : null}</NavItem>
                      </Nav>
                    </Navbar>
                  </div>

  const buttons = <ButtonToolbar>
                    <Button
                      onClick={this.handleClick.bind(null, "favorites")}>Favories</Button>
                    <Button
                      onClick={this.handleClick.bind(null, "map")}>Map</Button>
                    <Button
                      onClick={this.handleClick.bind(null, "search")}>Search</Button>
                    {this.props.login ? <Button onClick={(event) => this.logout(event)}>Logout</Button> : null}
                  </ButtonToolbar>

  const buttons = <ButtonToolbar >
                    <Button
                      onClick={this.handleClick.bind(null, "favorites")}>Favories</Button>
                    <Button
                      onClick={this.handleClick.bind(null, "map")}>Map</Button>
                    <Button
                      onClick={this.handleClick.bind(null, "search")}>Search</Button>
                    {this.props.login ? <Button onClick={(event) => this.logout(event)}>Logout</Button> : null}
                  </ButtonToolbar>
