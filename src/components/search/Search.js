import React, { Component } from 'react';
import { ConnectedResults } from './Results'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FormGroup, ControlLabel, FormControl, Button, Collapse, InputGroup, Row, Col } from 'react-bootstrap';
import { searchYelp, removeFromResults, formatApiCallString } from '../../actions/search'
import { StickyContainer, Sticky } from 'react-sticky';

export class Search extends Component {
  constructor(){
    super()
    this.state = {
      term: '',
      latitude: null,
      longitude: null,
      location: null,
      category: 'food',
      radius: 200,
      price: null,
      results: [],
      open: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.removeFromDisplay = this.removeFromDisplay.bind(this)
  }

  handleChange(field, evt) {
      this.setState({
        [field]: evt.target.value
     });
   }

   removeFromDisplay(id) {
     removeFromResults(id)
   }

  handleSubmit(event) {
    event.preventDefault()
    let submission = formatApiCallString(this.state)
    return searchYelp(submission, this.props.favorites)
    }

  render(){
      let options = <Button onClick={ ()=> this.setState({ open: !this.state.open })}>See More Options</Button>

      let searchBar = <Row className="resultsContainer" style={{justifyContent: 'center'}}>
                          <form style={{justifyContent: 'center'}} onSubmit={event => this.handleSubmit(event)}>
                              <FormGroup >
                                  <Col sm={2}>
                                    Name
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={10}>
                                      <FormControl  type="text"
                                                    value={this.state.field}
                                                    placeholder="Search by Name"
                                                    onChange={this.handleChange.bind(null, "term")}
                                                    />
                                  </Col>
                              </FormGroup>
                              <FormGroup >
                                  <Col sm={2}>
                                    Location
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={10}>
                                    <FormControl  type="text"
                                      value={this.state.field}
                                      placeholder="Add a Location"
                                      onChange={this.handleChange.bind(null, "location")}
                                      />
                                  </Col>
                              </FormGroup>
                              <Button type="submit">
                                Search
                              </Button>
                            </form>
                      </Row>
    return(
      <div >
        <Sticky>
          {searchBar}
        </Sticky>
        <ConnectedResults removeFromDisplay={this.removeFromDisplay}/>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    favorites: state.favorites.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchYelp: searchYelp,
    removeFromResults: removeFromResults
  }, dispatch)
}

export const ConnectedSearch = connect(mapStateToProps, mapDispatchToProps)(Search)
