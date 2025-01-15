import AppBar from "../components/AppBar/AppBar.jsx"
import { Suspense } from "react"

export default function Layout({ children }) {
    return (
        <div>
            <AppBar />
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
    )
}