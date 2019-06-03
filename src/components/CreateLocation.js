import React, { Component } from 'react'
import './CreateLocation.css'

export default class CreateLocation extends Component {
    constructor(props){
        super(props)

        this.state = {
            mustSee: false,
            country: "",
            state_provence: "",
            city: "",
            imageUrl: ""
        }
    }

    handleChange = e => {
        let { value, name } = e.target

        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let newLocation = this.state

        if(this.state.mustSee) { 
            this.props.createLocationMust(newLocation) 
        } else {
            this.props.createLocationMight(newLocation)
        }
        this.setState({
            mustSee: false,
            country: "",
            state_provence: "",
            city: "",
            imageUrl: ""
        })
    }

    handleToggle = () => {
        this.setState({
            mustSee: !this.state.mustSee
        })
    }



    render(){
        console.log(this.state.mustSee)
        return(
            <div id='Createlocation'>
                <input className='input'
                    type="text"
                    name="country"
                    value={this.state.country}
                    placeholder="Country"
                    onChange={this.handleChange}/>
                <input className='input'
                    type="text"
                    name="state_provence"
                    value={this.state.state_provence}
                    placeholder="State or Provence"
                    onChange={this.handleChange}/>
                <input className='input'
                   type="text"
                    name="city"
                    value={this.state.city}
                    placeholder="City"
                    onChange={this.handleChange}/>
                <input className='input'
                    type="text"
                    name="imageUrl"
                    value={this.state.imageUrl}
                    placeholder="imageUrl"
                    onChange={this.handleChange}/>
                <input type='checkbox' className='input'
                onChange={this.handleToggle} value={this.state.mustSee}>
                </input>
                <button className='input' onClick={this.handleClick}>submit</button>

            </div>
        )
}}