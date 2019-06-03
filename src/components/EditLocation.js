import React, { Component } from 'react'

export default class EditLocation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            switch: false,
            country: '',
            state_provence: '',
            city: '',
            imageUrl: ''

        }
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })

    }

    handleClick = () => {
        const { id } = this.props
        const { country, state_provence, city, imageUrl } = this.state
        let updatedLocation = {
            country,
            state_provence,
            city,
            imageUrl,
        }
        
        if(this.props.mightSee) {
        this.props.updateLocationMight(id, updatedLocation)
        }else{
        this.props.updateLocationMust(id, updatedLocation)
        }
        this.props.toggleEdit()
    }

    




    render() { 
        console.log(this.props)
        return (
            <div className='div'>
                <input
                    type="text"
                    name="country"
                    value={this.state.country}
                    placeholder="Country"
                    onChange={this.handleChange} />
                <input
                    type="text"
                    name="state_provence"
                    value={this.state.state_provence}
                    placeholder="State_provence"
                    onChange={this.handleChange} />
                <input
                    type="text"
                    name="city"
                    value={this.state.city}
                    placeholder="City"
                    onChange={this.handleChange} />
                <input
                    type="imgUrl"
                    name="imageUrl"
                    value={this.state.imageUrl}
                    placeholder="imageUrl"
                    onChange={this.handleChange} />
                <button onClick={this.handleClick}>update location </button>

            </div>
        )
    }
}