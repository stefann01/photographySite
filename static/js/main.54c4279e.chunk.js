(this.webpackJsonpportofolio=this.webpackJsonpportofolio||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports={container:"flyingCarousel_container__3m2R_",firstItem:"flyingCarousel_firstItem__13ASk",secondItem:"flyingCarousel_secondItem__21-MJ",secondRotate:"flyingCarousel_secondRotate__30kJ7",thirdItem:"flyingCarousel_thirdItem__1htWA",thirdRotate:"flyingCarousel_thirdRotate__2D4tU",fourthItem:"flyingCarousel_fourthItem__2CEaz","slide-up":"flyingCarousel_slide-up__2yiC2",image:"flyingCarousel_image__1Jo8J"}},function(e,t,a){e.exports={stackedLayoutDescriptionContainer:"stackedLayoutCarouselContainer_stackedLayoutDescriptionContainer__36dTh",content:"stackedLayoutCarouselContainer_content__2jZ-e",container:"stackedLayoutCarouselContainer_container__2TF3Z",stackedLayoutDescriptionTitle:"stackedLayoutCarouselContainer_stackedLayoutDescriptionTitle__3_s86",stackedLayoutCarouselDescription:"stackedLayoutCarouselContainer_stackedLayoutCarouselDescription__1BOKe"}},function(e,t,a){e.exports={container:"flyingCarousel_container__1OpIJ",roundButton:"flyingCarousel_roundButton__30dFK",arrowIcon:"flyingCarousel_arrowIcon__3QbDw",descriptionContainer:"flyingCarousel_descriptionContainer__3IKt0",carouselContent:"flyingCarousel_carouselContent__19ow8"}},,,function(e,t,a){e.exports={stackedContainer:"stackedCarouselContainer_stackedContainer__NH_AV",stackedCarouselContainer:"stackedCarouselContainer_stackedCarouselContainer__2POBs",stackedCarouselDescription:"stackedCarouselContainer_stackedCarouselDescription__2Eq4I"}},,,,,,,,function(e,t,a){e.exports={"down-arrow":"landingPage_down-arrow__OOnTH"}},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(20),s=a.n(c),r=(a(29),a(30),a(2)),o=a(5),l=(a(31),a(0));function d(e){var t=e.images,a=Object(i.useState)({isLeftAnimationActive:!1,isRightAnimationActive:!1,imageIndex:0}),n=Object(o.a)(a,2),c=n[0],s=n[1],d=function(e){return((c.imageIndex+e)%t.length+t.length)%t.length};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"helping-container","data-animate":c.isLeftAnimationActive,children:Object(l.jsx)("img",{src:t[d(-2)],alt:"image",className:"image"})}),Object(l.jsx)("div",{className:"left",onAnimationEnd:function(){c.isLeftAnimationActive&&(c.isLeftAnimationActive||c.isRightAnimationActive)&&s((function(e){return Object(r.a)(Object(r.a)({},e),{},{isLeftAnimationActive:!1,imageIndex:0===e.imageIndex?t.length-1:e.imageIndex-1})}))},"data-animate":c.isLeftAnimationActive,"data-animate-to-left":c.isRightAnimationActive,children:Object(l.jsx)("img",{src:t[d(-1)],alt:"image",className:"image",onClick:function(){return s((function(e){return Object(r.a)(Object(r.a)({},e),{},{isLeftAnimationActive:!0})}))}})}),Object(l.jsx)("div",{className:"center","data-animate":c.isLeftAnimationActive,"data-animate-to-left":c.isRightAnimationActive,children:Object(l.jsx)("img",{src:t[d(0)],className:"image",alt:"image"})}),Object(l.jsx)("div",{className:"right","data-animate":c.isLeftAnimationActive,"data-animate-to-left":c.isRightAnimationActive,onAnimationEnd:function(){c.isRightAnimationActive&&(c.isLeftAnimationActive||c.isRightAnimationActive)&&s((function(e){return Object(r.a)(Object(r.a)({},e),{},{isRightAnimationActive:!1,imageIndex:e.imageIndex===t.length-1?0:e.imageIndex+1})}))},children:Object(l.jsx)("img",{src:t[d(1)],className:"image",alt:"image",onClick:function(){return s((function(e){return Object(r.a)(Object(r.a)({},e),{},{isRightAnimationActive:!0})}))}})}),Object(l.jsx)("div",{className:"helping-right-container","data-animate-to-left":c.isRightAnimationActive,children:Object(l.jsx)("img",{src:t[d(2)],className:"image",alt:"image"})})]})}var m=a.p+"static/media/img1.f4ae5850.jpg",j=a.p+"static/media/img2.59a0d877.jpg",u=a.p+"static/media/img3.663ecd2f.jpg",g=a.p+"static/media/img4.9fe7e578.jpg",b=a.p+"static/media/img5.782051ca.jpg",h=a.p+"static/media/cube.e36c3f74.png",O=a(23),x=a(3);a(33);function f(e){var t=e.images,a=Object(i.useState)({animate:!1,index:0}),n=Object(o.a)(a,2),c=n[0],s=n[1],d=function(e){return((c.index+e)%t.length+t.length)%t.length};return Object(l.jsxs)("div",{className:"stacked-carousel-container",children:[Object(l.jsx)("div",{className:"stack-4","data-animate":c.animate,children:Object(l.jsx)("img",{className:"stack-image",alt:"ceva",src:t[d(3)]})}),Object(l.jsx)("div",{className:"stack-3",children:Object(l.jsx)("img",{className:"stack-image",alt:"image",src:t[d(2)]})}),Object(l.jsx)("div",{className:"stack-2","data-animate":c.animate,children:Object(l.jsx)("img",{className:"stack-image",alt:"image",src:t[d(1)]})}),Object(l.jsx)("div",{className:"stack-1",onAnimationEnd:function(){s((function(e){return Object(r.a)(Object(r.a)({},e),{},{animate:!1,index:e.index===t.length-1?0:e.index+1})}))},"data-animate":c.animate,children:Object(l.jsx)("img",{className:"stack-image",alt:"image",src:t[d(0)],onClick:function(){return s((function(e){return Object(r.a)(Object(r.a)({},e),{},{animate:!0})}))}})})]})}a(34);var v=a.p+"static/media/left-arrow.6d4b3837.svg",p=a.p+"static/media/right-arrow.77e8b4f3.svg";function N(e){var t=e.images,a=Object(i.useState)({animateLeft:!1,animateRight:!1,index:0}),n=Object(o.a)(a,2),c=n[0],s=n[1],d=function(e){return((c.index+e)%t.length+t.length)%t.length};return Object(l.jsxs)("div",{className:"single-rotate-container",children:[Object(l.jsxs)("div",{className:"single-rotate-control",children:[Object(l.jsx)("img",{src:v,alt:"Previous",className:"btn-image",onClick:function(){s((function(e){return Object(r.a)(Object(r.a)({},e),{},{animateLeft:!0})}))}}),Object(l.jsx)("span",{children:"Watch"}),Object(l.jsx)("img",{src:p,alt:"Next",className:"btn-image",onClick:function(){s((function(e){return Object(r.a)(Object(r.a)({},e),{},{animateRight:!0})}))}})]}),Object(l.jsx)("div",{className:"left-rectangle","data-animate-right":c.animateRight,children:Object(l.jsx)("div",{className:"orbit-element-left",children:Object(l.jsx)("img",{className:"single-rotate-image",alt:"image",src:t[d(2)]})})}),Object(l.jsx)("div",{className:"rectangle","data-animate-left":c.animateLeft,"data-animate-right":c.animateRight,onAnimationEnd:function(){s((function(e){return Object(r.a)(Object(r.a)({},e),{},{animateLeft:!1,animateRight:!1,index:e.animateLeft?0===e.index?t.length-1:e.index-1:e.index===t.length-1?0:e.index+1})}))},children:Object(l.jsx)("div",{className:"orbit-element",children:Object(l.jsx)("img",{className:"single-rotate-image",src:t[d(1)],alt:"image"})})}),Object(l.jsx)("div",{className:"right-rectangle","data-animate-left":c.animateLeft,children:Object(l.jsx)("div",{className:"orbit-element-right",children:Object(l.jsx)("img",{className:"single-rotate-image",alt:"image",src:t[d(0)]})})})]})}var C=a.p+"static/media/img8.3dc21ea8.jpg";a(35);function _(){return Object(l.jsxs)("div",{className:"main-preview-content",children:[Object(l.jsx)("img",{className:"main-preview-image",width:"100%",height:"100%",src:C,alt:"Main preview cover"}),Object(l.jsxs)("div",{className:"text-content",children:[Object(l.jsx)("h1",{className:"text-content-title",children:"Lorem ipsum"}),Object(l.jsx)("p",{className:"text-content-description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})}var k=a(21);a(36);function y(e){var t=e.className;return Object(l.jsx)("p",{className:t,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})}function A(e){return Object(k.a)(e),Object(l.jsxs)("div",{className:"pillarContainer",children:[Object(l.jsxs)("div",{className:"pillarText",children:[Object(l.jsx)("h1",{children:"Lorem ipsum"}),window.innerWidth>=1024&&Object(l.jsx)(y,{})]}),Object(l.jsx)("div",{className:"pillarCarouselContainer",children:Object(l.jsx)(d,{images:[m,j,u,g,b]})}),window.innerWidth<1024&&Object(l.jsx)(y,{className:"pillarDescription"})]})}var L=a(14),w=a.n(L);function I(){var e=Object(i.useState)({width:0,height:0}),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}function D(){var e=I();return Object(l.jsxs)("div",{className:w.a.stackedContainer,children:[e.width<1024&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"City day and night"}),Object(l.jsx)("div",{className:w.a.stackedCarouselContainer,children:Object(l.jsx)(f,{images:[m,j,u,g,b]})}),Object(l.jsx)(y,{className:"pillarDescription"})]}),e.width>=1024&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:w.a.stackedCarouselContainer,children:Object(l.jsx)(f,{images:[m,j,u,g,b]})}),Object(l.jsxs)("div",{className:w.a.stackedCarouselDescription,children:[Object(l.jsx)("h1",{children:"City day and night"}),Object(l.jsx)(y,{className:"pillarDescription"})]})]})]})}var R=a(22),E=a.n(R);a(37);function F(e){var t=e.images,a=Object(i.useState)({animate:!1,index:0}),n=Object(o.a)(a,2),c=n[0],s=n[1],d=function(e){return((c.index+e)%t.length+t.length)%t.length},m=function(){s((function(e){return Object(r.a)(Object(r.a)({},e),{},{animate:!0})}))};return Object(l.jsx)("div",{className:"stacked-layout-container",children:Object(l.jsxs)("div",{className:"image-container",children:[Object(l.jsx)("div",{className:"fifth","data-animate":c.animate,children:Object(l.jsx)("img",{className:"stacked-layout-image",alt:"image",src:t[d(4)]})}),Object(l.jsx)("div",{className:"forth","data-animate":c.animate,children:Object(l.jsx)("img",{className:"stacked-layout-image",alt:"image",src:t[d(3)]})}),Object(l.jsx)("div",{className:"third","data-animate":c.animate,children:Object(l.jsx)("img",{className:"stacked-layout-image",alt:"image",src:t[d(2)]})}),Object(l.jsx)("div",{className:"second","data-animate":c.animate,children:Object(l.jsx)("img",{className:"stacked-layout-image",alt:"image",src:t[d(1)]})}),Object(l.jsx)("div",{className:"first",onClick:m,onDoubleClick:m,"data-animate":c.animate,onAnimationEnd:function(){s((function(e){return Object(r.a)(Object(r.a)({},e),{},{animate:!1,index:c.index+1})}))},children:Object(l.jsx)("img",{className:"stacked-layout-image",alt:"image",src:t[d(0)]})})]})})}var S=a(10),T=a.n(S);function P(){var e=I();return Object(l.jsxs)("div",{className:T.a.content,children:[e.width<1024&&Object(l.jsxs)("div",{className:T.a.container,children:[Object(l.jsx)("h1",{className:T.a.stackedLayoutDescriptionTitle,children:"Wildlife"}),Object(l.jsx)(F,{images:[m,j,u,g,b]}),Object(l.jsx)("p",{className:T.a.stackedLayoutCarouselDescription,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),e.width>=1024&&Object(l.jsxs)("div",{className:T.a.container,children:[Object(l.jsx)(F,{images:[m,j,u,g,b]}),Object(l.jsxs)("div",{className:T.a.stackedLayoutDescriptionContainer,children:[Object(l.jsx)("h1",{className:T.a.stackedLayoutDescriptionTitle,children:"Wildlife"}),Object(l.jsx)("p",{className:T.a.stackedLayoutCarouselDescription,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]})}var B=a(9),q=a.n(B);function J(e){var t=e.images,a=e.animate,n=Object(i.useState)({animate:!1,index:0}),c=Object(o.a)(n,2),s=c[0],d=c[1];Object(i.useEffect)((function(){d((function(e){return Object(r.a)(Object(r.a)({},e),{},{animate:!0})}))}),[a]);var m=function(e){return((s.index+e)%t.length+t.length)%t.length};return Object(l.jsxs)("div",{className:q.a.container,children:[Object(l.jsx)("div",{className:q.a.firstItem,children:Object(l.jsx)("img",{className:q.a.image,alt:"test",src:t[m(3)]})}),Object(l.jsx)("div",{className:q.a.secondItem,"data-animate":s.animate,children:Object(l.jsx)("img",{className:q.a.image,alt:"test",src:t[m(2)]})}),Object(l.jsx)("div",{className:q.a.thirdItem,"data-animate":s.animate,children:Object(l.jsx)("img",{className:q.a.image,alt:"test",src:t[m(1)]})}),Object(l.jsx)("div",{className:q.a.fourthItem,"data-animate":s.animate,onAnimationEnd:function(){d((function(e){return Object(r.a)(Object(r.a)({},e),{},{animate:!1,index:e.index===t.length-1?0:e.index+1})}))},children:Object(l.jsx)("img",{className:q.a.image,alt:"test",src:t[m(0)],onClick:function(){return d((function(e){return Object(r.a)(Object(r.a)({},e),{},{animate:!0})}))}})})]})}var W,M=a(11),z=a.n(M),H=a.p+"static/media/double-right-arrow.b7d0df88.svg",K=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(i.useState)(e),a=Object(o.a)(t,2),n=a[0],c=a[1],s=Object(i.useCallback)((function(){return c((function(e){return!e}))}),[]);return[n,s]};function Z(){var e=K(),t=Object(o.a)(e,2),a=t[0],i=t[1],n=I();return Object(l.jsxs)("div",{className:z.a.container,children:[n.width<1024&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:z.a.carouselContent,children:Object(l.jsx)(J,{images:[m,j,u,g,b],animate:a})}),Object(l.jsx)("div",{role:"button",className:z.a.roundButton,onClick:i,children:Object(l.jsx)("img",{src:H,alt:"test",className:z.a.arrowIcon})}),Object(l.jsxs)("div",{className:z.a.descriptionContainer,children:[Object(l.jsx)("h1",{children:"Landscape"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]}),n.width>=1024&&Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"},children:[Object(l.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(l.jsx)(J,{images:[m,j,u,g,b],animate:a})}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(l.jsx)("h1",{children:"Landscape"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(l.jsx)("div",{role:"button",className:z.a.roundButton,onClick:i,children:Object(l.jsx)("img",{src:H,alt:"test",className:z.a.arrowIcon})})]})]})})]})}function Q(){return Object(l.jsxs)("div",{className:E.a.landingPageContainer,id:"landingPage",children:[Object(l.jsx)("div",{style:{position:"relative",width:"stretch",height:"100vh",overflow:"hidden"},children:Object(l.jsx)(_,{})}),Object(l.jsx)(D,{}),Object(l.jsx)(A,{}),Object(l.jsx)("div",{style:{position:"relative",height:"100vh",overflow:"hidden"},children:Object(l.jsx)(N,{images:[m,j,h]})}),Object(l.jsx)(P,{}),Object(l.jsx)(Z,{})]})}!function(e){e[e.Main=0]="Main",e[e.Pillar=1]="Pillar",e[e.Stacked=2]="Stacked"}(W||(W={}));var U=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(O.a,{children:Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{path:"/",children:Object(l.jsx)(Q,{})}),Object(l.jsx)(x.a,{path:"/portraits",component:d,children:Object(l.jsx)(d,{images:[m,j,u,g,b]})}),Object(l.jsx)(x.a,{exact:!0,path:"/stacked-carousel",component:f,children:Object(l.jsx)(f,{images:[m,j,u,g,b,h]})}),Object(l.jsx)(x.a,{exact:!0,path:"/single-rotate",component:N,children:Object(l.jsx)(N,{images:[m,j,u,g,b]})})]})})})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(U,{})}),document.getElementById("root")),V()}],[[43,1,2]]]);
//# sourceMappingURL=main.54c4279e.chunk.js.map