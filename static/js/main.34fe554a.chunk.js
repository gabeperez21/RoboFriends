(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),s=a.n(l);a(12);var o=e=>{let{id:t,name:a,email:n}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n))))};var c=e=>{let{robots:t}=e;return r.a.createElement("div",null,t.map((e,a)=>r.a.createElement(o,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})))};var i=e=>{let{searchfield:t,searchChange:a}=e;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:a}))};var h=e=>r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children);a(13);class m extends n.Component{constructor(){super(),this.onSearchChange=e=>{this.setState({searchField:e.target.value})},this.state={robots:[],searchField:""}}componentDidMount(){fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json()).then(e=>this.setState({robots:e}))}render(){const{robots:e,searchField:t}=this.state,a=e.filter(e=>e.name.toLowerCase().includes(t.toLowerCase()));return e.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1 pa2"},"RoboFriends"),r.a.createElement(i,{searchChange:this.onSearchChange}),r.a.createElement(h,null,r.a.createElement(c,{robots:a}))):r.a.createElement("h1",null,"Loading")}}var d=m;var u=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:l,getTTFB:s}=t;a(e),n(e),r(e),l(e),s(e)})};a(14);s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null))),u()},3:function(e,t,a){e.exports=a(15)}},[[3,1,2]]]);
//# sourceMappingURL=main.34fe554a.chunk.js.map