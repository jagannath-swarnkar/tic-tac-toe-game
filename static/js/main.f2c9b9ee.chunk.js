(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(3),r=n.n(s),l=n(4),u=n(5),c=n(7),m=n(6),d=n(1),o=n(8),h=(n(14),function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={item:[],user:"X",userX:[],userO:[],winner:""},n.game=n.game.bind(Object(d.a)(n)),n.winner=n.winner.bind(Object(d.a)(n));n.state.winner;return n}return Object(o.a)(t,e),Object(u.a)(t,[{key:"winner",value:function(){var e=[["0","1","2"],["3","4","5"],["6","7","8"],["0","3","6"],["1","4","7"],["2","5","8"],["0","4","8"],["2","4","6"]];for(var t in e){var n=0,i=0,a=this.state.userX,s=!0,r=!1,l=void 0;try{for(var u,c=e[t][Symbol.iterator]();!(s=(u=c.next()).done);s=!0){var m=u.value;if(a.includes(m))n+=1;else{if(!this.state.userO.includes(m))break;i+=1}}}catch(d){r=!0,l=d}finally{try{s||null==c.return||c.return()}finally{if(r)throw l}}3==n?(this.setState({winner:"X"}),document.getElementById("userguide").style.display="none",document.getElementById("userwinner").style.display="block"):3==i&&(this.setState({winner:"O"}),document.getElementById("userguide").style.display="none",document.getElementById("userwinner").style.display="block")}}},{key:"game",value:function(e){var t=e.target.id,n=this.state.item,i=this.state.userX,a=this.state.userO,s=this.state.winner;"X"!=this.state.user||i.includes(t)||a.includes(t)||""!=s?"O"!=this.state.user||a.includes(t)||i.includes(t)||""!=s||(n[t]="O",a.push(t),this.setState({item:n,user:"X",userO:a}),this.winner()):(n[t]="X",i.push(t),this.setState({item:n,user:"O",userX:i}),this.winner())}},{key:"Restart",value:function(){document.location.reload()}},{key:"render",value:function(){return a.a.createElement("div",{className:"structure"},a.a.createElement("h2",{id:"userguide"},"Next Player : ",this.state.user),a.a.createElement("table",null,a.a.createElement("tr",null,a.a.createElement("td",{id:"0",onClick:this.game},this.state.item[0]),a.a.createElement("td",{id:"1",onClick:this.game},this.state.item[1]),a.a.createElement("td",{id:"2",onClick:this.game},this.state.item[2])),a.a.createElement("tr",null,a.a.createElement("td",{id:"3",onClick:this.game},this.state.item[3]),a.a.createElement("td",{id:"4",onClick:this.game},this.state.item[4]),a.a.createElement("td",{id:"5",onClick:this.game},this.state.item[5])),a.a.createElement("tr",null,a.a.createElement("td",{id:"6",onClick:this.game},this.state.item[6]),a.a.createElement("td",{id:"7",onClick:this.game},this.state.item[7]),a.a.createElement("td",{id:"8",onClick:this.game},this.state.item[8]))),a.a.createElement("h2",null,a.a.createElement("button",{onClick:this.Restart},"Restart")),a.a.createElement("h2",{id:"userwinner"},"Congratulation ! ",a.a.createElement("br",null),a.a.createElement("span",null,"Your Winner : ",this.state.winner)))}}]),t}(i.Component));r.a.render(a.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f2c9b9ee.chunk.js.map