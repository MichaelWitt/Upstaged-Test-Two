(this["webpackJsonpemployee-stardirectory"]=this["webpackJsonpemployee-stardirectory"]||[]).push([[0],{357:function(e,t,n){},358:function(e,t,n){},438:function(e,t,n){},440:function(e,t,n){"use strict";n.r(t);var a=n(25),i=n(0),r=n.n(i),c=n(14),s=n.n(c),o=(n(357),n.p,n(358),{headline:{textAlign:"center"}});var l=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("h1",{style:o.headline,children:"Employee Stardirectory"})})};var u=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("nav",{className:"navbar navbar-light bg-white justify-content-between",children:[Object(a.jsx)("a",{className:"navbar-brand font-weight-bold",children:"Employees"}),Object(a.jsx)("form",{className:"form-inline"})]})})},d=n(332),m=n(333),h=n(339),j=n(338),f=n(220),b=n.n(f),p=n(337),g=n.n(p),O=function(){return g.a.get("https://randomuser.me/api/?results=1000&nat=us")},v=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={filteredUsers:[]},e.users=[],e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){e.users=t.data.results,console.log("this.users:",e.users),e.setState({filteredUsers:e.users})}))}},{key:"render",value:function(){return Object(a.jsx)("div",{style:{maxWidth:"100%"},children:Object(a.jsx)(b.a,{columns:[{title:"Star",field:"star",render:function(e){return Object(a.jsx)("img",{src:e.star,alt:e.star})}},{title:"Name",field:"name"},{title:"Email",field:"email"},{title:"Phone",field:"phone"},{title:"Username",field:"username"},{title:"Location",field:"location"},{title:"Age",field:"age"}],data:this.state.filteredUsers.map((function(e){return{star:"".concat(e.picture.medium),name:"".concat(e.name.first+" "+e.name.last),email:"".concat(e.email),phone:"".concat(e.phone),username:"".concat(e.login.username),location:"".concat(e.location.city+", "+e.location.state),age:"".concat(e.dob.age)}})),options:{paging:!0,pageSize:50,emptyRowsWhenPaging:!0,pageSizeOptions:[6,12,20,50]},title:"\u2b51"})})}}]),n}(i.Component);n(438);var x=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(l,{}),Object(a.jsx)(u,{}),Object(a.jsx)(v,{})]})},y=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,846)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};n(439);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),y()}},[[440,1,3]]]);
//# sourceMappingURL=main.be70e8eb.chunk.js.map