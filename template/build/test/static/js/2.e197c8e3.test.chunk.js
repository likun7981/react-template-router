webpackJsonp([2],{171:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=o(1),n=(o.n(t),o(179)),a=o(183),i=o(40),s=o(70),l=o(186),A=(o.n(l),function(){var e="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(r,o,t,n){var a=r&&r.defaultProps,i=arguments.length-3;if(o||0===i||(o={}),o&&a)for(var s in a)void 0===o[s]&&(o[s]=a[s]);else o||(o=a||{});if(1===i)o.children=n;else if(i>1){for(var l=Array(i),A=0;A<i;A++)l[A]=arguments[A+3];o.children=l}return{$$typeof:e,type:r,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}}()),c=A(n.a,{}),f=A(a.a,{});r.default=Object(i.e)(function(e){var r=e.routes,o=e.location;return A("div",{className:"core-layout"},void 0,c,f,A("div",{className:"core-layout__viewport"},void 0,A(s.a,{routes:r,location:o})))})},179:function(e,r,o){"use strict";var t=o(1),n=(o.n(t),o(180)),a=o.n(n),i=o(181),s=(o.n(i),function(){var e="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(r,o,t,n){var a=r&&r.defaultProps,i=arguments.length-3;if(o||0===i||(o={}),o&&a)for(var s in a)void 0===o[s]&&(o[s]=a[s]);else o||(o=a||{});if(1===i)o.children=n;else if(i>1){for(var l=Array(i),A=0;A<i;A++)l[A]=arguments[A+3];o.children=l}return{$$typeof:e,type:r,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}}()),l=s("div",{className:"header"},void 0,s("img",{src:a.a,className:"header-logo",alt:"logo"}),s("h2",{},void 0,"Welcome to React"));r.a=function(){return l}},180:function(e,r,o){e.exports=o.p+"static/media/logo.5d5d9eef.svg"},181:function(e,r,o){var t=o(182);"string"===typeof t&&(t=[[e.i,t,""]]);var n={};n.transform=void 0;o(170)(t,n);t.locals&&(e.exports=t.locals)},182:function(e,r,o){r=e.exports=o(169)(!0),r.push([e.i,".header{background-color:#222;height:150px;padding:20px}.header h2{color:#fff}.header-logo{-webkit-animation:Header-logo-spin infinite 20s linear;animation:Header-logo-spin infinite 20s linear;height:80px}@-webkit-keyframes Header-logo-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes Header-logo-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}","",{version:3,sources:["/Users/likun/Projects/react/react-app-template-router/src/layouts/CoreLayout/Header/Header.less"],names:[],mappings:"AAAA,QACE,sBAAuB,AACvB,aAAc,AACd,YAAc,CACf,AACD,WACE,UAAa,CACd,AACD,aACE,uDAAwD,AAChD,+CAAgD,AACxD,WAAa,CACd,AACD,oCACE,GACE,+BAAgC,AACxB,sBAAwB,CACjC,AACD,GACE,gCAAkC,AAC1B,uBAA0B,CACnC,CACF,AACD,4BACE,GACE,+BAAgC,AACxB,sBAAwB,CACjC,AACD,GACE,gCAAkC,AAC1B,uBAA0B,CACnC,CACF",file:"Header.less",sourcesContent:[".header {\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n}\n.header h2 {\n  color: white;\n}\n.header-logo {\n  -webkit-animation: Header-logo-spin infinite 20s linear;\n          animation: Header-logo-spin infinite 20s linear;\n  height: 80px;\n}\n@-webkit-keyframes Header-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes Header-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n"],sourceRoot:""}])},183:function(e,r,o){"use strict";var t=o(1),n=(o.n(t),o(40)),a=o(184),i=(o.n(a),function(){var e="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(r,o,t,n){var a=r&&r.defaultProps,i=arguments.length-3;if(o||0===i||(o={}),o&&a)for(var s in a)void 0===o[s]&&(o[s]=a[s]);else o||(o=a||{});if(1===i)o.children=n;else if(i>1){for(var l=Array(i),A=0;A<i;A++)l[A]=arguments[A+3];o.children=l}return{$$typeof:e,type:r,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}}()),s=i("div",{class:"sider-container"},void 0,i(n.b,{exact:!0,to:"/",activeClassName:"sider-active"},void 0,"Home")," \xb7 ",i(n.b,{to:"/other",activeClassName:"sider-active"},void 0,"Other"));r.a=function(){return s}},184:function(e,r,o){var t=o(185);"string"===typeof t&&(t=[[e.i,t,""]]);var n={};n.transform=void 0;o(170)(t,n);t.locals&&(e.exports=t.locals)},185:function(e,r,o){r=e.exports=o(169)(!0),r.push([e.i,".sider-active{font-weight:700;text-decoration:underline}.sider-container{margin:20px 0 0}.sider-container a{color:#08b}","",{version:3,sources:["/Users/likun/Projects/react/react-app-template-router/src/layouts/CoreLayout/Sider/Sider.less"],names:[],mappings:"AAAA,cACE,gBAAkB,AAClB,yBAA2B,CAC5B,AACD,iBACE,eAAiB,CAClB,AACD,mBACE,UAAY,CACb",file:"Sider.less",sourcesContent:[".sider-active {\n  font-weight: bold;\n  text-decoration: underline;\n}\n.sider-container {\n  margin: 20px 0 0;\n}\n.sider-container a {\n  color: #08b;\n}\n"],sourceRoot:""}])},186:function(e,r,o){var t=o(187);"string"===typeof t&&(t=[[e.i,t,""]]);var n={};n.transform=void 0;o(170)(t,n);t.locals&&(e.exports=t.locals)},187:function(e,r,o){r=e.exports=o(169)(!0),r.push([e.i,".core-layout{text-align:center}.core-layout__viewport{padding-top:4rem;position:relative}","",{version:3,sources:["/Users/likun/Projects/react/react-app-template-router/src/layouts/CoreLayout/CoreLayout.less"],names:[],mappings:"AAAA,aACE,iBAAmB,CACpB,AACD,uBACE,iBAAkB,AAClB,iBAAmB,CACpB",file:"CoreLayout.less",sourcesContent:[".core-layout {\n  text-align: center;\n}\n.core-layout__viewport {\n  padding-top: 4rem;\n  position: relative;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=2.e197c8e3.test.chunk.js.map