import { Outlet, LiveReload, Link, Links, Meta } from "@remix-run/react";
import styles from './styles/app.css'

export function links(){
	return [{rel: 'stylesheet', href: styles}]
}

export const meta = () => {
	const descriptoin = "Something cool"
	const keywords = "remix, react, javascript"

	return{
		descriptoin,
		keywords
	}
}


export default function App() {
    return (
        <Document>
            
			<Layout>
            	<Outlet/>
				<Links/>
				<Meta/>

			</Layout>
        </Document>
    );
}

function Document({ children, title }) {
    return (
        <html lang="en">
            <head>
                <title>{title ? title : "My Blog Stuff"}</title>
            </head>
            <body>
                {children}
                {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
            </body>
        </html>
    );
}

function Layout({ children }) {
    return (
        <>
            <nav>
				<Link to='/'>
					Testing once again
				</Link>
				<ul>
					<li>
						<Link to='plans'>Plans</Link>
					</li>
				</ul>
			</nav>

			<div>
				{children}
			</div>
        </>
    );
}
