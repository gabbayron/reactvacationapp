(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{291:function(e,t,a){e.exports=a(482)},296:function(e,t,a){},297:function(e,t,a){},482:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),l=(a(296),a(297),a(40)),i=a(20),s=a(16),m=a.n(s),u=a(22),d=a(9),p=a(109),g=a(545),f=a(524),h=a(520),b=a(541),E=a(525),y=a(521),v=a(116),O=a.n(v),j=a(68),x=a(516),w=a(518),S=a(31),k=a(122),C=a.n(k),_=a(523),D=a(121),M=a.n(D),N=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function V(e){var t=e.history,a=N(),o=Object(S.b)(),c=Object(n.useState)(""),i=Object(d.a)(c,2),s=i[0],v=i[1],x=Object(n.useState)(""),k=Object(d.a)(x,2),D=k[0],V=k[1],T=Object(n.useState)(""),Y=Object(d.a)(T,2),A=Y[0],I=Y[1],P=Object(n.useState)(""),B=Object(d.a)(P,2),F=B[0],W=B[1],G=Object(n.useState)(""),L=Object(d.a)(G,2),U=L[0],q=L[1],z=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},R=function(){var e=Object(u.a)(m.a.mark((function e(a){var n,r,c,l,i,u,d,g;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,fetch("auth/register",{method:"POST",body:JSON.stringify({fname:z(s),lname:z(D),username:A,password:F}),headers:{"content-type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:(r=e.sent).error?(q(r.msg),setTimeout((function(){q("")}),3e3),F||document.querySelector("#password").focus(),A||document.querySelector("#username").focus(),D||document.querySelector("#lastName").focus(),s||document.querySelector("#firstName").focus()):(localStorage.token=r.access_token,c=Object(p.a)(r.access_token),l=c.id,i=c.role,u=c.username,d=c.fname,g=c.lname,o({type:"LOGIN",payload:{id:l,role:i,username:u,fname:d,lname:g}}),t.push("/vacations"),console.log("Registered and logged")),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(w.a,{component:"main",maxWidth:"xs"},r.a.createElement(h.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(g.a,{className:a.avatar},r.a.createElement(O.a,null)),r.a.createElement(j.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement(j.a,{component:"h1",variant:"h5",color:"secondary"},U),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(y.a,{container:!0,spacing:2},r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return v(e.target.value)}})),r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement(b.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){return V(e.target.value)}})),r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"outlined",required:!0,fullWidth:!0,name:"username",label:"username",type:"username",id:"username",onChange:function(e){return I(e.target.value)},InputProps:{startAdornment:r.a.createElement(_.a,{position:"start"},r.a.createElement(M.a,null))}})),r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(b.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return W(e.target.value)},InputProps:{startAdornment:r.a.createElement(_.a,{position:"start"},r.a.createElement(C.a,null))}}))),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(e){return R(e)}},"Sign Up"),r.a.createElement(y.a,{container:!0,justify:"center"},r.a.createElement(y.a,{item:!0},r.a.createElement(E.a,{component:l.b,to:"/login",variant:"body2"},"Already have an account? Sign in"))))))}var T=a(526),Y=a(544),A=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function I(e){var t=e.history,a=A(),o=Object(n.useState)(""),c=Object(d.a)(o,2),i=c[0],s=c[1],v=Object(n.useState)(""),x=Object(d.a)(v,2),k=x[0],D=x[1],N=Object(n.useState)(""),V=Object(d.a)(N,2),I=V[0],P=V[1],B=Object(n.useState)(!1),F=Object(d.a)(B,2),W=F[0],G=F[1],L=Object(S.b)(),U=function(){var e=Object(u.a)(m.a.mark((function e(a){var n,r,o,c,l,s,u,d;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,fetch("auth/login",{method:"POST",body:JSON.stringify({username:i,password:k}),headers:{"content-type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:(r=e.sent).error?(P(r.msg),setTimeout((function(){P("")}),3e3),k||document.querySelector("#password").focus(),i||(console.log("called"),document.querySelector("#username").focus())):(W?localStorage.token=r.access_token:sessionStorage.token=r.access_token,o=Object(p.a)(r.access_token),c=o.id,l=o.role,s=o.username,u=o.fname,d=o.lname,L({type:"LOGIN",payload:{id:c,role:l,username:s,fname:u,lname:d}}),t.push("/vacations")),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(w.a,{component:"main",maxWidth:"xs"},r.a.createElement(h.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(g.a,{className:a.avatar},r.a.createElement(O.a,null)),r.a.createElement(j.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(j.a,{component:"h1",variant:"h5",color:"secondary"},I),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(b.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoFocus:!0,error:!1,onChange:function(e){return s(e.target.value)},InputProps:{startAdornment:r.a.createElement(_.a,{position:"start"},r.a.createElement(M.a,null))}}),r.a.createElement(b.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return D(e.target.value)},InputProps:{startAdornment:r.a.createElement(_.a,{position:"start"},r.a.createElement(C.a,null))}}),r.a.createElement(T.a,{control:r.a.createElement(Y.a,{value:"remember",color:"primary"}),label:"Remember me",checked:W,onChange:function(e){return G(e.target.checked)}}),r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(e){return U(e)}},"Sign In"),r.a.createElement(y.a,{container:!0,justify:"center"},r.a.createElement(y.a,{item:!0},r.a.createElement(E.a,{component:l.b,to:"/register",variant:"body2"},"Don't have an account? Sign Up"))))))}var P=a(539),B=a(246),F=a(244),W=a.n(F),G=a(245),L=a.n(G),U=a(228),q=a(61),z=a(530),R=a(535),K=a(533),H=a(532),J=a(527),X=a(231),$=a.n(X),Q=a(161),Z=a.n(Q),ee=a(4),te=a(534),ae=a(531),ne=a(230),re=a.n(ne),oe=a(543),ce=a(528),le=a(484),ie=a(81),se=a(27),me=a(540),ue=a(229),de=a.n(ue),pe=a(522),ge=Object(x.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function fe(e){var t=e.country,a=e.price,o=e.start_date,c=e.end_date,l=e.destination,i=e.img_src,s=e.description,p=e.id,g=e.setCounter,h=e.counter,E=ge(),v=Object(n.useState)(!1),O=Object(d.a)(v,2),j=O[0],x=O[1],w=Object(n.useState)(o),S=Object(d.a)(w,2),k=S[0],C=S[1],_=Object(n.useState)(c),D=Object(d.a)(_,2),M=D[0],N=D[1],V=Object(n.useState)(a),T=Object(d.a)(V,2),Y=T[0],A=T[1],I=Object(n.useState)(s),P=Object(d.a)(I,2),B=P[0],F=P[1],W=Object(n.useState)(l),G=Object(d.a)(W,2),L=G[0],U=G[1],q=Object(n.useState)(t),z=Object(d.a)(q,2),R=z[0],K=z[1],H=Object(n.useState)(i),X=Object(d.a)(H,2),$=X[0],Q=X[1],Z=function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("vacations/edit/".concat(p),{method:"PUT",headers:{Authorization:localStorage.token||sessionStorage.token,"content-type":"application/json"},body:JSON.stringify({description:B,destination:L,country:R,price:Y,img_src:$,end_date:M,start_date:k})});case 3:g(h+1),x(!j),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{style:{marginTop:"7px"}},r.a.createElement(J.a,{onClick:function(){return x(!j)}},r.a.createElement(de.a,null)),r.a.createElement(oe.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:E.modal,open:j,onClose:function(){return x(!j)},closeAfterTransition:!0,BackdropComponent:ce.a,BackdropProps:{timeout:500}},r.a.createElement(le.a,{in:j},r.a.createElement("div",{className:E.paper},r.a.createElement("h1",{id:"transition-modal-title",style:{textAlign:"center"}},"Edit Vacation To ",L),r.a.createElement(se.a,{utils:ie.a},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement(me.a,{margin:"normal",id:"date-picker-dialog1",label:"Starting Date",format:"MM/dd/yyyy",value:k,onChange:C,KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement(me.a,{margin:"normal",id:"date-picker-dialog2",label:"Ending Date",format:"MM/dd/yyyy",minDate:k,value:M,onChange:N,KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement(b.a,{label:"Destination",margin:"normal",onChange:function(e){return U(e.target.value)},value:L})),r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement(b.a,{label:"Country",margin:"normal",onChange:function(e){return K(e.target.value)},value:R})),r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement(b.a,{type:"number",label:"Price",margin:"normal",onChange:function(e){return A(e.target.value)},value:Y})),r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement(b.a,{type:"text",label:"Image Source",margin:"normal",onChange:function(e){return Q(e.target.value)},value:$})),r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement("h4",null,"Description :"),r.a.createElement(pe.a,{value:B,onChange:function(e){return F(e.target.value)},rowsMax:10}))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(f.a,{onClick:Z,disabled:!B||!L||M<k||!$||!R||!Y,variant:"contained",color:"primary"},"Save Changes")))))))}var he=function(e){var t=e.destination,a=e.description,o=e.img,c=e.start_date,l=e.end_date,i=e.price,s=e.followers,p=e.id,g=e.following,h=e.setCounter,b=e.country,E=e.counter,v=e.serachedVacations,O=e.setSearchedVacations,w=e.user,S=Object(n.useState)(!1),k=Object(d.a)(S,2),C=k[0],_=k[1],D=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,fetch("vacations/".concat(p),{method:"PUT",body:JSON.stringify({followers:g?--s:++s,order:g?"REMOVE":"ADD"}),headers:{Authorization:localStorage.token||sessionStorage.token,"content-type":"application/json"}}),O&&(t=Object(q.a)(v),a=v.find((function(e){return e.id===p})),n=v.indexOf(a),t[n].followers=s,O(t)),setTimeout((function(){h(E+1)}),50),e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("vacations/".concat(p),{method:"DELETE",headers:{Authorization:localStorage.token||sessionStorage.token}});case 3:O&&(t=Object(q.a)(v),a=v.find((function(e){return e.id===p})),n=v.indexOf(a),t.splice(n,1),O(t)),h(E+1),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),N=Object(x.a)((function(e){return{icon:{marginRight:e.spacing(2)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},expand:{marginLeft:"auto"}}}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{item:!0,xs:3,className:N.card},r.a.createElement(z.a,null,"admin"===w.role?r.a.createElement(ae.a,{style:{justifyContent:"space-around"},action:r.a.createElement(fe,{country:b,price:i,start_date:c,end_date:l,destination:t,img_src:o,description:a,id:p,counter:E,setCounter:h}),avatar:r.a.createElement(J.a,{onClick:M,size:"small"},r.a.createElement(re.a,null))}):"",r.a.createElement(H.a,{className:N.cardMedia,image:"".concat(o),title:"".concat(t)}),r.a.createElement(K.a,{className:N.cardContent},r.a.createElement(j.a,{style:{textAlign:"center"},gutterBottom:!0,variant:"h5",component:"div"},r.a.createElement("u",null,t),r.a.createElement("h4",null,"Country : ",b),r.a.createElement("h4",null,"Price : ",i," $"),r.a.createElement("h4",null,"Dates :"),r.a.createElement("h5",null,"Starts : ",r.a.createElement(Z.a,{format:"MMM Do YYYY"},c)," "),r.a.createElement("h5",null,"Ends : ",r.a.createElement(Z.a,{format:"MMM Do YYYY"},l)," "),r.a.createElement("h4",null,"Followers : ",s)),r.a.createElement(te.a,{in:C,timeout:"auto",unmountOnExit:!0},r.a.createElement(j.a,null,a))),r.a.createElement(j.a,{component:"div",style:{display:"flex",justifyContent:"space-evenly"}},r.a.createElement(R.a,{style:{display:"flex"}},r.a.createElement(f.a,{className:Object(ee.a)(N.expand,Object(U.a)({},N.expandOpen,C)),onClick:function(){_(!C)},"aria-expanded":C,"aria-label":"show more",size:"small",color:"primary"},C?"Hide Info":"Show More Info"),"user"===w.role?r.a.createElement(J.a,{"aria-label":"add to favorites",onClick:D},r.a.createElement($.a,{color:g?"secondary":"action"})):null)))))},be=a(232),Ee=a.n(be),ye=a(233),ve=a.n(ye),Oe=a(536),je=a(59),xe=a.n(je),we=a(162),Se=a.n(we);function ke(e){var t=e.setFollowedVacations,a=e.setNotFollowedVacations,o=e.setSearchedVacations,c=e.allVacations,l=e.counter,i=e.setCounter,s=Object(n.useState)(new Date),p=Object(d.a)(s,2),g=p[0],h=p[1],E=Object(n.useState)(new Date),v=Object(d.a)(E,2),O=v[0],x=v[1],w=Object(n.useState)(""),S=Object(d.a)(w,2),k=S[0],C=S[1],_=Object(n.useState)(""),D=Object(d.a)(_,2),M=D[0],N=D[1],V=function(){var e=Object(u.a)(m.a.mark((function e(){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("vacations/search",{method:"POST",headers:{Authorization:localStorage.token||sessionStorage.token,"content-type":"application/json"},body:JSON.stringify({start_date:g,end_date:O,description:k})});case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).length>0?(t([]),a([]),o(r)):(N("Search Have No Results To Show :("),setTimeout((function(){N("")}),2500)),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(se.a,{utils:ie.a},r.a.createElement("div",null,r.a.createElement(j.a,{paragraph:!0,variant:"h6",align:"center",color:"textSecondary"},"Search Your Favorite Vacation"),O<g?r.a.createElement("h2",{style:{color:"red",textAlign:"center"}},"Notice! Vacation End Date Is Not Valid!"):""),r.a.createElement(y.a,{item:!0,xs:12,container:!0,justify:"space-around",alignContent:"center",alignItems:"center"},r.a.createElement(me.a,{margin:"normal",id:"date-picker-dialog1",label:"Starting Date",format:"MM/dd/yyyy",minDate:g,value:g,renderDay:function(e,t,a,n){var o=c.notFollowedVacations.map((function(e){return xe()(e.start_date).format("MMMM Do YYYY")}));o=[].concat(Object(q.a)(o),Object(q.a)(c.followedVacations.map((function(e){return xe()(e.start_date).format("MMMM Do YYYY")}))));var l=a&&o.includes(xe()(e).format("MMMM Do YYYY"));return r.a.createElement(Oe.a,{badgeContent:l?r.a.createElement(Se.a,{style:{position:"relative",right:"20px"}}):void 0},n)},onChange:h,KeyboardButtonProps:{"aria-label":"change date"}}),r.a.createElement(me.a,{margin:"normal",id:"date-picker-dialog2",label:"Ending Date",format:"MM/dd/yyyy",minDate:g,value:O,renderDay:function(e,t,a,n){var o=c.notFollowedVacations.map((function(e){return xe()(e.end_date).format("MMMM Do YYYY")}));o=[].concat(Object(q.a)(o),Object(q.a)(c.followedVacations.map((function(e){return xe()(e.end_date).format("MMMM Do YYYY")}))));var l=a&&o.includes(xe()(e).format("MMMM Do YYYY"));return r.a.createElement(Oe.a,{badgeContent:l?r.a.createElement(Se.a,{style:{position:"relative",right:"20px"}}):void 0},n)},onChange:x,KeyboardButtonProps:{"aria-label":"change date"}}),r.a.createElement(b.a,{id:"standard-basic",label:"Description",margin:"normal",value:k,onChange:function(e){return C(e.target.value)}}),r.a.createElement(f.a,{endIcon:r.a.createElement(Ee.a,null),color:"primary",edge:"end",variant:"contained",disabled:O<g,size:"medium",style:{marginTop:"20px"},onClick:V},"Search"),r.a.createElement(f.a,{endIcon:r.a.createElement(ve.a,null),color:"primary",edge:"end",variant:"contained",size:"medium",style:{marginTop:"20px"},onClick:function(){i(l+1),o([]),C("")}},"Clear")),r.a.createElement(j.a,{style:{marginTop:"3%"},paragraph:!0,variant:"h6",align:"center",color:"secondary"},M))}var Ce=Object(x.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function _e(e){var t=e.counter,a=e.setCounter,o=Ce(),c=Object(n.useState)(!1),l=Object(d.a)(c,2),i=l[0],s=l[1],p=Object(n.useState)(new Date),g=Object(d.a)(p,2),h=g[0],E=g[1],v=Object(n.useState)(new Date),O=Object(d.a)(v,2),j=O[0],x=O[1],w=Object(n.useState)(0),S=Object(d.a)(w,2),k=S[0],C=S[1],_=Object(n.useState)(""),D=Object(d.a)(_,2),M=D[0],N=D[1],V=Object(n.useState)(""),T=Object(d.a)(V,2),Y=T[0],A=T[1],I=Object(n.useState)(""),P=Object(d.a)(I,2),B=P[0],F=P[1],W=Object(n.useState)(""),G=Object(d.a)(W,2),L=G[0],U=G[1],q=function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("vacations/add",{method:"POST",headers:{"content-type":"application/json",Authorization:localStorage.token||sessionStorage.token},body:JSON.stringify({destination:Y,description:M,start_date:h,end_date:j,country:B,price:k,img_src:L})});case 3:s(!i),E(new Date),x(new Date),C(0),N(""),A(""),F(""),U(""),a(t+1),e.next=17;break;case 14:throw e.prev=14,e.t0=e.catch(0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{style:{marginTop:"7px"}},r.a.createElement(f.a,{onClick:function(){return s(!i)},variant:"contained",color:"primary"},"Add Flight"),r.a.createElement(oe.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:o.modal,open:i,onClose:function(){return s(!i)},closeAfterTransition:!0,BackdropComponent:ce.a,BackdropProps:{timeout:500}},r.a.createElement(le.a,{in:i},r.a.createElement("div",{className:o.paper},r.a.createElement("h1",{id:"transition-modal-title",style:{textAlign:"center"}},"Add Vacation :"),r.a.createElement(se.a,{utils:ie.a},r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement(me.a,{margin:"normal",id:"date-picker-dialog1",label:"Starting Date",format:"MM/dd/yyyy",minDate:h,value:h,onChange:E,KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement(me.a,{margin:"normal",id:"date-picker-dialog2",label:"Ending Date",format:"MM/dd/yyyy",minDate:h,value:j,onChange:x,KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement(b.a,{label:"Destination",margin:"normal",onChange:function(e){return A(e.target.value)},value:Y})),r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement(b.a,{label:"Country",margin:"normal",onChange:function(e){return F(e.target.value)},value:B})),r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement(b.a,{type:"number",label:"Price",margin:"normal",onChange:function(e){return C(e.target.value)},value:k})),r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement(b.a,{type:"text",label:"Image Source",margin:"normal",onChange:function(e){return U(e.target.value)},value:L})),r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement("h4",null,"Description :"),r.a.createElement(pe.a,{value:M,onChange:function(e){return N(e.target.value)},rowsMax:10}))),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(f.a,{onClick:q,disabled:!M||!Y||j<h||!L||!B||!k,variant:"contained",color:"primary"},"Add Flight !")))))))}var De=Object(x.a)((function(e){return{title:{flexGrow:1},icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function Me(){var e=Object(S.c)((function(e){return e.user})),t=De(),a=Object(n.useState)([]),o=Object(d.a)(a,2),c=o[0],l=o[1],i=Object(n.useState)([]),s=Object(d.a)(i,2),p=s[0],g=s[1],f=Object(n.useState)([]),b=Object(d.a)(f,2),E=b[0],v=b[1],O=Object(n.useState)([]),x=Object(d.a)(O,2),k=x[0],C=x[1],_=Object(n.useState)(0),D=Object(d.a)(_,2),M=D[0],N=D[1],V=Object(n.useState)([]),T=Object(d.a)(V,2),Y=T[0],A=T[1];return Object(n.useEffect)((function(){Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.login){t.next=12;break}return t.next=4,fetch("vacations",{headers:{Authorization:localStorage.token||sessionStorage.token}});case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,l(n),v(n.notFollowedVacations),g(n.followedVacations),A(n.followedVacations.map((function(e){return e.id})));case 12:return t.abrupt("return",null);case 15:throw t.prev=15,t.t0=t.catch(0),t.t0;case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()}),[M,e.login,e.userid]),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:t.heroContent},r.a.createElement(w.a,{maxWidth:"md"},r.a.createElement(j.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Bon Voyage ",e.fname," ",e.lname),r.a.createElement(j.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"Welcome to your travel manager app"," ".concat(e.fname," ").concat(e.lname),"! Here you can find valuable information about the best destenations for your vacation! ",r.a.createElement("br",null),"Have fun !"))),r.a.createElement(w.a,{maxWidth:"md"},r.a.createElement(ke,{setFollowedVacations:g,setNotFollowedVacations:v,setSearchedVacations:C,allVacations:c,counter:M,setCounter:N})),"admin"===e.role?r.a.createElement(w.a,{style:{textAlign:"center"},maxWidth:"md"},r.a.createElement(_e,{counter:M,setCounter:N})):null,k.length>0?r.a.createElement("h1",{style:{textAlign:"center"}}," Here Is Your Search Results :"):"",k.length>0?r.a.createElement(w.a,{className:t.cardGrid,maxWidth:"lg"},r.a.createElement(y.a,{justify:"flex-start",container:!0,spacing:3},k.map((function(t){return r.a.createElement(he,{key:t.id,id:t.id,description:t.description,destination:t.destination,country:t.country,img:t.img_src,start_date:t.start_date,end_date:t.end_date,price:t.price,followers:t.followers,following:!!Y.includes(t.id),setVacations:g,setCounter:N,counter:M,serachedVacations:k,setSearchedVacations:C,user:e})})))):"",0===k.length?r.a.createElement(w.a,{className:t.cardGrid,maxWidth:"lg"},"admin"===e.role?null:r.a.createElement(j.a,{component:"h2",variant:"h3",align:"center",color:"textPrimary",gutterBottom:!0,style:{marginBottom:"5%"}},"Vacations You Followed :"),r.a.createElement(y.a,{justify:p.length>0?"flex-start":"center",container:!0,spacing:3},p.length>0?p.map((function(t){return r.a.createElement(he,{key:t.id,id:t.id,description:t.description,destination:t.destination,country:t.country,img:t.img_src,start_date:t.start_date,end_date:t.end_date,price:t.price,followers:t.followers,following:!0,setVacations:g,setCounter:N,counter:M,user:e})})):"admin"===e.role?null:r.a.createElement(j.a,{component:"h4",variant:"h4",align:"center",color:"textSecondary",style:{margin:"5%"}},"You Havent Followed Any Vacation Yet...")),r.a.createElement(j.a,{component:"h2",variant:"h3",align:"center",color:"textPrimary",gutterBottom:!0,style:{margin:"3%"}},"admin"===e.role?"All Vacations :":"Vacations You Didn't Followed :"),r.a.createElement(y.a,{justify:E.length>0?"flex-start":"center",container:!0,spacing:4},E.length>0?E.map((function(t){return r.a.createElement(he,{key:t.id,id:t.id,description:t.description,destination:t.destination,country:t.country,img:t.img_src,start_date:t.start_date,end_date:t.end_date,price:t.price,followers:t.followers,following:!1,setVacations:v,setCounter:N,counter:M,user:e})})):r.a.createElement(j.a,{component:"h4",variant:"h4",align:"center",color:"textSecondary",style:{margin:"5%"}},"You Have Followed All Of Our Vacations..."))):null))}var Ne=function(){var e=Object(i.e)(),t=Object(S.b)();return Object(n.useEffect)((function(){Object(u.a)(m.a.mark((function a(){var n,r;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("auth/me",{method:"GET",headers:{Authorization:localStorage.token||sessionStorage.token}});case 3:return n=a.sent,a.next=6,n.json();case 6:(r=a.sent).error?(t({type:"LOGOUT"}),e.push("/login")):(t({type:"LOGIN",payload:{id:r.id,role:r.role,username:r.username,fname:r.fname,lname:r.lname}}),"/register"!==e.location.pathname&&"/login"!==e.location.pathname&&"/"!==e.location.pathname||e.push("/vacations")),a.next=13;break;case 10:throw a.prev=10,a.t0=a.catch(0),a.t0;case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()})),null},Ve=a(542),Te=a(538),Ye=a(529),Ae=a(234),Ie=a.n(Ae),Pe=a(537),Be=Object(x.a)((function(e){return{title:{flexGrow:1},icon:{marginRight:e.spacing(2)},cardContent:{flexGrow:1},orange:{color:e.palette.getContrastText(Pe.a[500]),backgroundColor:Pe.a[500]}}})),Fe=function(){var e=Be(),t=Object(S.b)(),a=Object(S.c)((function(e){return e.user})),n=Object(i.e)();return r.a.createElement(Te.a,{className:e.cardContent,position:"sticky"},r.a.createElement(Ye.a,null,r.a.createElement(Ie.a,{className:e.icon}),r.a.createElement(j.a,{className:e.title,variant:"h6",color:"inherit",noWrap:!0},"Bon Voyage"),r.a.createElement(f.a,{onClick:function(){t({type:"LOGOUT"}),localStorage.removeItem("token"),sessionStorage.removeItem("token"),n.push("/login")},edge:"end",color:"inherit"},a.login?"Log Out":"Login"),a.login?r.a.createElement(f.a,{color:"inherit",component:l.b,to:"/vacations"},"Home"):"","admin"===a.role?r.a.createElement(f.a,{color:"inherit",component:l.b,to:"/chart"},"Chart"):"",a.login?r.a.createElement(g.a,{className:e.orange,style:{marginLeft:"6px"}},a.fname[0].toUpperCase()+a.lname[0].toUpperCase()):""))},We=a(45),Ge=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("vacations/chart",{headers:{Authorization:localStorage.token||sessionStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,o(a.filter((function(e){return e.followers>0}))),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[]),r.a.createElement(w.a,{maxWidth:"lg",style:{justifyContent:"center",alignItems:"center",marginTop:"5%"}},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(j.a,{variant:"h2",align:"center",color:"textPrimary",paragraph:!0},"Followers Statistics"),r.a.createElement(We.f,{height:"100%",minWidth:"50%",aspect:2},r.a.createElement(We.b,{data:a,margin:{top:50,right:30,left:20,bottom:5}},r.a.createElement(We.c,{strokeDasharray:"3 3"}),r.a.createElement(We.h,{dataKey:"destination"}),r.a.createElement(We.i,{dataKey:"followers",label:{value:"Likes",angle:-90,position:"insideLeft"}}),r.a.createElement(We.g,null),r.a.createElement(We.e,null),r.a.createElement(We.a,{dataKey:"followers",fill:"#F30761"},a.map((function(e,t){return r.a.createElement(We.d,{key:"cell-".concat(t),fill:"#2ABB7C"})})))))))},Le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"h6",align:"center",gutterBottom:!0},"Bon Voyage"),r.a.createElement(j.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ","Ron Gabbay October 2020","."))};var Ue=function(){var e=Object(B.a)({palette:{primary:{main:W.a[500]},secondary:{main:L.a[500]}}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(P.a,{theme:e},r.a.createElement(Ne,null),r.a.createElement(Fe,null),r.a.createElement(i.a,{path:"/register",exact:!0,component:V}),r.a.createElement(i.a,{path:"/login",component:I}),r.a.createElement(i.a,{path:"/vacations",component:Me}),r.a.createElement(i.a,{path:"/chart",component:Ge}),r.a.createElement(Ve.a,{m:5},r.a.createElement(Le,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=a(91),ze={login:!1},Re=Object(qe.c)(Object(qe.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":var a={login:!0,userid:t.payload.id,username:t.payload.username,fname:t.payload.fname,lname:t.payload.lname,role:t.payload.role};return a;case"LOGOUT":return ze;default:return e}}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S.a,{store:Re},r.a.createElement(Ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[291,1,2]]]);
//# sourceMappingURL=main.162b472e.chunk.js.map