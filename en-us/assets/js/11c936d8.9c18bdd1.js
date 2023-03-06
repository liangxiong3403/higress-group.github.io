"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=o.createContext({}),l=function(e){var t=o.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(r),g=i,b=p["".concat(a,".").concat(g)]||p[g]||d[g]||n;return r?o.createElement(b,s(s({ref:t},c),{},{components:r})):o.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=g;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[p]="string"==typeof e?e:i,s[1]=u;for(var l=2;l<n;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3647:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>u,toc:()=>l});var o=r(7462),i=(r(7294),r(3905));const n={title:"New contributor guide",keywords:["Higress","contributor"],description:"This is a guide for new comers who wants to contribute to Higress.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/contributor-guide/new-contributor-guide_dev.md"},s="New contributor guide",u={unversionedId:"developers/contributor-guide/new-contributor-guide_dev",id:"developers/contributor-guide/new-contributor-guide_dev",title:"New contributor guide",description:"This is a guide for new comers who wants to contribute to Higress.",source:"@site/i18n/en-us/docusaurus-plugin-content-docs/current/developers/contributor-guide/new-contributor-guide_dev.md",sourceDirName:"developers/contributor-guide",slug:"/developers/contributor-guide/new-contributor-guide_dev",permalink:"/en-us/docs/developers/contributor-guide/new-contributor-guide_dev",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/contributor-guide/new-contributor-guide_dev.md",tags:[],version:"current",frontMatter:{title:"New contributor guide",keywords:["Higress","contributor"],description:"This is a guide for new comers who wants to contribute to Higress.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/contributor-guide/new-contributor-guide_dev.md"},sidebar:"developers",previous:{title:"Developers",permalink:"/en-us/docs/developers/developers_dev"},next:{title:"Test coverage guide",permalink:"/en-us/docs/developers/contributor-guide/test-coverage-guide_dev"}},a={},l=[{value:"Subscribe to the mailing list",id:"subscribe-to-the-mailing-list",level:3},{value:"Reporting issue",id:"reporting-issue",level:3},{value:"Sending pull request",id:"sending-pull-request",level:3},{value:"Code convention",id:"code-convention",level:3}],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"new-contributor-guide"},"New contributor guide"),(0,i.kt)("p",null,"This is a guide for new contributor who wants to contribute to Higress."),(0,i.kt)("h3",{id:"subscribe-to-the-mailing-list"},"Subscribe to the mailing list"),(0,i.kt)("p",null,"TBD"),(0,i.kt)("h3",{id:"reporting-issue"},"Reporting issue"),(0,i.kt)("p",null,"You can always reporting an issue to Higress via Github ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/higress/issues"},"Issues"),"."),(0,i.kt)("p",null,"If you are reporting bugs, please refer to the issue report ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/higress/issues/new?template=BUG_REPORT.md"},"template"),"."),(0,i.kt)("p",null,"If you are reporting feature, please refer to the issue report ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/higress/issues/new?template=FEATURE_REQUEST.md"},"template"),"."),(0,i.kt)("p",null,"If you are reporting regular issues, like raise an question, you can open an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/higress/issues/new"},"regular issue"),"."),(0,i.kt)("h3",{id:"sending-pull-request"},"Sending pull request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow the checklist in the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/alibaba/higress/blob/main/.github/PULL_REQUEST_TEMPLATE.md"},"pull request template")),(0,i.kt)("li",{parentName:"ul"},"Before you sending out the pull request, please sync your forked repository with remote repository, this will make your pull request simple and clear. See guide below:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream git@github.com:alibaba/higress.git\ngit fetch upstream\ngit rebase upstream/main\ngit checkout -b your_awesome_patch\n... add some work\ngit push origin your_awesome_patch\n")),(0,i.kt)("h3",{id:"code-convention"},"Code convention"),(0,i.kt)("p",null,"Please check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alibaba/higress/blob/main/CONTRIBUTING_EN.md"},"CONTRIBUTING.md")," for code convention."))}d.isMDXComponent=!0}}]);