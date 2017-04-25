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

                  const sideBar = (
                                      <ButtonGroup vertical block style={{left: this.state.offset, borderRadius: '0px'}}>
                                          <Button key={1} className="verticalNavButton"
                                                  onClick={this.expandMenu}>
                                            <Row>
                                              <Col xs ={3} sm={3} md={3}>PICKY</Col>
                                              <Col xs={7} sm={7} md={7}></Col>
                                            </Row>
                                          </Button>
                                          <Button key={2} className="verticalNavButton"
                                                  onClick={this.handleClick.bind(null, "Map")}>
                                            <Row>
                                              <Col xs={3} sm={3} md={3}>Maps</Col>
                                              <Col xs={7} sm={7} md={7}></Col>
                                              <Col xs={1} sm={1} md={1}>
                                                <img style={{align: 'right', height: '25px'}}src={require('../../images/maps.png')}></img>
                                              </Col>
                                            </Row>
                                          </Button>
                                          <Button key={3} className="verticalNavButton"
                                                  onClick={this.handleClick.bind(null, "Search")}>
                                            <Row>
                                              <Col xs={3} sm={3} md={3}>Search</Col>
                                              <Col xs={7} sm={7} md={7}></Col>
                                              <Col xs={1} sm={1} md={1}>
                                                <img style={{align: 'right', height: '25px'}}src={require('../../images/search.png')}></img>
                                              </Col>
                                            </Row>
                                          </Button>
                                          <Button key={4} className="verticalNavButton"
                                                  onClick={this.handleClick.bind(null, "Favorites")}>
                                            <Row>
                                              <Col xs={3} sm={3} md={3}>Favorites</Col>
                                              <Col xs={7} sm={7} md={7}></Col>
                                              <Col xs={1} sm={1} md={1}>
                                                <img style={{align: 'right', height: '25px'}}src={require('../../images/fav.png')}></img>
                                              </Col>
                                            </Row>
                                          </Button>
                                          <Button key={5} className="verticalNavButton"
                                                  onClick={this.handleClick.bind(null, "Roulette")}>
                                            <Row>
                                              <Col xs={3} sm={3} md={3}>Roulette</Col>
                                              <Col xs={7} sm={7} md={7}></Col>
                                              <Col xs={1} sm={1} md={1}>
                                                <img style={{align: 'right', height: '25px'}}src={require('../../images/roulette.png')}></img>
                                              </Col>
                                            </Row>
                                          </Button>
                                          <Button key={6} className="verticalNavButton"
                                                  onClick={this.logout}>
                                            <Row>
                                              <Col xs={3} sm={3} md={3}>Lougout</Col>
                                              <Col xs={7} sm={7} md={7}></Col>
                                              <Col xs={1} sm={1} md={1}>
                                                <img style={{align: 'right', height: '25px'}}src={require('../../images/logout.png')}></img>
                                              </Col>
                                            </Row>
                                          </Button>
                                    </ButtonGroup>
                                    );
