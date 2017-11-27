/**
 * We need to getState from redux and dispatch an action
 */
"use strict"
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

// import actions methods
import {add,sub} from '../actions/numbersActions'

class Numbers extends React.Component{
    componentWillMount(){
        const arr = [9,10];
        this.props.add(arr);
        this.props.sub(9)
        this.props.sub(17)
        this.props.add([30,33]);
    }
    render(){
        console.log(this.props.numbers)
        return(
            <div>
                <center>
                    <h1>Numbers Component</h1>
                    <code>Here we do some <b>add</b> AND <b>sub</b> methods </code>
                    <br />
                    <code>you can find all proccess in backend <b>Numbers</b> Component</code>
                    <p>{this.props.numbers + ', '}</p>
                </center>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{numbers:state.numbers}
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({add:add,sub:sub},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Numbers);