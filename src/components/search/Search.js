import React, { Component } from 'react';
import { Results } from './Results'
import { connect } from 'react-redux'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Radio, Collapse, InputGroup } from 'react-bootstrap';
import { formatResults, formatApiCallString } from '../../actions/yelpApiFormat'
import { RangeSlider } from 'reactrangeslider';

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
    event.preventDefault()
    let submission = formatApiCallString(this.state)
    fetch(`http://localhost:4000/yelpApiSearch/${submission}`,
      {
      method: 'get',
      headers: {
        Authorization: `${localStorage.jwt}`
      },
      data: "gold"
    }).then(res => res.json())
      .then(res => {
        let resultsFormatted = formatResults(res)
        var self = this
        let favorites_id = self.props.favorites.map((fav)=> {return fav.yelp_id})
        let new_array = resultsFormatted.filter((r)=> !favorites_id.includes(r.id))
        this.setState({
          results: new_array
        })
      })
    }

  render(){
      let options = <Button onClick={ ()=> this.setState({ open: !this.state.open })}>See More Options</Button>

    return(
        <div className="form">
          <form onSubmit={event => this.handleSubmit(event)}>
            <h1>Search</h1>
              <FormGroup controlId="formBasicText">
                  <ControlLabel>see controls for details</ControlLabel>
                  <InputGroup>
                      <FormControl  type="text"
                                    value={this.state.field}
                                    placeholder="Search by Name"
                                    onChange={this.handleChange.bind(null, "term")}
                                    />
                                  <FormControl  type="text"
                                    value={this.state.field}
                                    placeholder="Add a Location"
                                    onChange={this.handleChange.bind(null, "location")}
                                    />
                    <InputGroup.Button>
                       {this.state.open ? null : options}
                     </InputGroup.Button>
                  </InputGroup>
                  <FormControl.Feedback />
                  <HelpBlock></HelpBlock>

                    <Collapse in={this.state.open}>
                      <div>
                        <h1>option3</h1>
                      </div>
                    </Collapse>
                  <Button type="submit">
                      Submit!
                  </Button>
              </FormGroup>
        </form>
          <Results results={this.state.results} removeFromDisplay={this.removeFromDisplay}/>
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
