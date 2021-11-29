import React, { Component } from 'react'

class NewBoxForm extends Component {
    render() {
        return (
            <form>
                <div>
                    <label>Enter Height </label>
                    <input></input>
                </div>
                <div>
                    <label>Enter Width </label>
                    <input></input>
                </div>
                <div>
                    <label>Enter Color </label>
                    <input></input>
                </div>
            </form>
        )
    }
}

export default NewBoxForm