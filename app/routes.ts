import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    route ("login","./main/login/login.jsx"),
    layout ("./index.jsx",[
        index ("./main/homeindex.jsx"),
        ...prefix ("news",[
            index ("./main/news/newsindex.jsx"),
            route (":newsid","./main/news/newspage.jsx")
        ]),
        ...prefix ("market",[
            index ("./main/market/marketindex.jsx"),
            route (":marketid","./main/market/marketpage.jsx")
        ])
    ])
] satisfies RouteConfig;
