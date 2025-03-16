import { Outlet } from "react-router";
import "./stylesheet/index.css"

export default function Root() {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <title>Document</title>
            </head>
            <Outlet />
        </html>
    );
}