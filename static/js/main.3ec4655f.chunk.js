(this.webpackJsonpdooghflix=this.webpackJsonpdooghflix||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(10),o=a.n(s),r=(a(108),a(72)),c=(a.p,a(109),a(93)),d=a(191),l=a(192),j=a(195),p=a(194),m=a(193),h=a(196),b=a(62),x=a(190),g=a(205),k=a(197),u=a(198),O=a(199),f=a(151),y=a(200),v=a(201),F=a(150),S=a(204),B=a(203),M=(a(110),a(68)),z=a.n(M),N=a(97),w=a.n(N),C=a(69),E=a(11),_=a(94),A=a.n(_),T=a(202),I=a(98),Z=a(4),L=a(189),R=a(206),G=a(95),U=a.n(G),X=a(6),J=JSON.parse(JSON.stringify(c)),V=Object(Z.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(R.a),W=Object(I.a)({palette:{primary:{main:"#FFFFF"},secondary:{light:"#FFFF",main:"#FFFFF",dark:"#FFFF",contrastText:"#000"}}}),D=Object(L.a)((function(e){return{root:{width:315,margin:10},media:{height:140},gridList:{width:500,height:450},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular,width:205},bb:{width:"100%"},gridd:{backgroundColor:e.palette.primary.light,width:"100%"},selectEmpty:{marginTop:e.spacing(2)},formControl:{margin:e.spacing(3),width:"100%"},button:{backgroundColor:e.palette.background.paper}}}));function Q(e){var t=D();return Object(X.jsxs)(x.a,{container:!0,className:t.grid,justify:"center",alignItems:"center",children:[e.value.map((function(e,a){return Object(X.jsxs)(d.a,{className:t.root,children:[Object(X.jsxs)(l.a,{children:[Object(X.jsx)(m.a,{className:t.media,image:e.image,title:e.title}),Object(X.jsxs)(p.a,{children:[Object(X.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(X.jsx)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:e.about})]})]}),Object(X.jsxs)(j.a,{children:[Object(X.jsx)(h.a,{size:"small",color:"primary",children:"Share"}),Object(X.jsx)(h.a,{size:"small",color:"primary",children:"Learn More"})]}),Object(X.jsx)(j.a,{children:Object(X.jsxs)(g.a,{children:[Object(X.jsx)(k.a,{expandIcon:Object(X.jsx)(z.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(X.jsx)(b.a,{className:t.heading,children:"Show links"})}),Object(X.jsx)(u.a,{children:Object(X.jsx)("div",{className:t.bb,children:e.seasons.map((function(e,i){return Object(X.jsxs)(g.a,{children:[Object(X.jsx)(k.a,{expandIcon:Object(X.jsx)(z.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(X.jsx)(b.a,{className:t.heading,children:"Season "+(i+1)})}),Object(X.jsx)(u.a,{children:Object(X.jsx)(O.a,{className:t.heading,children:e.episodes.map((function(e,t){return Object(X.jsxs)(f.a,{children:[Object(X.jsx)(y.a,{primary:"Episode "+(t+1),secondary:"test"}),Object(X.jsx)(v.a,{children:Object(X.jsx)(F.a,{edge:"end","aria-label":"play",component:C.b,to:"/video/"+a+"/"+i+"/"+t,children:Object(X.jsx)(w.a,{})})})]})}))})})]})}))})})]})})]})})),"    "]})}function Y(e){D();return Object(X.jsxs)("div",{className:"App",children:[Object(X.jsx)("header",{className:"App-header"}),Object(X.jsx)("body",{className:"body",children:Object(X.jsx)(Q,{className:"cards",value:J})})]})}function q(){var e=D(),t=Object(E.f)(),a=t.id,n=t.s,s=t.e,o=J[a].seasons[n].episodes[s],c=Object(i.useState)(o[0]),d=Object(r.a)(c,2),l=d[0],j=d[1],p=Object(i.useState)("Copy link"),m=Object(r.a)(p,2),b=m[0],g=m[1];return Object(X.jsxs)(T.a,{theme:W,children:[Object(X.jsx)(A.a,{url:l,controls:!0,width:"100%"}),Object(X.jsxs)(x.a,{container:!0,className:e.gridd,spacing:1,justify:"center",alignItems:"center",children:[Object(X.jsx)(x.a,{item:!0,xs:4,children:Object(X.jsx)(S.a,{value:l,onChange:function(e){j(e.target.value),g("Copy link")},displayEmpty:!0,input:Object(X.jsx)(V,{}),children:o.map((function(e,t){return Object(X.jsx)(B.a,{value:e,children:"Link "+(t+1)})}))})}),Object(X.jsx)(x.a,{item:!0,xs:4,children:Object(X.jsx)(h.a,{color:"primary",type:"button",className:e.button,onClick:function(e){e.preventDefault(),window.location.href="vlc://"+l},children:"open in VLC"})}),Object(X.jsx)(x.a,{item:!0,xs:4,children:Object(X.jsx)(U.a,{text:l,onCopy:function(){return g("Copied!")},children:Object(X.jsx)(h.a,{className:e.button,children:b})})})]})]})}var H=function(){return Object(X.jsx)(C.a,{children:Object(X.jsxs)(E.c,{children:[Object(X.jsx)(E.a,{exact:!0,path:"/",children:Object(X.jsx)(Y,{data:J})}),Object(X.jsx)(E.a,{path:"/video/:id/:s/:e",children:Object(X.jsx)(q,{})})]})})};o.a.render(Object(X.jsx)(n.a.StrictMode,{children:Object(X.jsx)(H,{})}),document.getElementById("root"))},93:function(e){e.exports=JSON.parse('[{"title":"Breaking Bad","about":"It\'s good","image":"https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_UX477_CR0,0,477,268_AL_.jpg","seasons":[{"episodes":[["https://dl16.ftk.pw/user/shahab2/serial/Breaking.Bad/S01/Breaking.Bad.S01E01.480p.Farsi.Dubbed.Film2Movie_Asia.mkv","http://m86valthw.l1wr6ke1f86v.w2kriscaz3hcff0sb26887827rxg7ib99m7xk9x9ikr3qil7ax59bjh2ogl.xyz/Serial/Breaking%20Bad/S01/BB_S01_E01.mkv","kionnn.com"],["http://dls1.almasstorageservers.tk/Series/B/Breaking%20Bad/S01/720p.BluRay.2CH.x265.PSA/Breaking.Bad.S01E02.720p.BluRay.2CH.x265.HEVC.PSA.mkv"]]},{"episodes":[["https://kir.com/kir.mkv","kionnn.com"],["fff"]]}]},{"title":"Paradise PD","about":"It\'s better","image":"https://tvseriesfinale.com/wp-content/uploads/2018/10/paradise-pd.jpeg","seasons":[{"episodes":[["https://kir.com/kir.mkv","kionnn.com"],["fff"]]},{"episodes":[["https://kir.com/kir.mkv","kionnn.com"],["fff"]]}]},{"title":"Breaking Bad","about":"It\'s good","image":"https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_UX477_CR0,0,477,268_AL_.jpg","seasons":[{"episodes":[["https://kir.com/kir.mkv","kionnn.com"],["fff"]]},{"episodes":[["https://kir.com/kir.mkv","kionnn.com"],["fff"]]}]},{"title":"Breaking Bad","about":"It\'s good","image":"https://m.media-amazon.com/images/M/MV5BMTJiMzgwZTktYzZhZC00YzhhLWEzZDUtMGM2NTE4MzQ4NGFmXkEyXkFqcGdeQWpybA@@._V1_UX477_CR0,0,477,268_AL_.jpg","seasons":[{"episodes":[["https://kir.com/kir.mkv","kionnn.com"],["fff"]]},{"episodes":[["https://kir.com/kir.mkv","kionnn.com"],["fff"]]}]}]')}},[[148,1,2]]]);
//# sourceMappingURL=main.3ec4655f.chunk.js.map