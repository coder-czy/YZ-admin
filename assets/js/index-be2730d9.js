import{g as te,K as z,a as oe,r as ne,m as ve,b as a,C as X,i as re,c as O,o as se,p as Ce}from"./index-86934c54.js";const ye=new z("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),Se=new z("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),xe=new z("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),Ne=new z("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),Oe=new z("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),we=new z("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),je=e=>{const{componentCls:t,iconCls:i,antCls:n,badgeShadowSize:o,badgeHeightSm:s,motionDurationSlow:d,badgeStatusSize:p,marginXS:h}=e,c=`${n}-scroll-number`,l=oe(e,(b,u)=>{let{darkColor:m}=u;return{[`&${t} ${t}-color-${b}`]:{background:m,[`&:not(${t}-count)`]:{color:m}}}});return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},ne(e)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${t}-count`]:{zIndex:e.badgeZIndex,minWidth:e.badgeHeight,height:e.badgeHeight,color:e.badgeTextColor,fontWeight:e.badgeFontWeight,fontSize:e.badgeFontSize,lineHeight:`${e.badgeHeight}px`,whiteSpace:"nowrap",textAlign:"center",background:e.badgeColor,borderRadius:e.badgeHeight/2,boxShadow:`0 0 0 ${o}px ${e.badgeShadowColor}`,transition:`background ${e.motionDurationMid}`,a:{color:e.badgeTextColor},"a:hover":{color:e.badgeTextColor},"a:hover &":{background:e.badgeColorHover}},[`${t}-count-sm`]:{minWidth:s,height:s,fontSize:e.badgeFontSizeSm,lineHeight:`${s}px`,borderRadius:s/2},[`${t}-multiple-words`]:{padding:`0 ${e.paddingXS}px`,bdi:{unicodeBidi:"plaintext"}},[`${t}-dot`]:{zIndex:e.badgeZIndex,width:e.badgeDotSize,minWidth:e.badgeDotSize,height:e.badgeDotSize,background:e.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${o}px ${e.badgeShadowColor}`},[`${t}-dot${c}`]:{transition:`background ${d}`},[`${t}-count, ${t}-dot, ${c}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${i}-spin`]:{animationName:we,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${t}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${t}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:p,height:p,verticalAlign:"middle",borderRadius:"50%"},[`${t}-status-success`]:{backgroundColor:e.colorSuccess},[`${t}-status-processing`]:{overflow:"visible",color:e.colorPrimary,backgroundColor:e.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:o,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:ye,animationDuration:e.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${t}-status-default`]:{backgroundColor:e.colorTextPlaceholder},[`${t}-status-error`]:{backgroundColor:e.colorError},[`${t}-status-warning`]:{backgroundColor:e.colorWarning},[`${t}-status-text`]:{marginInlineStart:h,color:e.colorText,fontSize:e.fontSize}}}),l),{[`${t}-zoom-appear, ${t}-zoom-enter`]:{animationName:Se,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`${t}-zoom-leave`]:{animationName:xe,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack,animationFillMode:"both"},[`&${t}-not-a-wrapper`]:{[`${t}-zoom-appear, ${t}-zoom-enter`]:{animationName:Ne,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`${t}-zoom-leave`]:{animationName:Oe,animationDuration:e.motionDurationSlow,animationTimingFunction:e.motionEaseOutBack},[`&:not(${t}-status)`]:{verticalAlign:"middle"},[`${c}-custom-component, ${t}-count`]:{transform:"none"},[`${c}-custom-component, ${c}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${c}`]:{overflow:"hidden",[`${c}-only`]:{position:"relative",display:"inline-block",height:e.badgeHeight,transition:`all ${e.motionDurationSlow} ${e.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${c}-only-unit`]:{height:e.badgeHeight,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${c}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${t}-count, ${t}-dot, ${c}-custom-component`]:{transform:"translate(-50%, -50%)"}}})}},ae=e=>{const{fontSize:t,lineHeight:i,fontSizeSM:n,lineWidth:o,marginXS:s,colorBorderBg:d}=e,p=Math.round(t*i),h=o,c="auto",l=p-2*h,b=e.colorBgContainer,u="normal",m=n,v=e.colorError,C=e.colorErrorHover,$=t,f=n/2,y=n,w=n/2;return ve(e,{badgeFontHeight:p,badgeShadowSize:h,badgeZIndex:c,badgeHeight:l,badgeTextColor:b,badgeFontWeight:u,badgeFontSize:m,badgeColor:v,badgeColorHover:C,badgeShadowColor:d,badgeHeightSm:$,badgeDotSize:f,badgeFontSizeSm:y,badgeStatusSize:w,badgeProcessingDuration:"1.2s",badgeRibbonOffset:s,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},Ee=te("Badge",e=>{const t=ae(e);return[je(t)]}),Pe=e=>{const{antCls:t,badgeFontHeight:i,marginXS:n,badgeRibbonOffset:o}=e,s=`${t}-ribbon`,d=`${t}-ribbon-wrapper`,p=oe(e,(h,c)=>{let{darkColor:l}=c;return{[`&${s}-color-${h}`]:{background:l,color:l}}});return{[`${d}`]:{position:"relative"},[`${s}`]:Object.assign(Object.assign(Object.assign(Object.assign({},ne(e)),{position:"absolute",top:n,padding:`0 ${e.paddingXS}px`,color:e.colorPrimary,lineHeight:`${i}px`,whiteSpace:"nowrap",backgroundColor:e.colorPrimary,borderRadius:e.borderRadiusSM,[`${s}-text`]:{color:e.colorTextLightSolid},[`${s}-corner`]:{position:"absolute",top:"100%",width:o,height:o,color:"currentcolor",border:`${o/2}px solid`,transform:e.badgeRibbonCornerTransform,transformOrigin:"top",filter:e.badgeRibbonCornerFilter}}),p),{[`&${s}-placement-end`]:{insetInlineEnd:-o,borderEndEndRadius:0,[`${s}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${s}-placement-start`]:{insetInlineStart:-o,borderEndStartRadius:0,[`${s}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}},ze=te(["Badge","Ribbon"],e=>{const t=ae(e);return[Pe(t)]}),Te=e=>{const{className:t,prefixCls:i,style:n,color:o,children:s,text:d,placement:p="end"}=e,{getPrefixCls:h,direction:c}=a.useContext(X),l=h("ribbon",i),b=re(o,!1),u=O(l,`${l}-placement-${p}`,{[`${l}-rtl`]:c==="rtl",[`${l}-color-${o}`]:b},t),[m,v]=ze(l),C={},$={};return o&&!b&&(C.background=o,$.color=o),m(a.createElement("div",{className:O(`${l}-wrapper`,v)},s,a.createElement("div",{className:O(u,v),style:Object.assign(Object.assign({},C),n)},a.createElement("span",{className:`${l}-text`},d),a.createElement("div",{className:`${l}-corner`,style:$}))))},Re=Te;function ee(e){let{prefixCls:t,value:i,current:n,offset:o=0}=e,s;return o&&(s={position:"absolute",top:`${o}00%`,left:0}),a.createElement("span",{style:s,className:O(`${t}-only-unit`,{current:n})},i)}function Ie(e,t,i){let n=e,o=0;for(;(n+10)%10!==t;)n+=i,o+=i;return o}function Be(e){const{prefixCls:t,count:i,value:n}=e,o=Number(n),s=Math.abs(i),[d,p]=a.useState(o),[h,c]=a.useState(s),l=()=>{p(o),c(s)};a.useEffect(()=>{const m=setTimeout(()=>{l()},1e3);return()=>{clearTimeout(m)}},[o]);let b,u;if(d===o||Number.isNaN(o)||Number.isNaN(d))b=[a.createElement(ee,Object.assign({},e,{key:o,current:!0}))],u={transition:"none"};else{b=[];const m=o+10,v=[];for(let f=o;f<=m;f+=1)v.push(f);const C=v.findIndex(f=>f%10===d);b=v.map((f,y)=>{const w=f%10;return a.createElement(ee,Object.assign({},e,{key:f,value:w,offset:y-C,current:y===C}))});const $=h<s?1:-1;u={transform:`translateY(${-Ie(d,o,$)}00%)`}}return a.createElement("span",{className:`${t}-only`,style:u,onTransitionEnd:l},b)}var De=globalThis&&globalThis.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]]);return i};const He=a.forwardRef((e,t)=>{const{prefixCls:i,count:n,className:o,motionClassName:s,style:d,title:p,show:h,component:c="sup",children:l}=e,b=De(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:u}=a.useContext(X),m=u("scroll-number",i),v=Object.assign(Object.assign({},b),{"data-show":h,style:d,className:O(m,o,s),title:p});let C=n;if(n&&Number(n)%1===0){const $=String(n).split("");C=a.createElement("bdi",null,$.map((f,y)=>a.createElement(Be,{prefixCls:m,count:Number(n),value:f,key:$.length-y})))}return d&&d.borderColor&&(v.style=Object.assign(Object.assign({},d),{boxShadow:`0 0 0 1px ${d.borderColor} inset`})),l?se(l,$=>({className:O(`${m}-custom-component`,$==null?void 0:$.className,s)})):a.createElement(c,Object.assign({},v,{ref:t}),C)}),Fe=He;var We=globalThis&&globalThis.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]]);return i};const _e=(e,t)=>{var i,n,o,s,d;const{prefixCls:p,scrollNumberPrefixCls:h,children:c,status:l,text:b,color:u,count:m=null,overflowCount:v=99,dot:C=!1,size:$="default",title:f,offset:y,style:w,className:K,rootClassName:le,classNames:N,styles:S,showZero:H=!1}=e,U=We(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:Y,direction:F,badge:r}=a.useContext(X),g=Y("badge",p),[q,ce]=Ee(g),W=m>v?`${v}+`:m,R=W==="0"||W===0,de=m===null||R&&!H,_=(l!=null||u!=null)&&de,T=C&&!R,j=T?"":W,E=a.useMemo(()=>(j==null||j===""||R&&!H)&&!T,[j,R,H,T]),G=a.useRef(m);E||(G.current=m);const P=G.current,J=a.useRef(j);E||(J.current=j);const Z=J.current,Q=a.useRef(T);E||(Q.current=T);const I=a.useMemo(()=>{if(!y)return Object.assign(Object.assign({},r==null?void 0:r.style),w);const x={marginTop:y[1]};return F==="rtl"?x.left=parseInt(y[0],10):x.right=-parseInt(y[0],10),Object.assign(Object.assign(Object.assign({},x),r==null?void 0:r.style),w)},[F,y,w,r==null?void 0:r.style]),ue=f??(typeof P=="string"||typeof P=="number"?P:void 0),me=E||!b?null:a.createElement("span",{className:`${g}-status-text`},b),be=!P||typeof P!="object"?void 0:se(P,x=>({style:Object.assign(Object.assign({},I),x.style)})),B=re(u,!1),ge=O(N==null?void 0:N.indicator,(i=r==null?void 0:r.classNames)===null||i===void 0?void 0:i.indicator,{[`${g}-status-dot`]:_,[`${g}-status-${l}`]:!!l,[`${g}-color-${u}`]:B}),M={};u&&!B&&(M.color=u,M.background=u);const k=O(g,{[`${g}-status`]:_,[`${g}-not-a-wrapper`]:!c,[`${g}-rtl`]:F==="rtl"},K,le,r==null?void 0:r.className,(n=r==null?void 0:r.classNames)===null||n===void 0?void 0:n.root,N==null?void 0:N.root,ce);if(!c&&_){const x=I.color;return q(a.createElement("span",Object.assign({},U,{className:k,style:Object.assign(Object.assign(Object.assign({},S==null?void 0:S.root),(o=r==null?void 0:r.styles)===null||o===void 0?void 0:o.root),I)}),a.createElement("span",{className:ge,style:Object.assign(Object.assign(Object.assign({},S==null?void 0:S.indicator),(s=r==null?void 0:r.styles)===null||s===void 0?void 0:s.indicator),M)}),b&&a.createElement("span",{style:{color:x},className:`${g}-status-text`},b)))}return q(a.createElement("span",Object.assign({ref:t},U,{className:k,style:Object.assign(Object.assign({},(d=r==null?void 0:r.styles)===null||d===void 0?void 0:d.root),S==null?void 0:S.root)}),c,a.createElement(Ce,{visible:!E,motionName:`${g}-zoom`,motionAppear:!1,motionDeadline:1e3},x=>{let{className:fe,ref:pe}=x;var A,L;const $e=Y("scroll-number",h),V=Q.current,he=O(N==null?void 0:N.indicator,(A=r==null?void 0:r.classNames)===null||A===void 0?void 0:A.indicator,{[`${g}-dot`]:V,[`${g}-count`]:!V,[`${g}-count-sm`]:$==="small",[`${g}-multiple-words`]:!V&&Z&&Z.toString().length>1,[`${g}-status-${l}`]:!!l,[`${g}-color-${u}`]:B});let D=Object.assign(Object.assign(Object.assign({},S==null?void 0:S.indicator),(L=r==null?void 0:r.styles)===null||L===void 0?void 0:L.indicator),I);return u&&!B&&(D=D||{},D.background=u),a.createElement(Fe,{prefixCls:$e,show:!E,motionClassName:fe,className:he,count:Z,title:ue,style:D,key:"scrollNumber",ref:pe},be)}),me))},ie=a.forwardRef(_e);ie.Ribbon=Re;const Me=ie;export{Me as B};
