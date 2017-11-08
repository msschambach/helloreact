import React from 'react';
import {MDCSelect} from '@material/select';

export default class ClassySelect extends React.Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    getOptions(){
        
        if (typeof this.props.options === 'string')
            return this.props.options.split(',');
        else
            return this.props.options

    }

    componentDidMount() {
        const $this = this;
        const select = new MDCSelect(window.document.querySelector('#' + $this.props.id));

        select.listen('MDCSelect:change', () => {
            $this.setState((prevState, props) => {
                return {
                    selected: {
                        index: select.selectedIndex,
                        value: select.value
                    }
                };
            })
        });
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render(){

        return (

            <div id={this.props.id} className={'mdc-select ' + this.props.className} role="listbox" tabIndex="0">
                <span className="mdc-select__selected-text">{this.props.prompt}</span>
                <div className="mdc-simple-menu mdc-select__menu">
                    <ul className="mdc-list mdc-simple-menu__items">
                        {this.getOptions().map(
                            (option, index) => {
                                return (
                                    <li className="mdc-list-item" role="option" key={index} tabIndex='0'>
                                        {option}
                                    </li>
                                )
                            }
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}