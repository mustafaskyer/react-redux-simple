import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {findDOMNode} from 'react-dom'

//make an action ,addPlayer
import {addPlayer,deletePlayer} from '../actions/playersActions'
import Numbers from './Numbers'

class App extends React.Component{
    
    addNewPlayer(){
        const player = [{
            id:findDOMNode(this.refs.id).value,
            name:findDOMNode(this.refs.name).value,
            team:findDOMNode(this.refs.team).value
        }];
         this.props.addPlayer(player);
    }
    
    onDelete(){
        const playerId = findDOMNode(this.refs.deletedid).value
        this.props.deletePlayer(playerId);
    }

    render(){
        
        return(
            <div>
                <center>
                    <h1>MustafaSkir</h1>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel dignissimos ex at? Doloribus esse tempore eveniet sequi fugiat velit at cumque maiores hic dolorem quisquam, porro officiis labore, dignissimos, culpa!</p> */}
                    <h3>Testing Redux with State and Dispatch ... :)</h3>
                    <h3>Dispatch Actions from form</h3>
                    <input type="text" ref="id" placeholder="player number"/> <br />
                    <input type="text" ref="name" placeholder="player name"/> <br />
                    <input type="text" ref="team" placeholder="player team"/> <br />
                    <button onClick={this.addNewPlayer.bind(this)}>Add</button> <br />
                    <hr style={{width:'150px'}}/>
                    <h3>Dispatch Action Delete</h3>
                    <input type="text" ref="deletedid" placeholder="delete player by id"/> <br />
                    <button onClick={this.onDelete.bind(this)}>Delete</button>
                    <h3>View Data From Reducer State ...</h3>
                    <hr style={{width:'150px'}}/>
                    {this.props.players.map(function(arr){
                        return (<div key={arr.id}>
                            <p>
                                <b>id</b>: {arr.id} <br />
                                <b> Name </b>{arr.name},<br />
                                <b>Team</b>: {arr.team}</p>
                                <hr style={{width:'150px'}}/>
                        </div>);
                    })}
                    <Numbers />
                </center>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        players:state.players.players
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {
            addPlayer:addPlayer,
            deletePlayer:deletePlayer
        },
        dispatch
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

