import React, { Component } from 'react';
import { Results } from './Results'
import { connect } from 'react-redux'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Radio, Collapse, InputGroup } from 'react-bootstrap';


export class Search extends Component {
  constructor(){
    super()
    this.state = {
      name: 'start',
      field: '',
      results: [],
      open: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(field, evt) {
    this.setState({
      [field]: evt.target.value
   });
 }

  handleSubmit(event) {
    event.preventDefault()
    fetch(`http://localhost:4000/zip_view/${this.state.field}`,
      {
      method: 'post',
      headers: {
        Authorization: `${localStorage.jwt}`,
      }
    }).then(res => res.json())
        .then(res => {
          var self = this
          let favorites_id = self.props.favorites.map((fav)=> {return fav.id})
          let new_array = res.filter((r)=> !favorites_id.includes(r.id))
          this.setState({
            results: new_array
          })
        })

  }

  render(){
    return(
        <div className="form">
          <form onSubmit={event => this.handleSubmit(event)}>
            <h1>Search</h1>
              <FormGroup controlId="formBasicText">
                  <ControlLabel>see controls for details</ControlLabel>
                  <InputGroup>
                      <FormControl  type="text"
                                    value={this.state.field}
                                    placeholder="Search by ZipCode"
                                    onChange={this.handleChange.bind(null, "field")}
                                    />
                      <InputGroup.Button>
                          <Button onClick={ ()=> this.setState({ open: !this.state.open })}>See More Options</Button>
                      </InputGroup.Button>
                  </InputGroup>
                  <FormControl.Feedback />
                  <HelpBlock></HelpBlock>
                    <Collapse in={this.state.open}>
                      <div>
                        <h1>option1</h1>
                        <h1>option2</h1>
                        <h1>option3</h1>
                      </div>
                    </Collapse>
                  <Button type="submit">
                      Submit!
                  </Button>
              </FormGroup>
        </form>
          <Results results={this.state.results} />
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
