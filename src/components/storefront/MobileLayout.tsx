import { ReactNode } from "react";
import { Wifi, Battery } from "lucide-react";

export default function MobileLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4 relative font-sans overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#06B6D4 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

            {/* Phone Frame */}
            <div className="w-full max-w-[400px] h-[85vh] bg-white rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col border-[8px] border-gray-800 ring-4 ring-gray-900/10">

                {/* Status Bar */}
                <div className="h-8 bg-white flex justify-between items-center px-6 text-[10px] font-bold text-gray-900 border-b border-gray-50 flex-none z-20 select-none">
                    <span>9:41</span>
                    <div className="flex gap-1">
                        <Wifi size={12} />
                        <Battery size={12} />
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col relative overflow-hidden">
                    {children}
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-0 right-0 flex justify-center pb-1 pointer-events-none z-50">
                    <div className="w-32 h-1 bg-gray-300 rounded-full shadow-sm"></div>
                </div>
            </div>
        </div>
    );
}
