import React, { Component } from 'react'
import {bindActionCreators} from 'redux'

import tabActions from '../tab/tabActions'

class TabHeader extends Component {
    render() {
        return (
            <li>
                <a href='javascript:;' data-toggle='tab' data-target={this.props.target}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        )
    }
}
const mapStateToProps = state =>({tab: state.tab})
export default TabHeader