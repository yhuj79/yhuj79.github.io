(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Mdw5:function(t,e,a){"use strict";a.r(e);var n=a("KQm4"),c=a("wTIg"),r=a("q1tI"),i=a("vrFN"),o=a("4Fbo"),s=a("CZVI"),l=a("7oih"),f=a("Wbzz"),g=a("cr+I"),d=a.n(g),u=a("TepU"),b=a("TWQg"),m=a("H2bQ"),j=a("dar/"),O=a("qKvR");var p=Object(c.a)("div",{target:"e1c1riss0"})({name:"1bdwg0l",styles:"width:100%;max-width:768px;margin-left:auto;margin-right:auto;"}),h={name:"1y7rtor",styles:"margin-top:1rem;padding-left:1rem;padding-right:1rem;font-size:2.25rem;font-weight:700;"},v={name:"b7ldc7",styles:"margin-left:1rem;margin-right:1rem;font-size:1.25rem;"};e.default=function(t){var e=t.data,a=t.location,c=e.allMarkdownRemark.edges,g=e.site.siteMetadata.configs.countOfInitialPost,w=String(a.pathname).split("/").join(" ").trim(),k=Object(m.a)(w),y=k[0],I=k[1],P=k[2],R=Object(r.useRef)(),z=Object(r.useState)({tag:"ALL",filteredPosts:c}),L=z[0],M=z[1],T=Object(r.useMemo)((function(){var t=[];c.map((function(e){var a=e.node;return t=[].concat(Object(n.a)(t),Object(n.a)(a.frontmatter.tags))}));for(var e=0;e<t.length;++e)for(var a=e+1;a<t.length;++a)t[e]===t[a]&&t.splice(a--,1);return t}),[c]),U=Object(r.useCallback)((function(t){void 0===t&&(t=L.tag),M("ALL"===t?{tag:t,filteredPosts:c}:{tag:t,filteredPosts:c.filter((function(e){return e.node.frontmatter.tags.includes(t)}))})}),[c,L.tag]);Object(b.a)((function(){c.length>I.current*g&&(P(),U())}),R);return Object(r.useEffect)((function(){if(a.href){var t=d.a.parseUrl(a.href).query.tag;t&&U(t)}}),[a.href,U]),console.log(L),Object(O.c)(l.a,null,Object(O.c)(i.a,{title:decodeURI(w)}),Object(O.c)(p,null,Object(O.c)(o.a,null),Object(O.c)("h1",{className:"category-title",css:h},"# ",decodeURI(w))),Object(O.c)(j.a,{path:a.pathname}),Object(O.c)(p,null,Object(O.c)(u.a,{tags:T,onTagClick:function(t){Object(f.navigate)("?tag="+t),U(t)},state:L}),0===L.filteredPosts.length&&Object(O.c)("div",{css:v},"no post.."),L.filteredPosts.slice(0,y*g).map((function(t,e){return Object(O.c)(s.a,{post:t,key:"post_"+e})}))),Object(O.c)("div",{ref:R}))}}}]);
//# sourceMappingURL=component---src-templates-category-js-8d48273d9b12c0d5f22e.js.map