(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(8),i=(n(0),n(267)),s={title:"prometheus"},c={unversionedId:"plugins/prometheus",id:"plugins/prometheus",isDocsHomePage:!1,title:"prometheus",description:"\x3c!--",source:"@site/docs/apisix/plugins/prometheus.md",slug:"/plugins/prometheus",permalink:"/docs/apisix/plugins/prometheus",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/prometheus.md",version:"current",sidebar:"docs",previous:{title:"request-id",permalink:"/docs/apisix/plugins/request-id"},next:{title:"Zipkin",permalink:"/docs/apisix/plugins/zipkin"}},p=[{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"How to enable it",id:"how-to-enable-it",children:[]},{value:"How to fetch the metric data",id:"how-to-fetch-the-metric-data",children:[]},{value:"How to specify export uri",id:"how-to-specify-export-uri",children:[{value:"Grafana dashboard",id:"grafana-dashboard",children:[]},{value:"Available metrics",id:"available-metrics",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],o={toc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This plugin exposes metrics in Prometheus Exposition format."),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Requirement"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Valid"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"prefer_name"),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"optional"),Object(i.b)("td",{parentName:"tr",align:null},"false"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"When set to ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", would print route/service ",Object(i.b)("inlineCode",{parentName:"td"},"name")," instead of ",Object(i.b)("inlineCode",{parentName:"td"},"id")," in Prometheus metric.")))),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("p",null,"This plugin will add ",Object(i.b)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics")," to expose the metrics."),Object(i.b)("p",null,"The metrics are exposed via a separate Prometheus server address.\nBy default, the address is ",Object(i.b)("inlineCode",{parentName:"p"},"127.0.0.1:9091"),". You can change it in the ",Object(i.b)("inlineCode",{parentName:"p"},"conf/config.yaml"),", for example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"plugin_attr:\n  prometheus:\n    export_addr:\n      ip: ${{INTRANET_IP}}\n      port: 9092\n")),Object(i.b)("p",null,"Assume environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"INTRANET_IP")," is ",Object(i.b)("inlineCode",{parentName:"p"},"172.1.1.1"),", now APISIX will export the metrics via ",Object(i.b)("inlineCode",{parentName:"p"},"172.1.1.1:9092"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Before version ",Object(i.b)("inlineCode",{parentName:"strong"},"2.6"),", the metrics are exposed via the data panel port,\nyou may need to use ",Object(i.b)("a",{parentName:"strong",href:"/docs/apisix/plugin-interceptors"},"interceptors")," to protect it.")),Object(i.b)("p",null,"If you still want this behavior, you can configure it like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"plugin_attr:\n  prometheus:\n    enable_export_server: false\n")),Object(i.b)("h2",{id:"how-to-enable-it"},"How to enable it"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"prometheus")," plugin could be enable with empty table.\nNotice, ",Object(i.b)("inlineCode",{parentName:"p"},"name")," could be duplicated for multiple routes/services, so when set ",Object(i.b)("inlineCode",{parentName:"p"},"prefer_name")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", take care of naming format or it could be misleading."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "prometheus":{}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),Object(i.b)("p",null,"You can use ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"APISIX Dashboard")," to complete the above operations through the web console."),Object(i.b)("p",null,"First, add a Route:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus-1.png",alt:null})),Object(i.b)("p",null,"Then add prometheus plugin:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus-2.png",alt:null})),Object(i.b)("h2",{id:"how-to-fetch-the-metric-data"},"How to fetch the metric data"),Object(i.b)("p",null,"We fetch the metric data from the specified url ",Object(i.b)("inlineCode",{parentName:"p"},"/apisix/prometheus/metrics"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"curl -i http://127.0.0.1:9091/apisix/prometheus/metrics\n")),Object(i.b)("p",null,"Puts this URL address into prometheus, and it will automatically fetch\nthese metric data."),Object(i.b)("p",null,"For example like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: 'apisix'\n    metrics_path: '/apisix/prometheus/metrics'\n    static_configs:\n    - targets: ['127.0.0.1:9091']\n")),Object(i.b)("p",null,"And we can check the status at prometheus console:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus01.png",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/prometheus02.png",alt:null})),Object(i.b)("h2",{id:"how-to-specify-export-uri"},"How to specify export uri"),Object(i.b)("p",null,"We can change the default export uri in the ",Object(i.b)("inlineCode",{parentName:"p"},"plugin_attr")," section of ",Object(i.b)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"export_uri"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},'"/apisix/prometheus/metrics"'),Object(i.b)("td",{parentName:"tr",align:null},"uri to get the prometheus metrics")))),Object(i.b)("p",null,"Here is an example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"plugin_attr:\n  prometheus:\n    export_uri: /apisix/metrics\n")),Object(i.b)("h3",{id:"grafana-dashboard"},"Grafana dashboard"),Object(i.b)("p",null,"Metrics exported by the plugin can be graphed in Grafana using a drop in dashboard."),Object(i.b)("p",null,"Downloads ",Object(i.b)("a",{parentName:"p",href:"../../../assets/other/json/apisix-grafana-dashboard.json"},"Grafana dashboard meta")," and imports it to Grafana\u3002"),Object(i.b)("p",null,"Or you can goto ",Object(i.b)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/11719"},"Grafana official")," for ",Object(i.b)("inlineCode",{parentName:"p"},"Grafana")," meta data."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana-1.png",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana-2.png",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana-3.png",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/grafana-4.png",alt:null})),Object(i.b)("h3",{id:"available-metrics"},"Available metrics"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Status codes"),": HTTP status code returned from upstream services. These status code available per service and across all services."),Object(i.b)("p",{parentName:"li"},"  Attributes\uff1a"),Object(i.b)("table",{parentName:"li"},Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"code"),Object(i.b)("td",{parentName:"tr",align:null},"The HTTP status code returned by the upstream service.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"route"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"route_id")," of the matched route is request. If it does not match, the default value is an empty string.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"matched_uri"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"uri")," of the route matching the request, if it does not match, the default value is an empty string.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"matched_host"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"host")," of the route that matches the request. If it does not match, the default value is an empty string.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"service"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"service_id")," of the route matched by the request. When the route lacks service_id, the default is ",Object(i.b)("inlineCode",{parentName:"td"},"$host"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"consumer"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"consumer_name")," of the consumer that matches the request. If it does not match, the default value is an empty string.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"node"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"ip")," of the upstream node."))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Bandwidth"),": Total Bandwidth (egress/ingress) flowing through APISIX. The total bandwidth of per service can be counted."),Object(i.b)("p",{parentName:"li"},"  Attributes\uff1a"),Object(i.b)("table",{parentName:"li"},Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"type"),Object(i.b)("td",{parentName:"tr",align:null},"The type of bandwidth(egress/ingress).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"route"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"route_id")," of the matched route is request. If it does not match, the default value is an empty string..")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"service"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"service_id")," of the route matched by the request. When the route lacks service_id, the default is ",Object(i.b)("inlineCode",{parentName:"td"},"$host"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"consumer"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"consumer_name")," of the consumer that matches the request. If it does not match, the default value is an empty string.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"node"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"ip")," of the upstream node."))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"etcd reachability"),": A gauge type with a value of 0 or 1, representing if etcd can be reached by a APISIX or not, where ",Object(i.b)("inlineCode",{parentName:"p"},"1")," is available, and ",Object(i.b)("inlineCode",{parentName:"p"},"0")," is unavailable.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Connections"),": Various Nginx connection metrics like active, reading, writing, and number of accepted connections.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Batch process entries"),": A gauge type, when we use plugins and the plugin used batch process to send data, such as: sys logger, http logger, sls logger, tcp logger, udp logger and zipkin, then the entries which hasn't been sent in batch process will be counted in the metrics.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Latency"),": The per service histogram of request time in different dimensions."),Object(i.b)("p",{parentName:"li"},"  Attributes\uff1a"),Object(i.b)("table",{parentName:"li"},Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"type"),Object(i.b)("td",{parentName:"tr",align:null},"The value can be ",Object(i.b)("inlineCode",{parentName:"td"},"apisix"),", ",Object(i.b)("inlineCode",{parentName:"td"},"upstream")," or ",Object(i.b)("inlineCode",{parentName:"td"},"request"),", which means http latency caused by apisix, upstream, or their sum.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"service"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"service_id")," of the route matched by the request. When the route lacks service_id, the default is ",Object(i.b)("inlineCode",{parentName:"td"},"$host"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"consumer"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"consumer_name")," of the consumer that matches the request. If it does not match, the default value is an empty string.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"node"),Object(i.b)("td",{parentName:"tr",align:null},"The ",Object(i.b)("inlineCode",{parentName:"td"},"ip")," of the upstream node."))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"Info"),": the information of APISIX node."))),Object(i.b)("p",null,"Here is the original metric data of APISIX:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9091/apisix/prometheus/metrics\n# HELP apisix_bandwidth Total bandwidth in bytes consumed per service in Apisix\n# TYPE apisix_bandwidth counter\napisix_bandwidth{type="egress",route="",service="",consumer="",node=""} 8417\napisix_bandwidth{type="egress",route="1",service="",consumer="",node="127.0.0.1"} 1420\napisix_bandwidth{type="egress",route="2",service="",consumer="",node="127.0.0.1"} 1420\napisix_bandwidth{type="ingress",route="",service="",consumer="",node=""} 189\napisix_bandwidth{type="ingress",route="1",service="",consumer="",node="127.0.0.1"} 332\napisix_bandwidth{type="ingress",route="2",service="",consumer="",node="127.0.0.1"} 332\n# HELP apisix_etcd_modify_indexes Etcd modify index for APISIX keys\n# TYPE apisix_etcd_modify_indexes gauge\napisix_etcd_modify_indexes{key="consumers"} 0\napisix_etcd_modify_indexes{key="global_rules"} 0\napisix_etcd_modify_indexes{key="max_modify_index"} 222\napisix_etcd_modify_indexes{key="prev_index"} 35\napisix_etcd_modify_indexes{key="protos"} 0\napisix_etcd_modify_indexes{key="routes"} 222\napisix_etcd_modify_indexes{key="services"} 0\napisix_etcd_modify_indexes{key="ssls"} 0\napisix_etcd_modify_indexes{key="stream_routes"} 0\napisix_etcd_modify_indexes{key="upstreams"} 0\napisix_etcd_modify_indexes{key="x_etcd_index"} 223\n# HELP apisix_batch_process_entries batch process remaining entries\n# TYPE apisix_batch_process_entries gauge\napisix_batch_process_entries{name="http-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="sls-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="tcp-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="udp-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="sys-logger",route_id="9",server_addr="127.0.0.1"} 1\napisix_batch_process_entries{name="zipkin_report",route_id="9",server_addr="127.0.0.1"} 1\n# HELP apisix_etcd_reachable Config server etcd reachable from Apisix, 0 is unreachable\n# TYPE apisix_etcd_reachable gauge\napisix_etcd_reachable 1\n# HELP apisix_http_status HTTP status codes per service in Apisix\n# TYPE apisix_http_status counter\napisix_http_status{code="200",route="1",matched_uri="/hello",matched_host="",service="",consumer="",node="127.0.0.1"} 4\napisix_http_status{code="200",route="2",matched_uri="/world",matched_host="",service="",consumer="",node="127.0.0.1"} 4\napisix_http_status{code="404",route="",matched_uri="",matched_host="",service="",consumer="",node=""} 1\n# HELP apisix_nginx_http_current_connections Number of HTTP connections\n# TYPE apisix_nginx_http_current_connections gauge\napisix_nginx_http_current_connections{state="accepted"} 11994\napisix_nginx_http_current_connections{state="active"} 2\napisix_nginx_http_current_connections{state="handled"} 11994\napisix_nginx_http_current_connections{state="reading"} 0\napisix_nginx_http_current_connections{state="total"} 1191780\napisix_nginx_http_current_connections{state="waiting"} 1\napisix_nginx_http_current_connections{state="writing"} 1\n# HELP apisix_nginx_metric_errors_total Number of nginx-lua-prometheus errors\n# TYPE apisix_nginx_metric_errors_total counter\napisix_nginx_metric_errors_total 0\n# HELP apisix_http_latency HTTP request latency in milliseconds per service in APISIX\n# TYPE apisix_http_latency histogram\napisix_http_latency_bucket{type="apisix",route="1",service="",consumer="",node="127.0.0.1",le="1"} 1\napisix_http_latency_bucket{type="apisix",route="1",service="",consumer="",node="127.0.0.1",le="2"} 1\napisix_http_latency_bucket{type="request",route="1",service="",consumer="",node="127.0.0.1",le="1"} 1\napisix_http_latency_bucket{type="request",route="1",service="",consumer="",node="127.0.0.1",le="2"} 1\napisix_http_latency_bucket{type="upstream",route="1",service="",consumer="",node="127.0.0.1",le="1"} 1\napisix_http_latency_bucket{type="upstream",route="1",service="",consumer="",node="127.0.0.1",le="2"} 1\n...\n# HELP apisix_node_info Info of APISIX node\n# TYPE apisix_node_info gauge\napisix_node_info{hostname="desktop-2022q8f-wsl"} 1\n')),Object(i.b)("h2",{id:"disable-plugin"},"Disable Plugin"),Object(i.b)("p",null,"Remove the corresponding json configuration in the plugin configuration to disable ",Object(i.b)("inlineCode",{parentName:"p"},"prometheus"),".\nAPISIX plugins are hot-reloaded, therefore no need to restart APISIX."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')))}l.isMDXComponent=!0},267:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),b=l(n),u=a,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,c(c({ref:t},o),{},{components:n})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var o=2;o<i;o++)s[o]=n[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);