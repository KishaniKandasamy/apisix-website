(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{241:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(8),r=(n(0),n(267)),s={title:"Ingress Controller"},o={unversionedId:"design",id:"design",isDocsHomePage:!1,title:"Ingress Controller",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/design.md",slug:"/design",permalink:"/docs/ingress-controller/design",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/design.md",version:"current"},c=[{value:"Modules",id:"modules",children:[{value:"1.Ingress-types",id:"1ingress-types",children:[]},{value:"2.Types",id:"2types",children:[]},{value:"3.Seven",id:"3seven",children:[]},{value:"4.Ingress-controller",id:"4ingress-controller",children:[]}]},{value:"CRD design",id:"crd-design",children:[]},{value:"Monitoring CRDs",id:"monitoring-crds",children:[{value:"Timing diagram",id:"timing-diagram",children:[]},{value:"Conversion structure",id:"conversion-structure",children:[]},{value:"Cascade update",id:"cascade-update",children:[]},{value:"Diff rules",id:"diff-rules",children:[]},{value:"Service Discovery",id:"service-discovery",children:[]},{value:"Annotation implementation",id:"annotation-implementation",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Apache APISIX ingress for Kubernetes."),Object(r.b)("h2",{id:"modules"},"Modules"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/master/docs/assets/images/modules.png",alt:"Architecture"})),Object(r.b)("h3",{id:"1ingress-types"},"1.Ingress-types"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"defines the CRD(CustomResourceDefinition) needed by Apache APISIX")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"currently supports ApisixRoute/ApisixUpstream\uff0cand other service and route level plugins;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"can be packaged as a stand-alone binary, keep in sync with the ingress definition;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/3"},"CRD design")))),Object(r.b)("h3",{id:"2types"},"2.Types"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"define interface objects to match concepts from Apache APISIX like route, service, upstream, and plugin;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"can be a packaged as a stand-alone binary, need to match with compatible Apache APISIX version;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"add new types to this module to support new features;"))),Object(r.b)("h3",{id:"3seven"},"3.Seven"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"contains main application logic;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Sync the k8s cluster states to Apache APISIX, based on Apisix-types object;"))),Object(r.b)("h3",{id:"4ingress-controller"},"4.Ingress-controller"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"driver process for ingress controller; watches k8s apiserver;")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"match and covert Apisix-ingress-types to Apisix-types before handing the control over to the above module seven;"))),Object(r.b)("h2",{id:"crd-design"},"CRD design"),Object(r.b)("p",null,"Currently ",Object(r.b)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," CRDs consist of 3 parts: ApisixRoute/ApisixUpstream. The design follows the following ideas."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The most important part of the gateway is the route part, which is used to define the distribution rules of the gateway traffics."),Object(r.b)("li",{parentName:"ol"},"In order to facilitate understanding and configuration, the design structure of ",Object(r.b)("inlineCode",{parentName:"li"},"ApisixRoute")," is basically similar to Kubernetes Ingress."),Object(r.b)("li",{parentName:"ol"},"In the design of annotation, the structure of Kubernetes Ingress is used for reference, but the internal implementation is based on the plug-in of Apache APISIX."),Object(r.b)("li",{parentName:"ol"},"In the simplest case, you only need to define ",Object(r.b)("inlineCode",{parentName:"li"},"ApisixRoute"),", and the Ingress controller will automatically add ",Object(r.b)("inlineCode",{parentName:"li"},"ApisixUpstream"),"."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"ApisixUpstream")," can define some details on Apache APISIX upstream, such as load balancing/health check, etc.")),Object(r.b)("h2",{id:"monitoring-crds"},"Monitoring CRDs"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," is responsible for interacting with the Kubernetes Apiserver, applying for accessible resource permissions (RBAC), monitoring changes, and implementing object conversion within the Ingress controller, comparing the changes, and then synchronizing to Apache APISIX."),Object(r.b)("h3",{id:"timing-diagram"},"Timing diagram"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/master/docs/assets/images/flow.png",alt:"flow"})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Here is a flowchart that introduces the main logic of ",Object(r.b)("inlineCode",{parentName:"li"},"ApisixRoute")," and other CRDs during synchronization.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/master/docs/assets/images/sync-logic-controller.png",alt:"logic"})),Object(r.b)("h3",{id:"conversion-structure"},"Conversion structure"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," provides external configuration methods for CRDs. It is aimed at operators such as daily operation and maintenance, who often need to process a large number of routes in batches, hoping to handle all related services in the same configuration file, and at the same time have convenient and understandable management capabilities. Apache APISIX is designed from the perspective of the gateway, and all routes are independent. This leads to obvious differences in the data structure between the two. One focuses on batch definition, while the other is discrete implementation."),Object(r.b)("p",null,"Taking into account the usage habits of different groups of people, the data structure of CRDs draws on the data structure of Kubernetes Ingress, and is basically the same in shape."),Object(r.b)("p",null,"A simple comparison is as follows, they have different definitions:"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/master/docs/assets/images/struct-compare.png",alt:"strut-compare"})),Object(r.b)("p",null,"They are a many-to-many relationship.Therefore, ",Object(r.b)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," has to do some conversion of CRDs to adapt to different gateways."),Object(r.b)("h3",{id:"cascade-update"},"Cascade update"),Object(r.b)("p",null,"At present, we have defined multiple CRDs, and these CRDs are responsible for the definition of their respective fields. ",Object(r.b)("inlineCode",{parentName:"p"},"ApisixRoute"),"/ ",Object(r.b)("inlineCode",{parentName:"p"},"ApisixUpstream")," correspond to objects such as ",Object(r.b)("inlineCode",{parentName:"p"},"route"),"/ ",Object(r.b)("inlineCode",{parentName:"p"},"service")," / ",Object(r.b)("inlineCode",{parentName:"p"},"upstream")," in Apache APISIX. As the strong binding relationship between APISIX objects, when modifying and deleting batch data structures such as CRDs, you have to consider the impact of cascading between objects."),Object(r.b)("p",null,"So, in ",Object(r.b)("inlineCode",{parentName:"p"},"apisix-ingress-controller"),", a broadcast notification mechanism is designed through ",Object(r.b)("inlineCode",{parentName:"p"},"channel"),", that is, the definition of any object must be notified to other objects related to it and trigger the corresponding behavior."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/master/docs/assets/images/cascade-update.png",alt:"hierarchical"})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"We can initiate discussions in this area and propose a more reasonable design plan")),Object(r.b)("h3",{id:"diff-rules"},"Diff rules"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"seven")," module internally saves memory data structures, which is currently very similar to the Apache Apisix resource object. When the Kubernetes resource object is newly changed, ",Object(r.b)("inlineCode",{parentName:"p"},"seven")," will compare the memory objects and update incrementally according to the result of the comparison."),Object(r.b)("p",null,"The current comparison rule is based on the grouping of ",Object(r.b)("inlineCode",{parentName:"p"},"route")," / ",Object(r.b)("inlineCode",{parentName:"p"},"service")," / ",Object(r.b)("inlineCode",{parentName:"p"},"upstream")," resource objects, compare them separately, and make corresponding broadcast notifications after finding the differences."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/master/docs/assets/images/diff-rules.png",alt:"diff-flow"})),Object(r.b)("h3",{id:"service-discovery"},"Service Discovery"),Object(r.b)("p",null,"According to the ",Object(r.b)("inlineCode",{parentName:"p"},"namespace")," ",Object(r.b)("inlineCode",{parentName:"p"},"name")," ",Object(r.b)("inlineCode",{parentName:"p"},"port")," defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"ApisixUpstream")," resource object, ",Object(r.b)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," will register the ",Object(r.b)("inlineCode",{parentName:"p"},"endpoints")," node information in the ",Object(r.b)("inlineCode",{parentName:"p"},"running")," state to the nodes in Apache APISIX Upstream. And according to Kubernetes Endpoint status is synchronized in real time."),Object(r.b)("p",null,"Based on service discovery, Apache APISIX Ingress can directly access backend Pod nodes. Bypassing Kubernetes Service, it is possible to implement customized load balancing strategies."),Object(r.b)("h3",{id:"annotation-implementation"},"Annotation implementation"),Object(r.b)("p",null,"Unlike the implementation of Kubernetes Nginx Ingress, the implementation of Annotation by ",Object(r.b)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," is based on the plug-in mechanism of Apache APISIX."),Object(r.b)("p",null,"For example, the settings of the black and white list can be configured through the ",Object(r.b)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/whitelist-source-range")," annotation in the ",Object(r.b)("inlineCode",{parentName:"p"},"ApisixRoute")," resource object."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v1\nkind: ApisixRoute\nmetadata:\n  annotations:\n    k8s.apisix.apache.org/whitelist-source-range: 1.2.3.4,2.2.0.0/16\n  name: httpserver-route\nspec:\n    ...\n")),Object(r.b)("p",null,"The black and white list here is implemented by the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/doc/plugins/ip-restriction.md"},"ip-restriction")," plugin."),Object(r.b)("p",null,"There will be more annotation implementations in the future to facilitate the definition of some common configurations, such as CORS."),Object(r.b)("p",null,"If you have some annotation needs, welcome to ",Object(r.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues"},"issue")," to discuss, let\u2019s discuss how to implement it."))}p.isMDXComponent=!0},267:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=i,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||r;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);