(this["webpackJsonppractivas-react-client"]=this["webpackJsonppractivas-react-client"]||[]).push([[11],{382:function(e,t,a){"use strict";var s=a(13),r=a(11),n=a(22),c=a(27),i=a(0),o=a.n(i),l=(a(383),a(386)),m=a(385),h=a(3),j=function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"Badge",children:[Object(h.jsx)("div",{className:"Badge_header",children:Object(h.jsx)("img",{src:l.a,alt:"Logo Conferencia"})}),Object(h.jsxs)("div",{className:"Badge_section-name",children:[Object(h.jsx)(m.a,{className:"Badge_avatar",email:this.props.email}),Object(h.jsxs)("h1",{children:[this.props.firstName," ",Object(h.jsx)("br",{})," ",this.props.lastName]})]}),Object(h.jsxs)("div",{className:"Badge_section-info",children:[Object(h.jsxs)("h3",{children:[" ",this.props.jobTitle]}),Object(h.jsxs)("div",{children:[" ",this.props.email]})]}),Object(h.jsx)("div",{className:"Badge_footer",children:"pruebita"})]})}}]),a}(o.a.Component);t.a=j},383:function(e,t,a){},384:function(e,t,a){"use strict";t.a=a.p+"static/media/platziconf-logo.c1d00c3e.svg"},390:function(e,t,a){"use strict";var s=a(29),r=a(13),n=a(11),c=a(22),i=a(27),o=a(0),l=a.n(o),m=a(3),h=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).handleChange=function(t){e.setState(Object(s.a)({},t.target.name,t.target.value))},e.handleClick=function(e){console.log("Button was clicked")},e}return Object(n.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:this.props.title}),Object(m.jsxs)("form",{onSubmit:this.props.onSubmit,children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"",children:"First name"}),Object(m.jsx)("input",{onChange:this.props.onChange,type:"text",name:"firstName",className:"form-control",placeholder:"Primer nombre",value:this.props.formValues.firstName})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"",children:"Last name"}),Object(m.jsx)("input",{onChange:this.props.onChange,type:"text",name:"lastName",className:"form-control",value:this.props.formValues.lastName})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"",children:"Job Tittle"}),Object(m.jsx)("input",{onChange:this.props.onChange,type:"text",name:"jobTitle",className:"form-control",value:this.props.formValues.jobTitle})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"",children:"Email"}),Object(m.jsx)("input",{onChange:this.props.onChange,type:"email",name:"email",className:"form-control",value:this.props.formValues.email})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"",children:"Twitter"}),Object(m.jsx)("input",{onChange:this.props.onChange,type:"text",name:"twitter",className:"form-control",value:this.props.formValues.twitter})]}),Object(m.jsx)("button",{onClick:this.handleClick,className:"btn btn-primary",children:"Save"}),this.props.error&&Object(m.jsx)("div",{className:"alert alert-danger mb-3",role:"alert",children:this.props.error.message})]})]})}}]),a}(l.a.Component);t.a=h},427:function(e,t,a){},487:function(e,t,a){"use strict";a.r(t);var s=a(23),r=a(84),n=a(29),c=a(17),i=a(13),o=a(11),l=a(22),m=a(27),h=a(0),j=a.n(h),b=a(382),p=a(390),d=a(384),u=(a(427),a(378)),f=a(379),O=a(3),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,l=new Array(o),m=0;m<o;m++)l[m]=arguments[m];return(e=t.call.apply(t,[this].concat(l))).state={loading:!1,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},e.handleChange=function(t){e.setState({form:Object(c.a)(Object(c.a)({},e.state.form),{},Object(n.a)({},t.target.name,t.target.value))})},e.handleSubmit=function(){var t=Object(r.a)(Object(s.a)().mark((function t(a){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("In handleSubmit"),a.preventDefault(),e.setState({loading:!0,error:null}),t.prev=3,console.log("state: ",e.state),t.next=7,u.a.badges.create(e.state.form);case 7:e.setState({loading:!1}),e.props.history.push("/badges"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),e.setState({loading:!1,error:t.t0});case 14:console.log("state: ",e.props.formValues);case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){return!0===this.state.loading?Object(O.jsx)(f.a,{}):Object(O.jsxs)(j.a.Fragment,{children:[Object(O.jsx)("div",{className:"BadgeNew_hero",children:Object(O.jsx)("img",{className:"BadgeNew_hero-image img-fluid",src:d.a,alt:"Logo"})}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-6",children:Object(O.jsx)(b.a,{firstName:this.state.form.firstName||"FIRST_NAME",lastName:this.state.form.lastName||"LAST_NAME",jobTitle:this.state.form.jobTitle||"JOB_TITLE",email:this.state.form.email||"EMAIL",avatarUrl:"https://s.gravatar.com/avatar/1f895306b4331da3cc6913120f2ed123?s=80"})}),Object(O.jsx)("div",{className:"col-6",children:Object(O.jsx)(p.a,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error,title:"New Attendant"})})]})})]})}}]),a}(j.a.Component);t.default=g}}]);