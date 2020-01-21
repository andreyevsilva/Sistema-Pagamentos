import {combineReducers} from 'redux'
import {DashboardReducer} from '../dashboard/dashboardReducer'
import {TabReducer} from '../tab/tabReducer'

import {bindActionCreator} from 'redux'
import {connect} from 'react-redux'

const rootReducer = combineReducers({
    //dashboard: () => ({summary:{credito:100,debito:200}})
    dashboard: DashboardReducer,
    tab:TabReducer


})

const mapStateToProps = state => ({tab: state.tab})
const mapToDispatchToProps = dispatch => bindActionCreators({selec})
export default rootReducer

