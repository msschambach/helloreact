import React from 'react'

export default class ClassyForm extends React.Component {

    render(){
        return (
            <form id={this.props.id} name={this.props.name} className={this.props.className}>
                {this.props.children}
            </form>
        )
    }
}