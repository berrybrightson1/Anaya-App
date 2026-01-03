import Link from "next/link";
import { ArrowRight, Store, ShieldCheck, Zap } from "lucide-react";

export default function PlatformLanding() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Navbar */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">A</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-gray-900">Anaya Platform</span>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center h-9">
                            Login
                        </Link>
                        <Link href="/signup" className="bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <main className="flex-1 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        v1.0 Multi-Tenant Beta
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
                        The Operating System <br /> for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Modern Retail</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Manage your inventory, orders, and customer relationships in one place.
                        Built for scaling businesses, from side-hustles to wholesale enterprises.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/signup" className="h-12 px-8 rounded-full bg-black text-white font-bold text-lg flex items-center gap-2 hover:scale-105 transition shadow-xl shadow-gray-200">
                            Create Your Store <ArrowRight size={20} />
                        </Link>
                        <Link href="/demo-store" className="h-12 px-8 rounded-full bg-white text-gray-900 border border-gray-200 font-bold text-lg flex items-center gap-2 hover:bg-gray-50 transition">
                            View Demo
                        </Link>
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                            <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                                <Store size={20} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Dual Interface</h3>
                            <p className="text-sm text-gray-500">Mobile-first storefront for customers, desktop-class dashboard for you.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                <Zap size={20} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Real-time Sync</h3>
                            <p className="text-sm text-gray-500">Inventory updates instantly across all devices. No refreshing needed.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                                <ShieldCheck size={20} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Enterprise Ready</h3>
                            <p className="text-sm text-gray-500">Role-based access, audit logs, and wholesale pricing tiers.</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="bg-white border-t border-gray-100 py-8 text-center text-sm text-gray-400">
                &copy; 2026 Anaya Platforms. All rights reserved.
            </footer>
        </div>
    );
}
