import "@/app/styles/navbar.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="nav-wrapper">
                <div>
                    <Link href="/">Home Page</Link>
                </div>
                <div>wer</div>
                <div>tyt</div>
                <div>koj</div>
                <div>
                    <Link href="/aboutus">About Us</Link>
                </div>
            </div>
        </>
    )
}