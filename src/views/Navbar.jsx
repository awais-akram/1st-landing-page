import { Button } from "@/components/ui/button";
import { navLinks } from "../models/heroData.js";
export default function Navbar() {
    return (
        <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="text-2xl font-bold text-emerald-500 tracking-tight">
                Biccas
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="hover:text-emerald-600 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                    Login
                </a>
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-5">
                    Sign Up
                </Button>
            </div>
        </header>
    );
}