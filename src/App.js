import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      item:[],
      user:"X",
      userX:[],
      userO:[],
      winner:"",
      count:1
    }
    this.game = this.game.bind(this);
    this.winner = this.winner.bind(this);
  }
  winner(drow){    
    var count=this.state.count;
    this.setState({count:count+1})
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
      if(countX===3){
        this.setState({winner:"X"})
        document.getElementById('userguide').style.display="none";
        document.getElementById('userwinner').style.display="block";
        document.getElementById('drow').style.display="none";
      }else if(countO===3){
        this.setState({winner:"O"})
        document.getElementById('userguide').style.display="none";
        document.getElementById('userwinner').style.display="block";
        document.getElementById('drow').style.display="none";
      }else if(drow && this.state.winner===""){
      
        document.getElementById('userguide').style.display="none";
        document.getElementById('drow').style.display="block";
      }
    }
  }
  game(event){
    
    var id = event.target.id;
    var itemInstance = this.state.item;
    var userXIns = this.state.userX;
    var userOIns = this.state.userO;
    var winnerInstance = this.state.winner;

    if((this.state.user==="X") && (!userXIns.includes(id))&& (!userOIns.includes(id)) && winnerInstance===""){
      itemInstance[id]="X";
      userXIns.push(id);
      this.setState({
        item:itemInstance,
        user:"O",
        userX:userXIns
      })
      this.winner();
    }
    else if((this.state.user==="O") && (!userOIns.includes(id)) && (!userXIns.includes(id)) && winnerInstance===""){
      itemInstance[id]="O";
      userOIns.push(id);
      this.setState({
        item:itemInstance,
        user:"X",
        userO:userOIns
      })
      this.winner();
    }if(this.state.count===9){console.log('this.state.count')
      console.log('hello');
      
      var drow=true
      this.winner(drow);  
    }console.log(this.state.count)
  }
  Restart(){
    document.location.reload()
  }
  render(){

    return(<Card>
      <div className="structure">
        <h2 id="userguide">Next Player : {this.state.user}</h2>
        <table><tbody>
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
          </tbody></table>
        <h2>
          {/* <button onClick={this.Restart}>Restart</button> */}
          <Button variant="contained" 
            color="primary" 
            fullWidth 
            onClick={this.Restart}>
            Restart
          </Button>
        </h2>
        <h2 id="userwinner">Congratulation ! <br/><span style={{color:'green'}}>Your Winner : {this.state.winner}</span></h2>
        <h2 id="drow">Oops ! <br/><span style={{color:'green'}}>Match draw ! Please try again.</span></h2>
        </div></Card>
    )
  }



}

export default App;
