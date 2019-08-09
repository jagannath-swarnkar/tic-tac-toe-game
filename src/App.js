import React,{Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      item:[],
      user:"X",
      userX:[],
      userO:[],
      winner:""
    }
    this.game = this.game.bind(this);
    this.winner = this.winner.bind(this);
  }
  winner(){
    var list=[["0","1","2"],["3","4","5"],["6","7","8"],["0","3","6"],["1","4","7"],["2","5","8"],["0","4","8"],["2","4","6"]];
    for(var i in list){
      var countX = 0;
      var countO = 0;
      var userXIns = this.state.userX;
      for(var j of list[i]){
        if(userXIns.includes(j)){
          countX+=1
        }else if(this.state.userO.includes(j)){
          countO+=1
        }
        else{
          break;
        }
      }
      if(countX==3){
        this.setState({winner:"X"})
        document.getElementById('userguide').style.display="none";
        document.getElementById('userwinner').style.display="block";
      }else if(countO==3){
        this.setState({winner:"O"})
        document.getElementById('userguide').style.display="none";
        document.getElementById('userwinner').style.display="block";
      }
    }
  }
  game(event){
    var id = event.target.id;
    var itemInstance = this.state.item;
    var userXIns = this.state.userX;
    var userOIns = this.state.userO;
    var winnerInstance = this.state.winner;

    if((this.state.user=="X") && (!userXIns.includes(id))&& (!userOIns.includes(id)) && winnerInstance==""){
      itemInstance[id]="X";
      userXIns.push(id);
      this.setState({
        item:itemInstance,
        user:"O",
        userX:userXIns
      })
      this.winner();
    }
    else if((this.state.user=="O") && (!userOIns.includes(id)) && (!userXIns.includes(id)) && winnerInstance==""){
      itemInstance[id]="O";
      userOIns.push(id);
      this.setState({
        item:itemInstance,
        user:"X",
        userO:userOIns
      })
      this.winner();
    }
  }
  render(){

    return(
      <div className="structure">
        <h2 id="userguide">Next Player : {this.state.user}</h2>
        <h2 id="userwinner">Winner : {this.state.winner}</h2>
        <table>
          <tr>
            <td id="0" onClick={this.game}>{this.state.item[0]}</td>
            <td id="1" onClick={this.game}>{this.state.item[1]}</td>
            <td id="2" onClick={this.game}>{this.state.item[2]}</td>
          </tr>
          <tr>
            <td id="3" onClick={this.game}>{this.state.item[3]}</td>
            <td id="4" onClick={this.game}>{this.state.item[4]}</td>
            <td id="5" onClick={this.game}>{this.state.item[5]}</td>
          </tr>
          <tr>
            <td id="6" onClick={this.game}>{this.state.item[6]}</td>
            <td id="7" onClick={this.game}>{this.state.item[7]}</td>
            <td id="8" onClick={this.game}>{this.state.item[8]}</td>
          </tr>
        </table>
      </div>
    )
  }



}

export default App;
