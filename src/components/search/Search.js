import React, { Component } from 'react';
import { Results } from './Results'
import { connect } from 'react-redux'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Radio, Collapse, InputGroup, Row, Col } from 'react-bootstrap';
import { formatResults, formatApiCallString } from '../../actions/yelpApiFormat'
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
     this.setState({
       results: this.state.results.filter((r) => r.yelp_id != id)
     })
   }

  handleSubmit(event) {
    const foreignApi = 'https://mysterious-meadow-52290.herokuapp.com/yelpApiSearch/'
    let localApi = 'http://localhost:4000/yelpApiSearch/'
    event.preventDefault()
    let submission = formatApiCallString(this.state)
    fetch(foreignApi + `${submission}`,
      {
      method: 'get',
      headers: {
        Authorization: `${localStorage.jwt}`
      }
    }).then(res => res.json())
      .then(res => {
        let resultsFormatted = formatResults(res)
        var self = this
        let favorites_id = self.props.favorites.map((fav)=> {return fav.yelp_id})
        let new_array = resultsFormatted.filter((r)=> !favorites_id.includes(r.yelp_id))
        this.setState({
          results: new_array
        })
      })
    }

  render(){

      let searchBar = <div>
                          <form onSubmit={event => this.handleSubmit(event)} className="searchForm">
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
                      </div>
    return(
      <div>
        <Sticky style={{zIndex: 2000}}>
          {searchBar}
        </Sticky>
        <Row>
          <Results results={this.state.results} removeFromDisplay={this.removeFromDisplay}/>
        </Row>
    </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    favorites: state.favorites.restaurants
  }
}

export const ConnectedSearch = connect(mapStateToProps)(Search)
