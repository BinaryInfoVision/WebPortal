(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{IYw8:function(t,e,i){"use strict";i.r(e),i.d(e,"AppsModule",function(){return I});var n=i("ofXK"),o=i("1kSV"),a=i("tyNb"),r=i("fXoL"),s=i("LRne");const b=[{id:1,image:"assets/images/blog/101.jpg",heading:"Core Java",subHeading:"Core JAva, Spring, Boot, NHibernet",blogDate:"Sep 19, 2023",blogDetail:"Full stack course with Advanced topics in Core JAva Development, Angualar, JAvascript, Jquery, HTML, CSS.Full-stack java developers develop both the front-end and the server-side of the application, deploy, debug and maintain their databases and serversIf you wish to be a full stack java developer one must be proficient inBasic Technology \u2013 C programmingDatabases \u2013 SQL and No SQLFront End Technology \u2013 HTML, CSS, Bootstrap, JavascriptServer Side Programming \u2013 JavaFrameworks \u2013 Hibernate, Spring, Spring Boot, Angular",blogAuthor:"Girish Ballal"},{id:2,image:"assets/images/blog/202.jpg",heading:"ASP.NET C#",subHeading:"ASP.net Core, MVC",blogDate:"Sep 19, 2023",blogDetail:"Full stack course with Advanced topics in ASP.net Development, Angualar, JAvascript, Jquery, HTML, CSS.",blogAuthor:"Ganesh Jadhav"},{id:3,image:"assets/images/blog/303.jpg",heading:"Python",subHeading:"Python, MVC",blogDate:"Sep 19, 2023",blogDetail:"Full stack course with Advanced topics in Python Development, Angualar, JAvascript, Jquery, HTML, CSS.",blogAuthor:"Girish Ballal"},{id:4,image:"assets/images/blog/404.jpg",heading:"Angular",subHeading:"ASP.net Core, MVC",blogDate:"Sep 19, 2023",blogDetail:"Full stack course with Advanced topics in ASP.net Development, Angualatr, JAvascript, Jquery, HTML, CSS.",blogAuthor:"Ganesh Jadhav"}];var c=i("tk/3");let l=(()=>{class t{constructor(t){this.http=t,this.Blogs=[],this.loginStatusService=!1,this.detailId=-1,this.showEdit=!1}getBlog(){return Object(s.a)(b)}addPost(t){this.Blogs.splice(0,0,t)}deletePost(t){this.Blogs=this.Blogs.filter(e=>e.id!==t)}}return t.\u0275fac=function(e){return new(e||t)(r.Ub(c.a))},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function d(t,e){if(1&t){const t=r.Ob();r.Nb(0,"div",13),r.Nb(1,"div",14),r.Nb(2,"div",15),r.Nb(3,"div",16),r.Nb(4,"span",17),r.vc(5),r.Mb(),r.Nb(6,"h6",18),r.vc(7,"By Ganesh Jadhav"),r.Mb(),r.Mb(),r.Nb(8,"div",19),r.Nb(9,"h5",20),r.Xb("click",function(){r.nc(t);const i=e.$implicit;return r.Zb().viewDetail(i.id)}),r.vc(10),r.Mb(),r.Nb(11,"p",21),r.vc(12),r.Mb(),r.Mb(),r.Nb(13,"div",22),r.Nb(14,"a",23),r.Nb(15,"span",7),r.Xb("click",function(){r.nc(t);const i=e.$implicit;return r.Zb().viewDetail(i.id)}),r.vc(16,"Show Detail"),r.Mb(),r.Jb(17,"i",24),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()}if(2&t){const t=e.$implicit;r.wb(5),r.wc(t.blogDate),r.wb(5),r.xc(" ",t.heading.substring(0,50),".. "),r.wb(2),r.xc(" ",t.subHeading," ")}}let u=(()=>{class t{constructor(t,e,i){this.service=t,this.router=e,this.http=i,this.blogsDetail=[],this.service.showEdit=!1}ngOnInit(){0===this.service.Blogs.length&&this.service.getBlog().subscribe(t=>this.service.Blogs=t)}ngAfterViewInit(){}loginClick(){this.router.navigate(["/login"])}newPost(){this.router.navigate(["/post"])}viewDetail(t){this.service.detailId=t,this.service.loginStatusService&&(this.service.showEdit=!0),this.router.navigate(["/blogDetail",t])}inquiryDetails(){this.router.navigate(["/inquiryDetails"])}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(l),r.Ib(a.b),r.Ib(c.a))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-blog"]],decls:22,vars:1,consts:[[1,"static-slider-head",2,"background-image","url(assets/images/landingpage/banner-bg.jpg)"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-9","col-md-6","align-self-center","text-center","no-trans"],[1,"title"],[1,"subtitle","op-1"],[1,"btn","btn-md","m-t-30","btn-success-gradiant","font-14"],[3,"click"],[1,"container","spacer"],[1,"col-md-8","no-trans","text-center"],[1,"subtitle"],[1,"row","m-t-40","justify-content-center"],["class","col-md-8 no-trans border-bottom mb-4",4,"ngFor","ngForOf"],[1,"col-md-8","no-trans","border-bottom","mb-4"],["data-aos","flip-left","data-aos-duration","1200",1,"card"],[1,"row"],[1,"col-md-2","no-trans"],[1,"text-dark","font-medium"],[1,"card-subtitle","font-12","mt-1"],[1,"col-md-7","no-trans"],[1,"font-medium","cursor-pointer",3,"click"],[1,"m-t-20"],[1,"col-md-3","no-trans"],[1,"linking","font-medium","text-themecolor","m-t-10","cursor-pointer"],[1,"ti-arrow-right"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"div",3),r.Nb(4,"h1",4),r.vc(5,"Binary InfoVision"),r.Mb(),r.Nb(6,"h3",5),r.vc(7," Want to make career in Software Development??? "),r.Jb(8,"br"),r.vc(9," Binary InfoVision is the right choice. "),r.Mb(),r.Nb(10,"a",6),r.Nb(11,"span",7),r.Xb("click",function(){return e.inquiryDetails()}),r.vc(12,"Register Now"),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(13,"div",8),r.Nb(14,"div",2),r.Nb(15,"div",9),r.Nb(16,"h2",4),r.vc(17,"Latest Courses"),r.Mb(),r.Nb(18,"h6",10),r.vc(19," You can relay on our amazing courses list and get great experience for you career progression without doubt. "),r.Mb(),r.Mb(),r.Mb(),r.Nb(20,"div",11),r.tc(21,d,18,3,"div",12),r.Mb(),r.Mb()),2&t&&(r.wb(21),r.ec("ngForOf",e.service.Blogs))},directives:[n.i],styles:[""]}),t})(),g=(()=>{class t{constructor(){this.imagePath="../assets/images/innerpage/about-us.jpg"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-top-content"]],decls:18,vars:1,consts:[[1,"row","wrap-feature-22"],["data-aos","flip-up","data-aos-duration","1200",1,"col-lg-6"],["alt","wrapkit",1,"rounded","img-responsive",3,"src"],[1,"col-lg-6","no-trans"],[1,"text-box"],[1,"text-info","font-medium"],["data-toggle","collapse","routerLink","#",1,"btn","btn-info-gradiant","btn-md","btn-arrow","m-t-20"],[1,"ti-arrow-right"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Jb(2,"img",2),r.Mb(),r.Nb(3,"div",3),r.Nb(4,"div",4),r.Nb(5,"h2",5),r.vc(6,"Binary InfoVision Ltd "),r.Mb(),r.Nb(7,"p"),r.vc(8," Welcome to an institution that provides knowledge beyond books, knowledge beyond boundaries. An institution that believes information can help you see things from several perspectives and insights can help you see Beyond the obvious. "),r.Mb(),r.Nb(9,"p"),r.vc(10," Incorporated in 2021, "),r.Nb(11,"strong"),r.vc(12,"Binary Infovision "),r.Mb(),r.vc(13,"is one of India\u2019s leading solution providers in Information Technology training, staffing and products & tools consulting services to both retail (i.e. students, professionals and individuals) and corporate customers. With our headquarters in Pune, one of the IT hubs of India, our activities are spread over many locations in the state of Maharashtra and other IT Metros in India Proudly Associated with with global technology leaders such as Microsoft, Red Hat, NSDC, EC Council, Gasq, Kryterion, Prometric, SAP, Hortonworks, are undoubtedly our core strengths. We have 300+ corporate clients and are associated with 50+ Academic Institutions. "),r.Mb(),r.Nb(14,"a",6),r.Nb(15,"span"),r.vc(16,"View Other Features "),r.Jb(17,"i",7),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&t&&(r.wb(2),r.ec("src",e.imagePath,r.oc))},directives:[a.d],styles:[""]}),t})();function v(t,e){if(1&t&&(r.Nb(0,"div",2),r.Nb(1,"div",3),r.Nb(2,"div",4),r.Nb(3,"div",5),r.Jb(4,"i"),r.Mb(),r.Nb(5,"h5",6),r.vc(6),r.Mb(),r.Nb(7,"p",7),r.vc(8),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&t){const t=e.$implicit;r.wb(4),r.yb(t.icon),r.wb(2),r.wc(t.field),r.wb(2),r.xc(" ",t.fieldText," ")}}let p=(()=>{class t{constructor(){this.relayOn=[{icon:"sl-icon-target text-info-gradiant",field:"Our Belief",fieldText:"Each soul is potentially divine. The goal is to manifest this divinity within by controlling nature, external and internal. Do this either by work or worship"},{icon:"sl-icon-mouse text-info-gradiant",field:"Mission",fieldText:"To unveil the Human Potential to create Global Quality Technology Workforce."},{icon:"sl-icon-earphones-alt text-info-gradiant",field:"Vision",fieldText:"To be University of Technology Application."}]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-relay-on"]],decls:2,vars:1,consts:[[1,"row","m-t-40"],["class","col-md-4 wrap-feature1-box",4,"ngFor","ngForOf"],[1,"col-md-4","wrap-feature1-box"],["data-aos","fade-right","data-aos-duration","1200",1,"card","card-shadow"],[1,"card-body","p-40","text-center"],[1,"icon-space","display-5"],[1,"font-medium"],[1,"m-t-20"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.tc(1,v,9,4,"div",1),r.Mb()),2&t&&(r.wb(1),r.ec("ngForOf",e.relayOn))},directives:[n.i],styles:[""]}),t})(),h=(()=>{class t{constructor(t){this.service=t,this.service.showEdit=!1}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(l))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-about"]],decls:18,vars:0,consts:[[1,"banner-innerpage",2,"background-image","url(assets/images/landingpage/banner-bg2.jpg)"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-9","col-md-6","no-trans","align-self-center","text-center"],[1,"title"],[1,"spacer","feature22"],[1,"bg-light","spacer","feature1"],[1,"col-md-7","text-center","no-trans"],[1,"subtitle"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"div",3),r.Nb(4,"h1",4),r.vc(5,"About Binary InfoVision"),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(6,"div",5),r.Nb(7,"div",1),r.Jb(8,"app-top-content"),r.Mb(),r.Mb(),r.Nb(9,"div",6),r.Nb(10,"div",1),r.Nb(11,"div",2),r.Nb(12,"div",7),r.Nb(13,"h2",4),r.vc(14,"Binary Infovision Ideology"),r.Mb(),r.Nb(15,"h6",8),r.vc(16," Welcome to an institution that provides knowledge beyond books, knowledge beyond boundaries. An institution that believes information can help you see things from several perspectives\u2026. And insights can help you see beyond the obvious. "),r.Mb(),r.Mb(),r.Mb(),r.Jb(17,"app-relay-on"),r.Mb(),r.Mb())},directives:[g,p],styles:[""]}),t})(),f=(()=>{class t{constructor(t,e,i){this.service=e,this.router=i,this.blogDetail=null,this.id=t.snapshot.paramMap.get("id")}ngOnInit(){this.blogDetail=this.service.Blogs.filter(t=>t.id===+this.id)[0]}loginClick(){this.router.navigate(["/login"])}newPost(){this.service.showEdit=!1,this.router.navigate(["/post"])}editPost(){var t;this.service.showEdit=!1,this.router.navigate(["/editPost",null===(t=this.blogDetail)||void 0===t?void 0:t.id])}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(a.a),r.Ib(l),r.Ib(a.b))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-blog-detail"]],decls:32,vars:6,consts:[[1,"banner-innerpage",2,"background-image","url(assets/images/landingpage/banner-bg2.jpg)"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-9","col-md-6","align-self-center","text-center"],[1,"title"],[1,"subtitle","op-5"],[1,"col-md-8","no-trans"],[1,"mini-spacer"],["alt","wrapkit",1,"img-fluid",3,"src"],[1,"d-flex","align-items-center","text-uppercase","m-t-40","font-13","font-medium"],["routerLink","",1,"link"],[1,"ml-auto"],[1,"title","font-light"],[1,"m-t-30","m-b-30"],[1,"m-t-30"],["type","button",1,"btn","bg-facebook","btn-rounded","mr-3"],[1,"fa","fa-facebook"],["type","button",1,"btn","bg-twitter","btn-rounded"],[1,"fa","fa-twitter"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"div",3),r.Nb(4,"h1",4),r.vc(5,"Course Details Page"),r.Mb(),r.Nb(6,"h5",5),r.vc(7," Full stack java development and Java is the highest demand job in the Software Industry. "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(8,"div",1),r.Nb(9,"div",2),r.Nb(10,"div",6),r.Nb(11,"div",7),r.Jb(12,"img",8),r.Nb(13,"div",9),r.Nb(14,"a",10),r.vc(15),r.Mb(),r.Nb(16,"div",11),r.Nb(17,"a",10),r.vc(18),r.Mb(),r.Mb(),r.Mb(),r.Nb(19,"h2",12),r.vc(20),r.Mb(),r.Nb(21,"p",13),r.vc(22),r.Mb(),r.Nb(23,"p",13),r.vc(24),r.Mb(),r.Nb(25,"div",14),r.Nb(26,"button",15),r.Jb(27,"i",16),r.vc(28," Facebook "),r.Mb(),r.Nb(29,"button",17),r.Jb(30,"i",18),r.vc(31," Twitter "),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&t&&(r.wb(12),r.ec("src",null==e.blogDetail?null:e.blogDetail.image,r.oc),r.wb(3),r.wc(null==e.blogDetail?null:e.blogDetail.blogAuthor),r.wb(3),r.xc("",null==e.blogDetail?null:e.blogDetail.blogDate," "),r.wb(2),r.xc(" ",null==e.blogDetail?null:e.blogDetail.heading," "),r.wb(2),r.xc(" ",null==e.blogDetail?null:e.blogDetail.subHeading," "),r.wb(2),r.xc(" ",null==e.blogDetail?null:e.blogDetail.blogDetail," "))},directives:[a.d],styles:[""]}),t})();const m=function(){return["active"]};let M=(()=>{class t{constructor(t){this.router=t,this.logoutStatus=!1}ngOnInit(){}inquiryDetails(){this.router.navigate(["/inquiryDetails"])}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(a.b))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-banner-navigation"]],decls:14,vars:4,consts:[["id","h6-info",1,"collapse","navbar-collapse","hover-dropdown","font-14","ml-auto"],[1,"navbar-nav","ml-auto","align-items-center"],[1,"nav-item",3,"routerLinkActive"],["routerLink","/",1,"nav-link"],["routerLink","/about",1,"nav-link"],[1,"nav-item"],[1,"btn","btn-danger-gradiant","font-14"],[3,"click"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"ul",1),r.Nb(2,"li",2),r.Nb(3,"a",3),r.Nb(4,"strong"),r.vc(5," Home "),r.Mb(),r.Mb(),r.Mb(),r.Nb(6,"li",2),r.Nb(7,"a",4),r.Nb(8,"strong"),r.vc(9," About "),r.Mb(),r.Mb(),r.Mb(),r.Nb(10,"li",5),r.Nb(11,"a",6),r.Nb(12,"span",7),r.Xb("click",function(){return e.inquiryDetails()}),r.vc(13,"Register Now"),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb()),2&t&&(r.wb(2),r.ec("routerLinkActive",r.hc(2,m)),r.wb(4),r.ec("routerLinkActive",r.hc(3,m)))},directives:[a.c,a.d],styles:[".active[_ngcontent-%COMP%]{color:#ff0}"]}),t})(),N=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-banner"]],decls:9,vars:0,consts:[["id","top",1,"topbar"],[1,"header6"],[1,"container","po-relative"],[1,"navbar","navbar-expand-lg","h6-nav-bar"],["routerLink","",1,"navbar-brand"],["src","assets/images/logos/white-text.png","alt","wrapkit"],["type","button","data-toggle","collapse","data-target","#h6-info","aria-controls","h6-info","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"ti-menu"],[1,"ml-auto"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"nav",3),r.Nb(4,"a",4),r.Jb(5,"img",5),r.Mb(),r.Nb(6,"button",6),r.Jb(7,"span",7),r.Mb(),r.Jb(8,"app-banner-navigation",8),r.Mb(),r.Mb(),r.Mb(),r.Mb())},directives:[o.b,a.d,M],styles:[""]}),t})(),w=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-footer"]],decls:18,vars:0,consts:[[1,"footer4","b-t","spacer"],[1,"container","text-center"],[1,"round-social","light"],["routerLink","#",1,"link"],[1,"fa","fa-facebook"],[1,"fa","fa-twitter"],[1,"fa","fa-google-plus"],[1,"fa","fa-youtube-play"],[1,"fa","fa-instagram"],[1,"mt-3","copyright"],["href","https://www.binaryInfovision.com/"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"a",3),r.Jb(4,"i",4),r.Mb(),r.Nb(5,"a",3),r.Jb(6,"i",5),r.Mb(),r.Nb(7,"a",3),r.Jb(8,"i",6),r.Mb(),r.Nb(9,"a",3),r.Jb(10,"i",7),r.Mb(),r.Nb(11,"a",3),r.Jb(12,"i",8),r.Mb(),r.Mb(),r.Nb(13,"div",9),r.vc(14," All Rights Reserved by "),r.Nb(15,"a",10),r.vc(16,"Binary InfoVision"),r.Mb(),r.vc(17,". "),r.Mb(),r.Mb(),r.Mb())},directives:[a.d],styles:[""]}),t})();const y=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-full"]],decls:10,vars:0,consts:[["id","main-wrapper"],[1,"page-wrapper"],[1,"container-fluid"],[1,"blog-home2"],["href","#top",1,"bt-top","btn","btn-circle","btn-lg","btn-info"],[1,"ti-arrow-up"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Jb(1,"app-banner"),r.Nb(2,"div",1),r.Nb(3,"div",2),r.Nb(4,"div",3),r.Nb(5,"div"),r.Jb(6,"router-outlet"),r.Mb(),r.Mb(),r.Mb(),r.Nb(7,"a",4),r.Jb(8,"i",5),r.Mb(),r.Mb(),r.Jb(9,"app-footer"),r.Mb())},directives:[N,a.f,w],styles:[""]}),t})(),children:[{path:"",component:u},{path:"blogDetail/:id",component:f},{path:"about",component:h},{path:"inquiryDetails",component:(()=>{class t{constructor(t,e){this.router=e,this.id=t.snapshot.paramMap.get("id")}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Ib(a.a),r.Ib(a.b))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-blog-detail"]],decls:19,vars:0,consts:[[1,"static-slider-head",2,"background-image","url(assets/images/landingpage/banner-bg.jpg)"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-9","col-md-6","align-self-center","text-center","no-trans"],[1,"container","spacer"],[1,"col-md-8","no-trans","text-center"],[1,"subtitle"],[1,"row","m-t-40","justify-content-center"],[1,"col-md-8","no-trans","border-bottom","mb-4"],["data-aos","flip-left","data-aos-duration","1200",1,"card"],[1,"row"],["src",r.zc("https://docs.google.com/forms/d/e/1FAIpQLSdCl4w-OGDWW34GFlQslLn4OKfmsGIyLcSR4dxeYoePwDgkvg/viewform?embedded=true"),"width","640","height","1100","frameborder","0","marginheight","0","marginwidth","0"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"div",1),r.Nb(2,"div",2),r.Nb(3,"div",3),r.Nb(4,"div",4),r.Nb(5,"div",2),r.Nb(6,"div",5),r.Nb(7,"h5",6),r.Nb(8,"strong"),r.vc(9,"Have any Question in mind?"),r.Mb(),r.Mb(),r.Nb(10,"h6",6),r.Nb(11,"strong"),r.vc(12,"Fill the below forms to get queries cleared!!."),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Nb(13,"div",7),r.Nb(14,"div",8),r.Nb(15,"div",9),r.Nb(16,"div",10),r.Nb(17,"iframe",11),r.vc(18,"Loading\u2026"),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb(),r.Mb())},styles:[""]}),t})()}]}];let k=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(e){return new(e||t)},imports:[[a.e.forChild(y)],a.e]}),t})();var D=i("3Pt+");let I=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(e){return new(e||t)},providers:[l],imports:[[n.b,k,o.a,D.a,D.e,c.b]]}),t})()}}]);