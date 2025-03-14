import { Outlet } from "react-router";
import "./stylesheet/index.css"

export default function Root() {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <Outlet />
        </html>
    );
}