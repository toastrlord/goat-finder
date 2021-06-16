(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(15),r=n.n(a),c=n(18),i=n(1),s=n.n(i),o=n(21),u=n.n(o),l=n(11),j=n(2),b=n(4),h=n(5),d=n(7),m=n(6),p=n(0),f=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.goatName,n=e.imgSrc,a=e.price;return Object(p.jsxs)(l.b,{to:F(t),className:"item-thumbnail",children:[Object(p.jsx)("p",{children:t}),Object(p.jsx)("img",{src:"/goat-finder/"+n,alt:t,className:"goat-image"}),Object(p.jsxs)("p",{children:["$",a]})]})}}]),n}(i.Component),O=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Shop"}),Object(p.jsx)("p",{children:"Click a goat below to get started!"}),Object(p.jsx)("h2",{children:"Available Goats:"}),Object(p.jsx)("div",{className:"item-thumbnail-container",children:Object.keys($).map((function(e,t){var n=$[e];return Object(p.jsx)(f,{goatName:e,imgSrc:"images/"+n.imageSource,price:n.price},t)}))})]})}}]),n}(i.Component),x=localStorage.getItem("cart"),g=null===x?{}:JSON.parse(x),y=[];function v(){var e=0;return Object.keys(g).forEach((function(t){e+=g[t].quantity})),e}function k(){return Object.assign(g)}function N(e){y.push(e)}function C(){localStorage.setItem("cart",JSON.stringify(g)),y.forEach((function(e){return e()}))}var q=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).quantityRef=s.a.createRef(),a}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.itemName,a=t.goatInfo,r=a.price,c=a.description,i=a.imageSource;return Object(p.jsxs)("div",{className:"shop-item",children:[Object(p.jsx)("h1",{children:n}),Object(p.jsx)("img",{src:"/goat-finder/images/"+i,alt:n,className:"goat-image"}),Object(p.jsx)("p",{children:c}),Object(p.jsxs)("p",{children:["Price: $",r]}),Object(p.jsx)("label",{htmlFor:"quantity",children:"Quantity:"}),Object(p.jsx)("input",{htmlFor:"quantity",type:"number",min:"1",step:"1",max:"100",defaultValue:"1",ref:this.quantityRef,className:"quantity-box",onKeyDown:function(e){return Number(e.key)>=0&&Number(e.key)<=9||"Backspace"===e.key||"ArrowRight"===e.key||"ArrowLeft"===e.key||(e.preventDefault(),!1)},onChange:function(e){e.target.value>100&&(e.target.value=100)}}),Object(p.jsx)("button",{onClick:function(){return t={price:r,description:c,imageSource:i,name:n},a=e.quantityRef.current.value,void(!isNaN(Number(a))&&Number(a)>0&&(g[t.name]?g[t.name].quantity+=Number(a):(g[t.name]=t,g[t.name].quantity=Number(a)),C()));var t,a},children:"Add to Cart"})]})}}]),n}(i.Component),S=n(13),w=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={itemsInCart:v()},a.onCartChanged=a.onCartChanged.bind(Object(S.a)(a)),N(a.onCartChanged),a}return Object(h.a)(n,[{key:"onCartChanged",value:function(){this.setState({itemsInCart:v()})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"navbar",children:[Object(p.jsx)(l.b,{to:"/about",className:"navbar-element",children:"About Us"}),Object(p.jsx)(l.b,{to:"/shop",className:"navbar-element",children:"Shop"}),Object(p.jsxs)(l.b,{to:"/checkout",className:"navbar-element",children:["Cart (",this.state.itemsInCart,")"]})]})}}]),n}(i.Component),A=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).quantityRef=s.a.createRef(),a.state={quantity:a.props.quantity},a}return Object(h.a)(n,[{key:"quantityChanged",value:function(e){this.setState({quantity:Number(e)}),function(e,t){!isNaN(Number(t))&&Number(t)>0&&(g[e].quantity=Number(t)),C()}(this.props.itemName,e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.itemName,a=t.price,r=t.imageSource,c=this.state.quantity;return Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[Object(p.jsx)("img",{src:"/goat-finder/images/"+r,alt:n}),Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"8px"},children:[Object(p.jsx)("p",{style:{fontWeight:"bold"},children:n}),Object(p.jsx)("label",{htmlFor:"quantity",children:"Quantity: "}),Object(p.jsx)("input",{className:"quantity-box",htmlFor:"quantity",type:"number",min:"1",max:"100",step:"1",defaultValue:c,ref:this.quantityRef,onKeyDown:function(e){return Number(e.key)>=0&&Number(e.key)<=9||"Backspace"===e.key||"ArrowRight"===e.key||"ArrowLeft"===e.key||(e.preventDefault(),!1)},onChange:function(t){t.target.value>100&&(t.target.value=100),e.quantityChanged(t.target.value)}}),Object(p.jsxs)("p",{children:["Subtotal: $",(c*a).toFixed(2)]})]}),Object(p.jsx)("button",{onClick:function(){return function(e){delete g[e],C()}(n)},children:"Remove from cart"})]})}}]),n}(i.Component),I=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={cart:k()},a.onCartChanged=a.onCartChanged.bind(Object(S.a)(a)),N(a.onCartChanged),a}return Object(h.a)(n,[{key:"onCartChanged",value:function(){var e=k();this.setState({cart:e})}},{key:"render",value:function(){var e=this.state.cart,t=0,n=Object.keys(e).map((function(n,a){return t+=e[n].quantity*e[n].price,Object(p.jsx)(A,{itemName:n,quantity:e[n].quantity,price:e[n].price,imageSource:e[n].imageSource},a)})),a=n.length?Object(p.jsxs)("div",{children:[n,Object(p.jsxs)("p",{style:{fontWeight:"bold",fontSize:"22px"},children:["Total: $",t.toFixed(2)]}),Object(p.jsx)("button",{children:"Order!"})]}):Object(p.jsx)("p",{style:{fontWeight:"bold",fontSize:"22px"},children:"Your cart is empty!"});return Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(p.jsx)("h1",{children:"Checkout"}),a]})}}]),n}(i.Component);var R=function(e){return Object(p.jsxs)("div",{className:"customer-testimonial",children:[Object(p.jsxs)("p",{className:"customer-quote",children:['"',e.quote,'"']}),Object(p.jsxs)("p",{className:"customer-name",children:["-",e.author]})]})},D=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"About Us"}),Object(p.jsx)("p",{style:{marginLeft:"10%",marginRight:"10%"},children:"At Goat Finder, our number one goal is to find the perfect goats for YOU! With affordable prices and the highest quality goats, anyone can become a proud goat owner today! Don't just take our word for it, listen to our satisfied customers!"}),Object(p.jsx)(R,{author:"Larry G",quote:"I knew I wanted a goat, but had no idea which one! The good people at Goat Finder helped me find the right goat for me!"}),Object(p.jsx)(R,{author:"Sarah M",quote:"I was amazed at the selection of goats available! I had to get one of each! Thanks Goat Finder!"}),Object(p.jsx)(R,{author:"A Goat",quote:"baaaaaaAAAAAAAaaaaaaaa"})]})}}]),n}(i.Component);function F(e){return"/shop/".concat(e.replace(" ","_"))}var G=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(l.a,{basename:"/goat-finder",children:[Object(p.jsxs)("div",{id:"top-bar",children:[Object(p.jsx)(l.b,{to:"/shop",children:Object(p.jsx)("img",{src:"/goat-finder/images/goatfinder_logo_smaller.png",alt:"goat finder logo",className:"logo"})}),Object(p.jsx)(w,{})]}),Object(p.jsx)("div",{id:"main-display",children:Object(p.jsx)("div",{id:"page-content",style:{display:"flex",justifyContent:"center",textAlign:"center"},children:Object(p.jsxs)(j.d,{style:{flex:4},children:[Object(p.jsx)(j.b,{exact:!0,path:"/",children:Object(p.jsx)(j.a,{to:"/shop"})}),Object(p.jsx)(j.b,{exact:!0,path:"/about",component:D}),Object(p.jsx)(j.b,{exact:!0,path:"/shop",component:O}),Object(p.jsx)(j.b,{exact:!0,path:"/checkout",component:I}),Object.keys($).map((function(e,t){var n=F(e);return Object(p.jsx)(j.b,{exact:!0,path:n,children:Object(p.jsx)(q,{itemName:e,goatInfo:$[e]})},t)}))]})})})]})})},E=(n(37),{});function J(e){return L.apply(this,arguments)}function L(){return(L=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return(W=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J("/goat-finder/goatData.json");case 2:t=e.sent,Object.keys(t).forEach((function(e){E[e]=t[e]})),u.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root"));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){W.apply(this,arguments)}();var $=t.default=E}},[[38,1,2]]]);
//# sourceMappingURL=main.59ddee7d.chunk.js.map