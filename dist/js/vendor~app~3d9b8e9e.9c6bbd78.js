(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendor~app~3d9b8e9e"],{"101f":function(t,e,a){},1441:function(t,e,a){"use strict";var s=a("bcc8"),o=a.n(s);o.a},2089:function(t,e,a){"use strict";var s=a("101f"),o=a.n(s);o.a},"335c":function(t,e,a){},4360:function(t,e,a){"use strict";a("4160"),a("159b");var s=a("2b0e"),o=a("2f62"),n=a("6b04"),i=a("965d"),r=a("29d3"),l=a("2623");s["default"].use(o["a"]),e["a"]=new o["a"].Store({state:{cancelTokens:[]},mutations:{ADD_CANCEL_TOKEN:function(t,e){t.cancelTokens.push(e)},CLEAR_CANCEL_TOKENS:function(t){t.cancelTokens.length<1||(t.cancelTokens=[])}},actions:{CANCEL_PENDING_REQUESTS:function(t){t.state.cancelTokens.forEach((function(t,e){t.cancel&&t.cancel()})),t.commit("CLEAR_CANCEL_TOKENS")}},getters:{cancelTokens:function(t){return t.cancelTokens}},modules:{student:n["a"],teacher:i["a"],admin:r["a"],school:l["a"]}})},"55c5":function(t,e,a){"use strict";var s=a("81c4"),o=a.n(s);o.a},"680d":function(t,e,a){},"6cdd":function(t,e,a){"use strict";var s=a("c624"),o=a.n(s);o.a},7579:function(t,e,a){},"81c4":function(t,e,a){},"83fa":function(t,e,a){"use strict";var s=a("335c"),o=a.n(s);o.a},"8f99":function(t,e,a){},9316:function(t,e,a){"use strict";var s=a("680d"),o=a.n(s);o.a},a18c:function(t,e,a){"use strict";a("99af");var s=a("2909"),o=a("2b0e"),n=a("8c4f"),i=a("fbee"),r=a("fd66"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"guest-home"}},[a("nav-bar"),a("section",{staticClass:"content w-100"},[a("a",{attrs:{name:"hero"}},[a("HomeHero")],1),a("homepage"),a("a",{attrs:{name:"about"}},[a("FewWords")],1),a("a",{attrs:{name:"contact"}},[a("CallUs")],1),a("Stats"),a("OurServices"),a("OurClients")],1),a("Footer")],1)},c=[],d=a("d806"),u=a("52ec"),m=a("c282"),f=a("f806"),p=a("cebd"),h=a("e82b"),v=a("a12e"),g=a("40b5"),b=a("39b7"),C=a("eec8"),x={name:"guest-home",components:{NavBar:d["a"],Footer:u["a"],OurServices:m["a"],HomeHero:f["a"],Stats:p["a"],FewWords:h["a"],CallUs:v["a"],OurClients:g["a"],Gallery:b["a"],OurLocation:C["a"]},data:function(){return{}},mounted:function(){this.$title()}},_=x,w=(a("dada"),a("2877")),y=Object(w["a"])(_,l,c,!1,null,"47da2993",null),k=(y.exports,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("b-navbar",{staticClass:"guest-navbar w-100",class:t.darken?"light":"faded",attrs:{toggleable:"lg",type:t.darken?"light":"dark",variant:"faded"}},[s("b-navbar-brand",{staticClass:"ml-md-4 ml-3",attrs:{tag:"div"}},[s("img",{staticClass:"logo",attrs:{src:a("ed29"),alt:"Smartclass Logo"}})]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto align-items-lg-center",attrs:{align:"center",fill:""}},[s("b-nav-item",[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:2500,offset:0},expression:"{ duration: 2500, offset: 0 }"}],staticClass:"text-white text-decoration-none",attrs:{href:"#hero"}},[t._v("Home")])]),s("b-nav-item",[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:2500,offset:0},expression:"{ duration: 2500, offset: 0 }"}],staticClass:"text-white text-decoration-none",attrs:{href:"#about"}},[t._v("About Us")])]),s("b-nav-item",[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:2500,offset:0},expression:"{ duration: 2500, offset: 0 }"}],staticClass:"text-white text-decoration-none",attrs:{href:"#services"}},[t._v("Services")])]),s("b-nav-item",[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:2500,offset:0},expression:"{ duration: 2500, offset: 0 }"}],staticClass:"text-white text-decoration-none",attrs:{href:"#portfolio"}},[t._v("Gallery")])]),s("b-nav-item",[s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:2500,offset:0},expression:"{ duration: 2500, offset: 0 }"}],staticClass:"text-white text-decoration-none",attrs:{href:"#team"}},[t._v("Team")])]),s("b-nav-item",{attrs:{"link-classes":"text-white",to:"/blog"}},[t._v("News")]),s("b-nav-item",{attrs:{"link-classes":"text-white",to:"/login"}},[t._v("Login")]),s("b-nav-item",{attrs:{"link-classes":"text-white"}},[t._v("Tutorials")])],1)],1)],1),s("section",{attrs:{id:"hero"}},[s("SlideShow")],1),s("main",{attrs:{id:"main"}},[t._m(1),s("section",{staticClass:"bg-light",attrs:{"data-aos":"fade-up","data-aos-duration":"50",id:"facts"}},[s("div",{staticClass:"container wow fadeIn"},[t._m(2),s("div",{staticClass:"row counters"},[s("div",{staticClass:"col-lg-3 col-6 text-center"},[s("h4",{staticClass:"font-weight-bold h4",attrs:{"data-toggle":"counter-up"}},[t.factsScrolledTo?s("number",{ref:"challenges",attrs:{to:50}}):s("span",[t._v("0")])],1),s("p",[t._v("Challenges")])]),s("div",{staticClass:"col-lg-3 col-6 text-center"},[s("h4",{staticClass:"font-weight-bold h4",attrs:{"data-toggle":"counter-up"}},[t.factsScrolledTo?s("number",{ref:"students",attrs:{to:70}}):s("span",[t._v("0")])],1),s("p",[t._v("Students")])]),s("div",{staticClass:"col-lg-3 col-6 text-center"},[s("h4",{staticClass:"font-weight-bold h4",attrs:{"data-toggle":"counter-up"}},[t.factsScrolledTo?s("number",{ref:"teacher",attrs:{to:120}}):s("span",[t._v("0")])],1),s("p",[t._v("Teachers")])]),s("div",{staticClass:"col-lg-3 col-6 text-center"},[s("h4",{staticClass:"font-weight-bold h4",attrs:{"data-toggle":"counter-up"}},[t.factsScrolledTo?s("number",{ref:"mentors",attrs:{to:70}}):s("span",[t._v("0")])],1),s("p",[t._v("Mentors")])])])])]),t._m(4),t._m(6),s("section",{attrs:{id:"portfolio","data-aos":"fade-up","data-aos-duration":"1000"}},[s("HomeGallery")],1),s("section",{staticClass:"p-0",attrs:{id:"team","data-aos":"fade-up","data-aos-duration":"700"}},[s("OurTeam")],1),s("section",{staticClass:"p-0",attrs:{id:"contact","data-aos":"fade-up","data-aos-duration":"500"}},[t._m(7)],1),s("section",{attrs:{"data-aos":"fade-up","data-aos-duration":"500"}},[t._m(8)],1)]),s("AppFooter"),s("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:2500,offset:0},expression:"{ duration: 2500, offset: 0 }"}],staticClass:"back-to-top",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-chevron-up"})])],1)}),S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container wow"},[a("div",{staticClass:"section-header"},[a("h3",{staticClass:"section-title"},[t._v("Services")]),a("p",{staticClass:"section-description"})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-md-6 wow fadeInUp",attrs:{"data-aos":"fade-up","data-aos-duration":"500"}},[a("div",{staticClass:"box"},[a("div",{staticClass:"icon"},[a("a",[a("i",{staticClass:"fa fa-desktop"})])]),a("h4",{staticClass:"title"},[a("a",[t._v("E-CLASSROOM")])]),a("p",{staticClass:"description"},[t._v(" Your classmates are here,learn with us ")])])]),a("div",{staticClass:"col-lg-4 col-md-6 wow fadeInUp",attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[a("div",{staticClass:"box"},[a("div",{staticClass:"icon"},[a("a",[a("i",{staticClass:"fa fa-book"})])]),a("h4",{staticClass:"title"},[a("a",[t._v("LIBRARY")])]),a("p",{staticClass:"description"},[t._v("The library for you!")])])]),a("div",{staticClass:"col-lg-4 col-md-6 wow fadeInUp",attrs:{"data-aos":"fade-up","data-aos-duration":"1500"}},[a("div",{staticClass:"box"},[a("div",{staticClass:"icon"},[a("a",[a("i",{staticClass:"fa fa-handshake"})])]),a("h4",{staticClass:"title"},[a("a",[t._v("E-MENTORSHIP")])]),a("p",{staticClass:"description"},[t._v(" Don't miss mentorship while mentors are here! ")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"services"}},[t._m(0)])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-header"},[a("h3",{staticClass:"section-title"},[t._v("Facts")]),a("p",{staticClass:"section-description"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row about-container"},[a("div",{staticClass:"col-lg-6 content order-lg-1 order-2"},[a("h2",{staticClass:"title"},[t._v("Few Words About Us")]),a("p",{attrs:{"data-aos":"flip-up","data-aos-duration":"700"}},[t._v(" Smart Class Rwanda, established in 2018, is a private company operating in Rwanda. It operates and manages www.smartclass.rw, an online learning platform which aims to connect all Rwandan high school students learning similar academic subjects and provide them with access to valuable learning materials and high-quality teachers. Thus helping students achieve academic excellence no matter their location or time of day. ")]),a("div",{staticClass:"icon-box",attrs:{"data-aos":"fade-up","data-aos-duration":"500"}},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fa fa-eye"})]),a("h4",{staticClass:"title"},[a("a",{attrs:{href:""}},[t._v("Our vision")])]),a("p",{staticClass:"description"},[t._v(" Bringing opportunity to attain excellent education, anytime anywhere. ")])]),a("div",{staticClass:"icon-box",attrs:{"data-aos":"fade-up","data-aos-duration":"700"}},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fa fa-bullhorn"})]),a("h4",{staticClass:"title"},[a("a",{attrs:{href:""}},[t._v("Our mission")])]),a("p",{staticClass:"description"},[t._v(" Easy access to learning materials and collaboration among students of the same class across the country,we believe in team work. ")])])]),a("div",{staticClass:"col-lg-6 background order-lg-2 order-1",attrs:{"data-aos":"fade-left","data-aos-duration":"700"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"overflow-hidden",attrs:{id:"about"}},[t._m(3)])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-9 text-center text-lg-left"},[a("h3",{staticClass:"cta-title"},[t._v("Call us")]),a("p",{staticClass:"cta-text"},[t._v("call us to ask more about us")])]),a("div",{staticClass:"col-lg-3 cta-btn-container text-center"},[a("a",{staticClass:"cta-btn align-middle",attrs:{href:"tel:+250788202342"}},[t._v("Click to call")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"call-to-action"}},[t._m(5)])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("OurClients")},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("OurLocation")}],E=a("87dd"),$=a("b007"),T=a("f5af"),P=a.n(T);a("e8297");P.a.init({offset:200});var I={name:"homepage",components:{SlideShow:$["a"],AppFooter:u["a"],HomeGallery:b["a"],OurClients:g["a"],OurLocation:C["a"],OurTeam:E["a"]},data:function(){var t=this;return{dark:!1,factsScrolledTo:!1,handleScroll:function(e){window.scrollY<=100?(window.scrollTo(0,0),t.$set(t,"dark",!1)):t.$set(t,"dark",!0)}}},computed:{darken:function(){return this.dark}},mounted:function(){var t=this;this.$title("Welcome"),addEventListener("scroll",this.handleScroll),document.addEventListener("aos:in",(function(e){var a=e.detail;"facts"===a.id&&(t.factsScrolledTo=!0)}))},beforeDestroy:function(){removeEventListener("scroll",this.handleScroll)}},O=I,A=(a("2089"),Object(w["a"])(O,k,S,!1,null,"6070d5b2",null)),R=A.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-column position-relative",attrs:{id:"login"}},[s("div",{staticClass:"back-icon d-flex justify-content-start align-items-center w-100"},[s("router-link",{attrs:{to:"/"}},[s("ArrowIcon",{staticClass:"mr-3"}),s("span",[t._v("Back Home")])],1)],1),s("div",{staticClass:"flex-1 flex-center"},[s("b-container",[s("b-row",{attrs:{"no-gutters":"","align-h":"center"}},[s("b-col",{attrs:{cols:"10",sm:"10",md:"7",lg:"5",xl:"4"}},[s("header",{staticClass:"h4 text-center mb-5 flex-center flex-column no-select"},[s("img",{staticClass:"mb-3",attrs:{src:a("ed29"),alt:"smartclass logo"}})]),s("b-form",{staticClass:"login-form",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("b-form-group",[s("b-input-group",[s("b-input",{attrs:{placeholder:"Username",trim:"",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),s("UserIcon")],1)],1),s("b-form-group",[s("b-input-group",[s("b-input",{attrs:{placeholder:"Password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("LockIcon")],1),s("router-link",{staticClass:"forgot w-100 text-right text-reset",attrs:{to:"/login"}},[t._v(" Forgot password?")])],1),s("div",{staticClass:"buttons"},[s("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.state.loading}},[s("transition-group",{attrs:{name:"group-fade"}},[t.state.loading?s("span",{key:"loading"},[s("AppLoading")],1):s("span",{key:"text"},[t._v("Login")])])],1)],1),s("footer",{staticClass:"flex-center mt-3"},[s("p",[t._v(" Don't have an account? "),s("router-link",{attrs:{to:"/register"}},[t._v("register")])],1)])],1)],1)],1)],1)],1)])},D=[],L=(a("ac1f"),a("5319"),a("72fe")),N=a("bc83"),B=a("fb9e"),j=a("1232"),U={name:"Login-page",components:{LockIcon:N["a"],UserIcon:L["default"],ArrowIcon:B["a"]},data:function(){return{username:null,password:null,state:{loading:!1}}},mounted:function(){this.$title("Login")},methods:{login:function(){var t=this;if(this.username&&this.password){this.state.loading=!0;var e={email:this.username,password:this.password};this.axios.post("login",e).then((function(e){if(t.state.loading=!1,1==e.data.success){console.log(e),sessionStorage.setItem("token",e.data.token);var a=Object(j["a"])(e.data.token);switch(console.log(a),a.data.user_type){case"student":console.log("student"),t.$router.replace("/student");break;case"admin":console.log("admin"),t.$router.replace("/admin");break;case"teacher":console.log("teacher"),t.$router.replace("/teacher");break;case"schoolAD":console.log("school"),t.$router.replace("/school");break;default:console.log("default"),sessionStorage.removeItem("token");break}}else"did not pay"==e.data.status?(t.$notify({title:"ERROR!",message:"Seems like you are not subscribed to any plan!",status:"danger"}),t.$router.push("/payment-confirmation/".concat(e.data.userId))):(console.log(e),t.$notify({title:"ERROR!",message:e.data.message||"Something went wrong, try again.",status:"danger"}))})).catch((function(e){t.state.loading=!1,console.log(e),t.$notify({title:"ERROR!",message:e.errorMessage||"an unknown error occured.",status:"danger"})}))}}}},F=U,H=(a("1441"),Object(w["a"])(F,M,D,!1,null,"760321f5",null)),Y=H.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column position-relative",attrs:{id:"register"}},[a("div",{staticClass:"back-icon d-flex justify-content-start align-items-center w-100"},[a("a",{staticClass:"d-flex align-items-center cursor-pointer",on:{click:function(e){return t.$router.back()}}},[a("ArrowIcon",{staticClass:"mr-3"}),a("span",[t._v("Back")])],1)]),a("div",{staticClass:"flex-1 align-items-center flex-column"},[a("b-container",[a("b-row",{attrs:{"no-gutters":"","align-h":"center"}},[a("b-col",{staticClass:"d-flex flex-column",attrs:{cols:"10",md:"8",lg:"6"}},[a("header",{staticClass:"h4 text-center mb-3 flex-center flex-column no-select"},[a("img",{attrs:{src:t.logo,alt:"smartclass logo"}})]),a("b-row",{staticClass:"mb-3",attrs:{"no-gutters":""}},t._l(t.tabs,(function(e,s){return a("b-col",{key:s,staticClass:"p-2 s-tabs",attrs:{cols:"3"}},[a("label",{staticClass:"w-100 flex-center flex-column",class:t.selectedTab==e?"active":"",on:{click:function(a){return t.setTab(e)}}},[a("span",[t._v(" "+t._s(e)+" "),a("hr")])])])})),1)],1)],1),a("b-row",{attrs:{"no-gutters":"","align-h":"center"}},[a("b-col",{attrs:{cols:"10",sm:"10",md:"8",lg:"7",xl:"6"}},[a("section",{ref:"forms-width",staticClass:"forms flex-1"},[a("div",{ref:"slider",staticClass:"slider d-flex"},[a("student"),a("teacher"),a("mentor"),a("school")],1)])])],1)],1)],1)])},G=[],q=a("ed29"),z=a.n(q),K=a("7e62"),J=a("8bc0"),Q=a("e37f"),V=a("a0a4"),X={name:"register-page",components:{student:K["a"],teacher:J["a"],mentor:Q["a"],school:V["a"],ArrowIcon:B["a"]},data:function(){return{logo:z.a,tabs:["Student","Teacher","Mentor","School"],selectedTab:"Student"}},mounted:function(){this.$title("Register"),this.setTab("Student")},methods:{setTab:function(t){t&&(this.moveTabs(t),t!=this.selectedTab&&this.$set(this,"selectedTab",t))},moveTabs:function(t){var e=this.$refs["slider"],a=function(t){e.style="left: ".concat(100*-t,"%;height: ").concat(e.children[t].clientHeight,"px")};switch(t){case"Student":a(0);break;case"Teacher":a(1);break;case"Mentor":a(2);break;case"School":a(3);break;default:a(0);break}}}},Z=X,tt=(a("f184"),Object(w["a"])(Z,W,G,!1,null,"96fa5300",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"component-fade"}},[a("router-view")],1)},st=[],ot={},nt=ot,it=Object(w["a"])(nt,at,st,!1,null,"af1d43dc",null),rt=it.exports,lt=a("4360"),ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"bg-light pt-4",attrs:{id:"pricing"}},[a("div",{staticClass:"back-icon d-flex justify-content-start align-items-center w-100"},[a("router-link",{staticClass:"d-flex cursor-pointer",attrs:{to:"/"}},[a("ArrowIcon",{staticClass:"mr-3"}),a("span",[t._v("Back Home")])],1)],1),a("header",{staticClass:"w-100 text-center h1 font-weight-light mt-3"},[t._v(" Available Plans on smartclass ")]),a("b-row",{staticClass:"flex-1 py-4 pt-5",attrs:{"no-gutters":"","align-h":"center","align-v":"start"}},[a("b-col",{attrs:{cols:"10",sm:"5",md:"5",lg:"4"}},[a("b-card",{staticClass:"pricing-box p-3 p-md-4 mx-auto my-3 mx-sm-3",attrs:{"no-body":""}},[a("b-card-title",{staticClass:"text-center h3"},[t._v("TESTING")]),a("b-card-sub-title",{staticClass:"text-center"},[t._v("Billed every month.")]),a("b-card-text",{staticClass:"flex-1 d-flex align-items-center flex-column mt-4 pt-2 price"},[a("div",[a("span",[t._v("RWF")]),a("h1",{staticClass:"mb-0"},[t._v("100"),a("span",[t._v("/month")])]),a("span",{staticClass:"text-muted"},[t._v("up to "+t._s(t.expirationDate1))])])]),a("div",{staticClass:"buttons flex-center"},[a("b-button",{staticClass:"text-light",attrs:{variant:"primary",pill:""},on:{click:function(e){return t.showModal("100")}}},[t._v(" select plan ")])],1)],1)],1),a("b-col",{attrs:{cols:"10",sm:"5",md:"5",lg:"4"}},[a("b-card",{staticClass:"pricing-box p-3 p-md-4 mx-auto my-3 mx-sm-3",attrs:{"no-body":""}},[a("b-card-title",{staticClass:"text-center h3"},[t._v("BASIC")]),a("b-card-sub-title",{staticClass:"text-center"},[t._v("Billed every month.")]),a("b-card-text",{staticClass:"flex-1 d-flex align-items-center flex-column mt-4 pt-2 price"},[a("div",[a("span",[t._v("RWF")]),a("h1",{staticClass:"mb-0"},[t._v("3,500"),a("span",[t._v("/month")])]),a("span",{staticClass:"text-muted"},[t._v("up to "+t._s(t.expirationDate1))])])]),a("div",{staticClass:"buttons flex-center"},[a("b-button",{staticClass:"text-light",attrs:{variant:"primary",pill:""},on:{click:function(e){return t.showModal("3,500")}}},[t._v(" select plan ")])],1)],1)],1),a("b-col",{attrs:{cols:"10",sm:"5",md:"5",lg:"4"}},[a("b-card",{staticClass:"pricing-box p-3 p-md-4 mx-auto my-3 mx-sm-3",attrs:{"no-body":""}},[a("b-card-title",{staticClass:"text-center h3"},[t._v("PREMIUM ")]),a("b-card-sub-title",{staticClass:"text-center"},[t._v("Billed every 3 months.")]),a("b-card-text",{staticClass:"flex-1 d-flex align-items-center flex-column mt-4 pt-2 price"},[a("div",[a("span",[t._v("RWF")]),a("h2",{staticClass:"mb-0"},[t._v("10,000"),a("span",[t._v("/3 months")])]),a("span",{staticClass:"text-muted"},[t._v("up to "+t._s(t.expirationDate3))])])]),a("div",{staticClass:"buttons flex-center"},[a("b-button",{staticClass:"text-light",attrs:{variant:"primary",pill:""},on:{click:function(e){return t.showModal("10,000")}}},[t._v(" select plan ")])],1)],1)],1)],1),a("b-modal",{ref:"payment-modal",attrs:{id:"payment-modal",scrollable:"","hide-footer":""},on:{show:t.resetModal,hidden:t.resetModal},scopedSlots:t._u([{key:"modal-title",fn:function(){return[a("h4",{staticClass:"text-uppercase mb-0 flex-1 text-center"},[t._v(" "+t._s(t.paymentPlan)+" PLAN PAYMENT ")])]},proxy:!0}]),model:{value:t.state.modalShown,callback:function(e){t.$set(t.state,"modalShown",e)},expression:"state.modalShown"}},[a("b-form",{ref:"payment-form",staticClass:"px-3 pb-2",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.pay(e)}}},[a("b-form-group",{staticClass:"my-2",attrs:{label:"Payment Method:","label-class":"h4"}},[a("b-form-radio-group",{attrs:{disabled:t.state.loading,required:"",options:[{text:"MTN Mobile Money",value:"mtn"},{text:"Tigo Cash",value:"tigo"},{text:"Airtel Money",value:"airtel"}],name:"radios-stacked",stacked:""},model:{value:t.method,callback:function(e){t.method=e},expression:"method"}})],1),t.selectedPlan?a("b-form-group",{staticClass:"mb-3"},[a("b-row",{attrs:{"no-gutters":"","align-v":"end"}},[a("b-col",{staticClass:"mr-2 h6",attrs:{cols:"auto"}},[t._v("Amount to pay:")]),a("b-col",{staticClass:"h5"},[t._v(" "+t._s(t.selectedPlan)+" RWF")])],1)],1):t._e(),a("b-form-group",{staticClass:"mt-2"},[a("b-input-group",[a("div",{staticClass:"icon"},[a("UserIcon")],1),a("b-form-input",{attrs:{trim:"",required:"",placeholder:"Names"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),a("b-form-group",[a("b-input-group",[a("b-input-group-prepend",{staticClass:"bold",attrs:{"is-text":""}},[t._v("+250 7"+t._s(t.numberBycarrier))]),a("b-input",{attrs:{number:"",type:"number",trim:"",required:"",placeholder:"Phone number"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],1),a("div",{staticClass:"buttons d-flex justify-content-end mt-4"},[a("b-button",{staticClass:"text-white",attrs:{pill:"",variant:"primary",type:"submit",disabled:t.state.loading}},[a("transition-group",{attrs:{name:"group-fade"}},[t.state.loading?a("span",{key:"loading"},[a("AppLoading",{attrs:{size:"xs"}})],1):a("span",{key:"text"},[t._v("Pay now")])])],1)],1)],1)],1)],1)},dt=[],ut=(a("b0c0"),{name:"pricing-page",components:{ArrowIcon:B["a"],UserIcon:L["default"]},props:["userID"],data:function(){return{selectedPlan:null,name:null,phone:null,method:"mtn",state:{loading:!1,modalShown:!1}}},computed:{expirationDate1:function(){var t=new Date;return t.setMonth(t.getMonth()+1),t.toLocaleString("default",{month:"long",day:"numeric",year:"numeric"})},expirationDate3:function(){var t=new Date;return t.setMonth(t.getMonth()+3),t.toLocaleString("default",{month:"long",day:"numeric",year:"numeric"})},numberBycarrier:function(){return"mtn"==this.method?8:"tigo"==this.method?2:"airtel"==this.method?3:void 0},paymentPlan:function(){if(this.selectedPlan)return"3,500"==this.selectedPlan?"Basic":"Premium"}},mounted:function(){this.$title("Pricing")},methods:{pay:function(){var t=this,e={action:"StudentPay",userId:this.userID,phone:"07".concat(this.numberBycarrier).concat(this.phone),amount:this.selectedPlan,names:this.name};this.state.loading=!0,this.axios.post("pay",e).then((function(a){console.log(a),t.state.loading=!1,t.closeModal(),t.$router.push("/payment-confirmation/".concat(e.userId))})).catch((function(e){t.state.loading=!1,t.$notify({status:"danger",title:"ERROR!",message:e.errorMessage||"Something went wrong!"})}))},showModal:function(t){this.state.modalShown=!0,this.selectedPlan=t},resetModal:function(){this.name=null,this.phone=null},closeModal:function(){this.$bvModal.hide("payment-modal")}}}),mt=ut,ft=(a("55c5"),Object(w["a"])(mt,ct,dt,!1,null,"b05df40c",null)),pt=ft.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"bg-light pt-4",attrs:{id:"payment-confirm"}},[a("div",{staticClass:"back-icon d-flex justify-content-start align-items-center w-100"},[a("a",{staticClass:"flex-center cursor-pointer",on:{click:function(e){return t.$router.back()}}},[a("ArrowIcon",{staticClass:"mr-3"}),a("span",[t._v("Back ")])],1)]),a("b-row",{staticClass:"flex-1",attrs:{"align-h":"center","align-v":"center","no-gutters":""}},[a("b-col",{attrs:{cols:"10",sm:"8",md:"6",lg:"5",xl:"4"}},[a("transition-group",{attrs:{name:"group-fade"}},[t.state.loading?a("div",{key:"loading",staticClass:"loading"},[a("AppLoading",{attrs:{size:"md",type:"primary"}}),a("br"),a("p",{staticClass:"text-center h5"},[t._v("Loading...")])],1):t.state.pending?a("div",{key:"pending",staticClass:"pending"},[a("div",{staticClass:"icon"}),a("h1",{staticClass:"text-primary"},[t._v("Be Patient")]),a("article",[t._v(" We are still processing your payment. please wait a moment and click refresh to check if we finished processing your payment. ")]),a("div",{staticClass:"buttons mt-4"},[a("b-button",{staticClass:"px-4",attrs:{pill:"",variant:"dark"},on:{click:t.refresh}},[t._v("Refresh")])],1)]):t.state.success?a("div",{key:"success",staticClass:"success"},[a("div",{staticClass:"icon"}),a("h1",{staticClass:"text-success"},[t._v("Congratulation")]),a("article",[t._v(" We successfully processed your payment, you can now continue to create your profile. ")]),a("div",{staticClass:"buttons"},[a("b-button",{staticClass:"mt-4 px-3",attrs:{variant:"dark",pill:"",to:"/student/create-profile/"+t.userID}},[t._v(" Create your profile ")])],1)]):t.state.failed?a("div",{key:"failed",staticClass:"failed"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"content"},[a("h1",{staticClass:"text-danger"},[t._v("Sorry")]),a("article",[t._v(" We can't complete your payment at this time. your payment has failed. if this problem continues contact our customer support. ")]),a("div",{staticClass:"buttons"},[a("b-button",{staticClass:"px-4 mt-4",attrs:{pill:"",variant:"dark",to:"/pricing/"+t.userID}},[t._v("Retry transaction")])],1)])]):t.state.error?a("div",{key:"error",staticClass:"pending"},[a("div",{staticClass:"icon"}),a("h1",{staticClass:"text-danger"},[t._v("ERROR!")]),a("article",[t._v(" Something went wrong. check your internet connection and click refresh! ")]),a("div",{staticClass:"buttons mt-4"},[a("b-button",{staticClass:"px-4",attrs:{pill:"",variant:"dark"},on:{click:t.refresh}},[t._v("Refresh")])],1)]):t._e()])],1)],1)],1)},vt=[],gt=(a("caad"),a("2532"),{name:"payment-confirm-page",components:{ArrowIcon:B["a"]},props:["userID"],data:function(){return{state:{loading:!0,modalShown:!1,success:!1,pending:!0,failed:!1,error:!1}}},mounted:function(){this.$title("Payment confirmation"),this.refresh()},methods:{refresh:function(){var t=this;if(this.userID){var e={action:"Checkpayment",userId:this.userID};this.state.loading=!0,this.resetState(),this.axios.post("pay",e).then((function(e){console.log(e.data),t.state.loading=!1,e.data.status&&"PENDING"==e.data.status?t.state.pending=!0:e.data.status&&"SUCCESS"==e.data.status?t.state.success=!0:e.data.status&&"FAILED"==e.data.status?t.state.failed=!0:e.data.message.includes("there's no transaction yet")?(console.log(e.data),t.$router.push("/pricing/".concat(t.userID))):t.state.error=!0,console.log(e.data)})).catch((function(e){console.log(e),t.state.loading=!1,t.state.error=!0}))}},resetState:function(){this.state.success=!1,this.state.pending=!1,this.state.failed=!1,this.state.error=!1}}}),bt=gt,Ct=(a("f251"),Object(w["a"])(bt,ht,vt,!1,null,"0e3eb352",null)),xt=Ct.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"logout"}},[a("AppLoading",{attrs:{size:"md",type:"primary"}})],1)},wt=[],yt={name:"logout",mounted:function(){var t=this,e=setTimeout((function(){sessionStorage.removeItem("token"),t.$router.replace("/login"),clearTimeout(e)}),3e3)}},kt=yt,St=(a("9316"),Object(w["a"])(kt,_t,wt,!1,null,"97cfb968",null)),Et=St.exports,$t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"blog"},[s("b-navbar",{staticClass:"blog-navbar w-100",attrs:{toggleable:"lg",type:"light",variant:"light",sticky:""}},[s("b-navbar-brand",{staticClass:"ml-md-4 ml-3",attrs:{tag:"div"}},[s("img",{staticClass:"logo",attrs:{src:a("ed29"),alt:"Smartclass Logo"}})]),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto align-items-lg-center",attrs:{align:"center",fill:""}},[s("b-nav-item",[s("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:2500,offset:0},expression:"{ duration: 2500, offset: 0 }"}],staticClass:"text-decoration-none",attrs:{to:"/#hero"}},[t._v("Home ")])],1),s("b-nav-item",[s("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:2500,offset:0},expression:"{ duration: 2500, offset: 0 }"}],staticClass:"text-decoration-none",attrs:{to:"/#about"}},[t._v("About Us ")])],1),s("b-nav-item",[s("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:2500,offset:0},expression:"{ duration: 2500, offset: 0 }"}],staticClass:"text-decoration-none",attrs:{to:"/#services"}},[t._v("Services ")])],1),s("b-nav-item",[s("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:2500,offset:0},expression:"{ duration: 2500, offset: 0 }"}],staticClass:"text-decoration-none",attrs:{to:"/#portfolio"}},[t._v("Gallery ")])],1),s("b-nav-item",[s("router-link",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:2500,offset:0},expression:"{ duration: 2500, offset: 0 }"}],staticClass:"text-decoration-none",attrs:{to:"/#team"}},[t._v("Team ")])],1),s("b-nav-item",{attrs:{to:"/blog","link-classes":"text-decoration-none text-primary"}},[t._v(" News ")]),s("b-nav-item",{attrs:{to:"/login","link-classes":"text-decoration-none text-primary"}},[t._v(" Login ")]),s("b-nav-item",{attrs:{"link-classes":"text-decoration-none text-primary"}},[t._v(" Tutorials ")])],1)],1)],1),s("main",[s("b-jumbotron",{staticClass:"text-center blog-ribbon",attrs:{fluid:"","bg-variant":"light","text-variant":"dark","header-level":"4"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("SMART CLASS")]},proxy:!0},{key:"lead",fn:function(){return[t._v(" Discover latest news on smart class blog! ")]},proxy:!0}])}),s("div",{staticClass:"blog-content"},[s("transition",{attrs:{name:"group-fade",mode:"out-in"}},[t.state.loadingBlogs?s("div",{staticClass:"py-5 w-100 flex-center flex-column"},[s("app-loading",{attrs:{type:"dark"}}),s("h6",{staticClass:"mt-3"},[t._v("Loading Blogs")])],1):t.blogsAvailable?s("blogs-grid",{attrs:{"blogs-data":t.allBlogs}}):s("b-row",{attrs:{"no-gutters":"","align-v":"center","align-h":"center"}},[s("h6",{staticClass:"text-center py-5"},[t._v(" No Blog Posts available at the moment! try again later ")])])],1)],1)],1),s("app-footer")],1)},Tt=[],Pt=(a("96cf"),a("1da1")),It=a("fa00"),Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"pt-4 pb-5"},[a("b-row",{attrs:{cols:"1","align-h":"center"}},t._l(t.blogsData,(function(e,s){return a("b-col",{key:s,staticClass:"p-3"},[a("div",{staticClass:"blog-box d-flex flex-column flex-md-row px-3 py-4"},[a("div",{staticClass:"date pr-4 pl-2 mb-2"},[a("span",{staticClass:"text-uppercase"},[t._v(t._s(t._f("date")(e.Date)))])]),a("div",{staticClass:"content pl-2"},[a("div",{staticClass:"title h3 mb-4",on:{click:function(a){return t.setSelectedPost(e)}}},[t._v(" "+t._s(e.title)+" ")]),a("div",{staticClass:"content"},[a("span",{domProps:{innerHTML:t._s(e.subject)}})])])])])})),1),a("transition",{attrs:{name:"slide-in-up"}},[t.showPostPreview?a("post-preview",{on:{close:function(e){return t.setSelectedPost(null)}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(t._s(t.selectedPost.title))]},proxy:!0},{key:"date",fn:function(){return[t._v(t._s(t._f("date")(t.selectedPost.Date)))]},proxy:!0}],null,!1,1714938916)},[t._v(" "+t._s(t.selectedPost.subject)+" ")]):t._e()],1)],1)},At=[],Rt=a("c1df"),Mt=a.n(Rt),Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"post-preview"},[a("main",{staticClass:"d-flex flex-column h-100 px-3"},[a("b-row",{staticClass:"flex-nowrap header",attrs:{"no-gutters":"","align-h":"between"}},[a("b-col",{staticClass:"pl-2 pl-md-3"},[a("div",{staticClass:"title h4"},[t._t("title")],2),a("div",{staticClass:"date"},[t._v("Published on "),t._t("date")],2)]),a("b-col",{attrs:{cols:"auto"}},[a("b-icon-x",{staticClass:"cursor-pointer",attrs:{"font-scale":"2.5"},on:{click:function(e){return t.$emit("close")}}})],1)],1),a("pre",{staticClass:"overflow-auto flex-1 pb-2 px-3 px-sm-4 px-md-5"},[t._t("default"),t._v("\n    ")],2)],1)])},Lt=[],Nt={},Bt=Nt,jt=(a("6cdd"),Object(w["a"])(Bt,Dt,Lt,!1,null,"a900584c",null)),Ut=jt.exports,Ft={name:"blogs-grid-component",props:["blogs-data"],components:{PostPreview:Ut},data:function(){return{selectedPost:null}},computed:{showPostPreview:function(){return!!this.selectedPost}},filters:{date:function(t){return Mt()(t,"DD-MM-YYYY").format("MMM, Do YYYY")}},methods:{setSelectedPost:function(t){this.$set(this,"selectedPost",t)}}},Ht=Ft,Yt=(a("e2da"),Object(w["a"])(Ht,Ot,At,!1,null,"7dc846a6",null)),Wt=Yt.exports,Gt={name:"app-blog",components:{AppFooter:It["a"],BlogsGrid:Wt},data:function(){return{allBlogs:null,state:{loadingBlogs:!1}}},computed:{blogsAvailable:function(){return!!this.allBlogs&&!(this.allBlogs.length&&this.allBlogs.length<1)}},beforeMount:function(){this.refreshBlogs(),this.$title("News")},methods:{fetchBlogs:function(){var t=this;return Object(Pt["a"])(regeneratorRuntime.mark((function e(){var a,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state.loadingBlogs=!0,a={action:"getPosts"},e.prev=2,e.next=5,t.axios.post("getPosts",a);case 5:s=e.sent,o=s.data,t.state.loadingBlogs=!1,t.$set(t,"allBlogs",o),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](2),t.state.loadingBlogs=!1,console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))()},refreshBlogs:function(){this.state.loadingBlogs||this.fetchBlogs()}}},qt=Gt,zt=(a("83fa"),Object(w["a"])(qt,$t,Tt,!1,null,"2a63e9ea",null)),Kt=zt.exports,Jt=a("03c5"),Qt=a("5403"),Vt=a("7890"),Xt=a("f57a");o["default"].use(n["a"]);var Zt=[{path:"/",component:rt,children:[{path:"",component:R,meta:{guest:!0}}]},{path:"/login",component:Y,meta:{guest:!0}},{path:"/register",component:et,meta:{guest:!0}},{path:"/splash",component:r["a"],meta:{helper:!0}},{path:"/blog",component:Kt,meta:{guest:!0}},{path:"/pricing/:userID",component:pt,meta:{guest:!0},props:!0},{path:"/payment-confirmation/:userID",component:xt,meta:{guest:!0},props:!0},{path:"/logout",component:Et,meta:{helper:!0}}],te=[].concat(Zt,Object(s["a"])(Jt["a"]),Object(s["a"])(Qt["a"]),Object(s["a"])(Vt["a"]),Object(s["a"])(Xt["a"])),ee=new n["a"]({mode:"history",routes:te});ee.beforeEach((function(t,e,a){lt["a"].dispatch("CANCEL_PENDING_REQUESTS"),Object(i["a"])(t,e,a)})),console.log("hello");e["a"]=ee},bcc8:function(t,e,a){},bf192:function(t,e,a){},c624:function(t,e,a){},dada:function(t,e,a){"use strict";var s=a("bf192"),o=a.n(s);o.a},e2da:function(t,e,a){"use strict";var s=a("e99d"),o=a.n(s);o.a},e99d:function(t,e,a){},f184:function(t,e,a){"use strict";var s=a("7579"),o=a.n(s);o.a},f251:function(t,e,a){"use strict";var s=a("8f99"),o=a.n(s);o.a}}]);