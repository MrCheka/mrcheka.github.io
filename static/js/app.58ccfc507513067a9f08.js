webpackJsonp([1],{NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),a=s("2vhu"),l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("a-layout-header",{staticClass:"header"},[t("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var r=s("VU/8")({name:"Header",data:function(){return{msg:"Language identification with Neural Networks"}}},l,!1,function(e){s("Ri9u")},"data-v-141d2796",null).exports,i=s("vGd1"),o=s.n(i),u=s("mtWM"),c=s.n(u),d={name:"Main",data:function(){return{endpoint:"https://8d715e63.ngrok.io",langs:null,langsStr:null,showLangs:!1,showResult:!1,text:null,multiResult:null,result:null,customStyle:"background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;margin-top: 10px;border: 0;overflow: hidden; text-align: justify;",buttonStyle:"width: 100%; margin-top: 10px;",loadingButton:!1,multi:"false",count:"1"}},created:function(){this.getLangs()},methods:{getLangs:function(){var e=this;this.showLangs=!1,this.langsStr=null,c.a.get(this.endpoint+"/getLangs").then(function(t){e.showLangs=!0,e.langs=t.data.langs;var s=[];for(var n in e.langs)s.push(e.langs[n]);e.langsStr=o()(s,", ")}).catch(function(e){console.log("---error---"),console.log(e)})},detectLang:function(){var e=this;this.showResult=!1,this.loadingButton=!0,this.multiResult=null,c.a.post(this.endpoint+"/detectLangs",{text:this.text,multi:"true"==this.multi,count:parseInt(this.count)}).then(function(t){e.showResult=!0,e.result="","true"==e.multi&&(e.multiResult="Найдено языков - "+t.data.count),console.log(t.data);for(var s=0;s<t.data.result.length;s++)e.result+="Язык - "+t.data.result[s].lang,e.result+=". Вероятность - "+t.data.result[s].acc,e.result+="%.\n";e.loadingButton=!1}).catch(function(t){console.log("---error---"),console.log(t),e.loadingButton=!1})},handleMultiChange:function(e){this.multi=e.target.value},handleCountChange:function(e){this.count=e}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-layout-content",{staticClass:"content"},[s("a-collapse",{attrs:{bordered:!1}},[e.showLangs?s("a-collapse-panel",{key:"1",style:e.customStyle,attrs:{header:"Поддерживаемые языки"}},[s("p",[e._v(e._s(e.langsStr))])]):e._e()],1),e._v(" "),s("label",[e._v("Текст:")]),e._v(" "),s("a-radio-group",{attrs:{value:e.multi},on:{change:e.handleMultiChange}},[s("a-radio-button",{attrs:{value:"false"}},[e._v("Одноязычный")]),e._v(" "),s("a-radio-button",{attrs:{value:"true"}},[e._v("Многоязычный")])],1),e._v(" "),"true"==e.multi?s("label",[e._v("Количество языков:")]):e._e(),e._v(" "),"true"==e.multi?s("a-select",{staticStyle:{width:"60px"},attrs:{defaultValue:"1"},on:{change:e.handleCountChange}},[s("a-select-option",{attrs:{value:"1"}},[e._v("1")]),e._v(" "),s("a-select-option",{attrs:{value:"2"}},[e._v("2")]),e._v(" "),s("a-select-option",{attrs:{value:"3"}},[e._v("3")]),e._v(" "),s("a-select-option",{attrs:{value:"4"}},[e._v("4")]),e._v(" "),s("a-select-option",{attrs:{value:"5"}},[e._v("5")]),e._v(" "),s("a-select-option",{attrs:{value:"6"}},[e._v("6")]),e._v(" "),s("a-select-option",{attrs:{value:"7"}},[e._v("7")])],1):e._e(),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("a-textarea",{attrs:{placeholder:"Введите текст",autosize:{minRows:20,maxRows:24}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),e._v(" "),s("a-button",{style:e.buttonStyle,attrs:{loading:e.loadingButton,type:"primary"},on:{click:e.detectLang}},[e._v("Определить!")]),e._v(" "),e.multiResult?s("h2",{staticStyle:{"text-align":"center"}},[e._v(e._s(e.multiResult))]):e._e(),e._v(" "),e.showResult?s("h3",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.result))]):e._e()],1)},staticRenderFns:[]};var m={render:function(){var e=this.$createElement;return(this._self._c||e)("a-layout-footer",{staticStyle:{"text-align":"center"}},[this._v(this._s(this.msg))])},staticRenderFns:[]};var v={name:"App",components:{Header:r,Main:s("VU/8")(d,p,!1,function(e){s("cS3Z")},"data-v-3c58aa64",null).exports,Footer:s("VU/8")({name:"Footer",data:function(){return{msg:"© 2019 Stanislau Baiko, AI-13, BSTU"}}},m,!1,function(e){s("VLvk")},"data-v-0d0c5814",null).exports}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("a-layout",[t("Header"),this._v(" "),t("Main"),this._v(" "),t("Footer")],1)},staticRenderFns:[]};var j=s("VU/8")(v,g,!1,function(e){s("o26v")},null,null).exports;s("hZ/y");n.a.config.productionTip=!1,n.a.use(a.a),new n.a({el:"#app",components:{App:j},template:"<App/>"})},Ri9u:function(e,t){},VLvk:function(e,t){},XN5v:function(e,t){e.exports={_from:"ant-design-vue",_id:"ant-design-vue@1.3.8",_inBundle:!1,_integrity:"sha512-Ouhmayh9gi5mijvd8NG8JnusYvXXC1U4gfme9FFypIOLwwWrYjQOHBF0cdiwI8iSCKI3F6TmkIFRTJz1amvYRw==",_location:"/ant-design-vue",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"ant-design-vue",name:"ant-design-vue",escapedName:"ant-design-vue",rawSpec:"",saveSpec:null,fetchSpec:"latest"},_requiredBy:["#USER","/"],_resolved:"https://registry.npmjs.org/ant-design-vue/-/ant-design-vue-1.3.8.tgz",_shasum:"b8c9fc30fd658f134c09d7698f2825a342cfef5f",_spec:"ant-design-vue",_where:"C:\\LangIDNN\\client",bugs:{url:"https://github.com/vueComponent/ant-design-vue/issues"},bundleDependencies:!1,dependencies:{"@ant-design/icons":"^1.1.15","@ant-design/icons-vue":"^1.0.1","add-dom-event-listener":"^1.0.2","array-tree-filter":"^2.1.0","async-validator":"^1.8.2","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-runtime":"6.x",classnames:"^2.2.5","component-classes":"^1.2.6","dom-align":"^1.7.0","dom-closest":"^0.2.0","dom-scroll-into-view":"^1.2.1","enquire.js":"^2.1.6",intersperse:"^1.0.0","is-negative-zero":"^2.0.0",ismobilejs:"^0.5.1",json2mq:"^0.2.0",lodash:"^4.17.5",moment:"^2.21.0","mutationobserver-shim":"^0.3.2","omit.js":"^1.0.0",raf:"^3.4.0","resize-observer-polyfill":"^1.5.1","shallow-equal":"^1.0.0",shallowequal:"^1.0.2","vue-ref":"^1.0.4",warning:"^3.0.0"},deprecated:!1,description:"An enterprise-class UI design language and Vue-based implementation",devDependencies:{"@commitlint/cli":"^6.2.0","@commitlint/config-conventional":"^6.1.3","@octokit/rest":"^15.4.1","@vue/cli-plugin-eslint":"^3.0.5","@vue/server-test-utils":"1.0.0-beta.16","@vue/test-utils":"1.0.0-beta.16",acorn:"^6.0.5",autoprefixer:"^8.1.0",axios:"^0.18.0","babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-eslint":"^10.0.1","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-jest":"^23.6.0","babel-loader":"^7.1.2","babel-plugin-add-module-exports":"^1.0.0","babel-plugin-import":"^1.1.1","babel-plugin-inline-import-data-uri":"^1.0.1","babel-plugin-istanbul":"^4.1.1","babel-plugin-syntax-dynamic-import":"^6.18.0","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-decorators":"^6.24.1","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-es3-member-expression-literals":"^6.22.0","babel-plugin-transform-es3-property-literals":"^6.22.0","babel-plugin-transform-object-assign":"^6.22.0","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"~6.23.0","babel-plugin-transform-vue-jsx":"^3.7.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.6.1","case-sensitive-paths-webpack-plugin":"^2.1.2",chalk:"^2.3.2",cheerio:"^1.0.0-rc.2",codecov:"^3.0.0",colorful:"^2.1.0",commander:"^2.15.0","compare-versions":"^3.3.0","cross-env":"^5.1.4","css-loader":"^0.28.7","deep-assign":"^2.0.0","enquire-js":"^0.2.1",eslint:"^5.8.0","eslint-config-prettier":"^3.0.1","eslint-plugin-html":"^3.2.2","eslint-plugin-vue":"^5.1.0","fetch-jsonp":"^1.1.3","fs-extra":"^7.0.0",glob:"^7.1.2",gulp:"^3.9.1","gulp-babel":"^7.0.0","gulp-strip-code":"^0.1.4","highlight.js":"^9.12.0","html-webpack-plugin":"^3.2.0",husky:"^0.14.3","istanbul-instrumenter-loader":"^3.0.0",jest:"^24.0.0","jest-serializer-vue":"^1.0.0","js-base64":"^2.4.8",jsonp:"^0.2.1",less:"^3.9.0","less-loader":"^4.1.0","less-plugin-npm-import":"^2.1.0","lint-staged":"^7.2.2","markdown-it":"^8.4.0","markdown-it-anchor":"^4.0.0",marked:"^0.3.7",merge2:"^1.2.1","mini-css-extract-plugin":"^0.5.0",minimist:"^1.2.0",mkdirp:"^0.5.1",mockdate:"^2.0.2",nprogress:"^0.2.0","optimize-css-assets-webpack-plugin":"^5.0.1",postcss:"^7.0.6","postcss-loader":"^3.0.0","pre-commit":"^1.2.2",prettier:"^1.15.3",querystring:"^0.2.0","raw-loader":"^1.0.0-beta.0",reqwest:"^2.0.5",rimraf:"^2.6.2","rucksack-css":"^1.0.2","selenium-server":"^3.0.1",semver:"^5.3.0","style-loader":"^0.18.2",stylelint:"^9.10.1","stylelint-config-prettier":"^4.0.0","stylelint-config-standard":"^18.2.0",through2:"^2.0.3","uglifyjs-webpack-plugin":"^2.1.1","url-loader":"^1.1.2",vue:"^2.6.10","vue-antd-md-loader":"^1.1.0","vue-clipboard2":"0.0.8","vue-eslint-parser":"^5.0.0","vue-i18n":"^8.3.2","vue-infinite-scroll":"^2.0.2","vue-jest":"^2.5.0","vue-loader":"^15.5.1","vue-router":"^3.0.1","vue-server-renderer":"^2.5.16","vue-template-compiler":"^2.6.10","vue-virtual-scroller":"^0.12.0",vuex:"^3.1.0",webpack:"^4.28.4","webpack-cli":"^3.2.1","webpack-dev-server":"^3.1.14","webpack-merge":"^4.1.1",webpackbar:"^3.1.5"},files:["dist","lib","es","types"],homepage:"https://vue.ant.design/",keywords:["ant","design","antd","vue","vueComponent","component","components","ui","framework","frontend"],license:"MIT",main:"lib/index.js",module:"es/index.js",name:"ant-design-vue",peerDependencies:{vue:">=2.5.0","vue-template-compiler":">=2.5.0"},"pre-commit":["lint","prettier"],repository:{type:"git",url:"git+https://github.com/vueComponent/ant-design-vue.git"},scripts:{codecov:"codecov",commitmsg:"commitlint -x @commitlint/config-conventional -e $GIT_PARAMS",compile:"node antd-tools/cli/run.js compile",copy:"node scripts/run.js copy-html",dev:"cross-env NODE_ENV=development ENTRY_INDEX=dev ./node_modules/.bin/webpack-dev-server --open --hot --port 3001",dist:"node antd-tools/cli/run.js dist",lint:"eslint -c ./.eslintrc --fix --ext .jsx,.js,.vue ./components","lint:style":'stylelint "{site,components}/**/*.less" --syntax less',"pre-publish":"node ./scripts/prepub",prepublish:"node antd-tools/cli/run.js guard",prettier:"node ./scripts/prettier.js",pub:"node antd-tools/cli/run.js pub","pub-with-ci":"node antd-tools/cli/run.js pub-with-ci",site:"node scripts/run.js _site",start:"cross-env NODE_ENV=development ./node_modules/.bin/webpack-dev-server --open --hot",test:"cross-env NODE_ENV=test jest --config .jest.js"},sideEffects:["site/*","components/style.js","components/**/style/*","*.vue","*.md","dist/*","es/**/style/*","lib/**/style/*","*.less"],title:"Ant Design Vue",typings:"types/index.d.ts",version:"1.3.8"}},cS3Z:function(e,t){},"hZ/y":function(e,t){},o26v:function(e,t){},uslO:function(e,t,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(e){return s(l(e))}function l(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(n)},a.resolve=l,e.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.58ccfc507513067a9f08.js.map