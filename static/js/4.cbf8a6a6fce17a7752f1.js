webpackJsonp([4],{"31Pr":function(e,t){},"9Ee9":function(e,t){},"9w9B":function(e,t){},RrF5:function(e,t){},aV5t:function(e,t){},bwTk:function(e,t){},lCfU:function(e,t){},wUZA:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("woOf"),i=s.n(n),o=s("50Qy"),a={name:"BMenuItem",props:{item:Object,editStatus:Boolean},data:function(){return{editCurrentStatus:!1,showPopover:!1}},methods:{editCurrentMenu:function(e){this.originMenuClassName=e.className,this.editCurrentStatus=!0},saveEdit:function(e){var t=this;if(""!==e.className){if(e.className===this.originMenuClassName)return this.editCurrentStatus=!1;e.route=e.route.slice(0,e.route.lastIndexOf("/"))+"/"+e.className,Object(o.a)("updateMenu",e).then(function(e){t.handlerAfterRequest(e,"修改")}),this.editCurrentStatus=!1}else this.$message.warning("名称不能为空")},undoEdit:function(e){e.className=this.originMenuClassName,this.editCurrentStatus=!1},deleteCurrentMenu:function(e){var t=this;Object(o.a)("deleteMenu",e).then(function(e){t.handlerAfterRequest(e,"删除")})},handlerAfterRequest:function(e,t){e.affectedRows?(this.$message({type:"success",message:t+"成功"}),this.$store.dispatch("menu/GET_MENU")):this.$message({type:"error",message:t+"失败"})}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-menu-item",{attrs:{index:e.item.route}},[s("i",{class:e.item.icon}),e._v(" "),[e.editCurrentStatus?s("span",{attrs:{slot:"title"},slot:"title"},[s("el-input",{staticStyle:{width:"63%"},attrs:{size:"small"},model:{value:e.item.className,callback:function(t){e.$set(e.item,"className",t)},expression:"item.className"}})],1):s("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.item.className))])],e._v(" "),e.editStatus?[e.editCurrentStatus?e._e():s("i",{staticClass:"icon el-icon-edit",on:{click:function(t){t.stopPropagation(),e.editCurrentMenu(e.item)}}}),e._v(" "),e.editCurrentStatus?[s("i",{staticClass:"icon el-icon-circle-check-outline",on:{click:function(t){t.stopPropagation(),e.saveEdit(e.item)}}}),e._v(" "),s("i",{staticClass:"icon el-icon-circle-close-outline",on:{click:function(t){t.stopPropagation(),e.undoEdit(e.item)}}})]:e._e(),e._v(" "),s("el-popover",{attrs:{placement:"right"},model:{value:e.showPopover,callback:function(t){e.showPopover=t},expression:"showPopover"}},[s("div",{staticStyle:{"text-align":"right",margin:"0"}},[s("span",[e._v("确认删除吗？")]),e._v(" "),s("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.showPopover=!1}}},[e._v("取消")]),e._v(" "),s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.deleteCurrentMenu(e.item)}}},[e._v("确定")])],1),e._v(" "),s("i",{staticClass:"icon el-icon-delete",attrs:{slot:"reference"},on:{click:function(t){t.stopPropagation(),e.showPopover=!0}},slot:"reference"})])]:e._e()],2)},staticRenderFns:[]};var u={name:"BMenuSubmenu",components:{BMenuItem:s("VU/8")(a,r,!1,function(e){s("9w9B")},"data-v-d2662196",null).exports},props:{value:Array,editStatus:Boolean},data:function(){return{websiteClass:{className:""},rules:{className:[{required:!0,message:"分类名称不能为空"}]},showPopover:!1,valid:!0,activeStatus:!1,showEditIcon:!1}},computed:{isEditMenuStatus:function(){return this.$store.state.menu.isEditMenuStatus}},mounted:function(){var e=this;this.$nextTick(function(){e.onresize()})},methods:{onresize:function(){var e=this;this.computedSubmenuHeight(),window.onresize=function(){e.deboundce(e.computedSubmenuHeight,300)()}},deboundce:function(e,t){var s=null;return function(){clearTimeout(s),s=setTimeout(e,t)}},computedSubmenuHeight:function(){var e=document.querySelectorAll(".el-container")[1].offsetHeight;document.querySelector(".inter-menu")&&(document.querySelector(".inter-menu").style.maxHeight=e-56*this.$store.state.menu.menuData.length+"px")},editMenu:function(){this.$store.commit("menu/CHANGE_EDIT_STATUS")},addMenu:function(){this.$refs.websiteForm[0].clearValidate()},confirm:function(e){var t=this;this.$refs.websiteForm[0].validate(function(s){t.valid=s,s&&(t.websiteClass=i()({},t.websiteClass,{orderNumber:e.children.length,parentId:e.selfId,selfId:Date.now(),route:e.route+"/"+t.websiteClass.className,icon:"el-icon-star-on",redirect:null}),Object(o.a)("addMenu",t.websiteClass).then(function(e){t.handlerAfterRequest(e,"新增")}).finally(function(){t.showPopover=!1,t.websiteClass.className=""}))})},cancel:function(){this.websiteClass.className="",this.valid=!0,this.showPopover=!1},handlerAfterRequest:function(e,t){e.affectedRows?(this.$message({type:"success",message:t+"成功"}),this.$store.dispatch("menu/GET_MENU")):this.$message({type:"error",message:t+"失败"})},mouseoverMenu:function(e){"/website"===e.route&&(this.showEditIcon=!0)},mouseoutMenu:function(e){"/website"===e.route&&(this.showEditIcon=!1)}}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",e._l(e.value,function(t,n){return s("div",{key:n},[t.children?s("el-submenu",{attrs:{index:t.route},nativeOn:{mouseover:function(s){e.mouseoverMenu(t)},mouseout:function(s){e.mouseoutMenu(t)}}},[s("template",{slot:"title"},[s("i",{class:t.icon}),e._v(" "),s("span",[e._v(e._s(t.className))]),e._v(" "),"/website"===t.route&&(e.showEditIcon||e.showPopover||e.isEditMenuStatus)?[s("el-popover",{attrs:{placement:"bottom-end",width:"200",title:"添加网址分类"},model:{value:e.showPopover,callback:function(t){e.showPopover=t},expression:"showPopover"}},[s("el-form",{ref:"websiteForm",refInFor:!0,attrs:{model:e.websiteClass,rules:e.rules}},[s("el-form-item",{style:{"margin-bottom":e.valid?"12px":"22px"},attrs:{prop:"className"}},[s("el-input",{attrs:{size:"small"},model:{value:e.websiteClass.className,callback:function(t){e.$set(e.websiteClass,"className",t)},expression:"websiteClass.className"}})],1)],1),e._v(" "),s("el-row",{staticStyle:{"text-align":"right",margin:"0px"}},[s("el-button",{attrs:{size:"small"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(s){e.confirm(t)}}},[e._v("确定")])],1),e._v(" "),s("i",{staticClass:"icon el-icon-circle-plus-outline",attrs:{slot:"reference"},on:{click:function(t){return t.stopPropagation(),e.addMenu(t)}},slot:"reference"})],1),e._v(" "),s("i",{staticClass:"icon el-icon-setting",on:{click:function(t){return t.stopPropagation(),e.editMenu(t)}}})]:e._e()],2),e._v(" "),s("b-menu-submenu",{staticClass:"inter-menu",attrs:{editStatus:"/website"===t.route&&e.isEditMenuStatus},model:{value:t.children,callback:function(s){e.$set(t,"children",s)},expression:"item.children"}})],2):s("b-menu-item",{attrs:{item:t,editStatus:e.editStatus}})],1)}))},staticRenderFns:[]};var l={name:"BMenu",components:{BMenuSubmenu:s("VU/8")(u,c,!1,function(e){s("RrF5")},"data-v-7aeb6330",null).exports},props:{isCollapse:Boolean},data:function(){return{isEditStatus:!0}},computed:{menuData:{get:function(){return this.$store.state.menu.menuData},set:function(e){this.$store.commit("menu/GET_MENU",e)}}},created:function(){this.$store.dispatch("menu/GET_MENU")}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-menu",{attrs:{"default-active":e.$route.fullPath,collapse:e.isCollapse,"background-color":"#323232","text-color":"#fff","active-text-color":"#ffd04b","unique-opened":"",router:!e.$store.state.menu.isEditMenuStatus}},[s("b-menu-submenu",{model:{value:e.menuData,callback:function(t){e.menuData=t},expression:"menuData"}})],1)},staticRenderFns:[]};var m=s("VU/8")(l,d,!1,function(e){s("aV5t")},"data-v-580a6942",null).exports,h=s("gyMJ"),f={name:"BSearch",props:{searchClass:{type:String,default:"baidu"}},data:function(){return{searchClassOptions:[{label:"百度",value:"baidu"},{label:"站内",value:"inside"}],word:"",searchWidth:"10vw",focusStatus:!1,isActive:!1,isClear:!1}},methods:{submit:function(){"baidu"===this.searchClass?window.open("http://baidu.com/s?word="+this.word):Object(h.a)("")},clear:function(){this.word="",this.$refs.input.focus()},focus:function(){this.isActive=!0,this.focusStatus=!0,this.searchWidth="25vw"},blur:function(){this.isClear||(this.word="",this.focusStatus=!1,this.isActive=this.searchWidth="10vw",this.isActive=!1)},mouseover:function(){this.searchWidth="25vw",this.isActive=!0},mouseout:function(){this.isClear||this.focusStatus||(this.searchWidth="10vw",this.isActive=!1)},mousedown:function(){this.isClear=!0},mouseup:function(){this.isClear=!1}}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",[s("el-form-item",{style:{width:e.searchWidth},nativeOn:{mouseover:function(t){return e.mouseover(t)},mouseout:function(t){return e.mouseout(t)}}},[s("el-input",{ref:"input",class:{active:e.isActive},attrs:{type:"text"},on:{focus:e.focus,blur:e.blur},nativeOn:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.submit(t):null}},model:{value:e.word,callback:function(t){e.word=t},expression:"word"}},[s("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"}),e._v(" "),""!==e.word?s("i",{staticClass:"el-input__icon el-icon-error",attrs:{slot:"suffix"},on:{click:e.clear,mousedown:e.mousedown,mouseup:e.mouseup},slot:"suffix"}):e._e()])],1)],1)},staticRenderFns:[]};var v={name:"BHeader",components:{BSearch:s("VU/8")(f,p,!1,function(e){s("lCfU")},"data-v-2ab8b175",null).exports},data:function(){return{isCollapse:!1}},methods:{collapseToggle:function(){this.isCollapse=!this.isCollapse,this.$emit("collapseToggle")}}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"b-header"},[t("h3",[this._v("Basic Navigation")]),this._v(" "),t("div",{staticClass:"collapse-toggle"},[t("i",{staticClass:"icon el-icon-caret-left",class:{"el-icon-caret-left":this.isCollapse,"el-icon-caret-right":!this.isCollapse},on:{click:this.collapseToggle}})]),this._v(" "),t("b-search",{staticClass:"b-search"})],1)},staticRenderFns:[]};var w=s("VU/8")(v,b,!1,function(e){s("9Ee9")},"data-v-2dc46ca2",null).exports,_=s("fZjL"),g=s.n(_),C={name:"BBreadcrumb",props:{},data:function(){return{}},computed:{breadcrumbData:function(){return this.$route.matched}},methods:{getToLink:function(e,t){var s=this;if(!e.path)return e.redirect?e.redirect:"/";if(t===this.breadcrumbData.length-1)return"";var n=e.path;return g()(this.$route.params).forEach(function(e){n=n.replace(":"+e,s.$route.params[e])}),n}}},S={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.breadcrumbData,function(t,n){return s("el-breadcrumb-item",{key:n,attrs:{to:e.getToLink(t,n)}},[e._v("\n    "+e._s("web"===t.name?e.$route.params.className:t.name)+"\n  ")])}))},staticRenderFns:[]};var x={name:"home",data:function(){return{editTop:"0px",isCollapse:!1}},components:{BMenu:m,BHeader:w,BBreadcrumb:s("VU/8")(C,S,!1,function(e){s("31Pr")},"data-v-1686a81c",null).exports},created:function(){},computed:{collapseWidth:function(){return this.isCollapse?"0px":"260px"}},methods:{getScroll:function(e){this.editTop=e.target.scrollTop+"px"},collapseToggle:function(){this.isCollapse=!this.isCollapse}}},E={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-container",[s("el-header",{staticStyle:{height:"60px"}},[s("b-header",{on:{collapseToggle:e.collapseToggle}})],1),e._v(" "),s("el-container",[s("el-aside",{style:{width:e.collapseWidth},nativeOn:{scroll:function(t){return e.getScroll(t)}}},[s("b-menu",{attrs:{"edit-top":e.editTop}})],1),e._v(" "),s("el-main",[s("b-breadcrumb"),e._v(" "),s("div",{staticClass:"show-box"},[s("router-view",{key:e.$route.fullPath})],1)],1)],1)],1)},staticRenderFns:[]};var M=s("VU/8")(x,E,!1,function(e){s("bwTk")},"data-v-63e858d2",null);t.default=M.exports}});