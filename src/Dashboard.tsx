import { useState } from 'react';

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="bg-[#f8f6f6] text-legal-black min-h-screen font-sans">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-[80px] lg:w-[260px] bg-legal-black text-white transition-all duration-300 flex flex-col ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="p-6 flex items-center gap-3 border-b border-white/10">
                    <div className="bg-primary p-2 rounded-lg shrink-0">
                        <span className="material-symbols-outlined text-white text-2xl">gavel</span>
                    </div>
                    <span className="font-bold text-xl tracking-tight hidden lg:block">NRMS <span className="text-primary">Legal</span></span>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <a className="flex items-center gap-4 px-3 py-3 bg-primary text-white rounded-xl transition-all" href="#">
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="font-medium hidden lg:block">Dashboard</span>
                    </a>
                    <a className="flex items-center gap-4 px-3 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#">
                        <span className="material-symbols-outlined">menu_book</span>
                        <span className="font-medium hidden lg:block">Registers</span>
                    </a>
                    <a className="flex items-center gap-4 px-3 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#">
                        <span className="material-symbols-outlined">groups</span>
                        <span className="font-medium hidden lg:block">Clients</span>
                    </a>
                    <a className="flex items-center gap-4 px-3 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#">
                        <span className="material-symbols-outlined">analytics</span>
                        <span className="font-medium hidden lg:block">Reports</span>
                    </a>
                    <a className="flex items-center gap-4 px-3 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#">
                        <span className="material-symbols-outlined">settings</span>
                        <span className="font-medium hidden lg:block">Settings</span>
                    </a>
                </nav>
                <div className="p-4 border-t border-white/10">
                    <div className="flex items-center gap-3 px-3">
                        <div className="size-10 rounded-full border border-primary overflow-hidden shrink-0">
                            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYWWbNBB0riZmNBHSqWnajMlpJiMEjXPjOpbDk31jz33mvZMsGkcVSODshrVsteM-9lwjo9jJPN7v7z5D_Mhpv8GHqpC0Jz2ylRMJijlpjtyaA6KCiy57EMBxAQBe3YifSZQAWrvMVt6bbRuhGfOZw9zyItITgmI_k5qYh1VZ-H3OonsaxyGUKf8voeLznj9xlyMfOn1l5wDqYX-Fg_m_JS6Cd8AdIP_VAgEoP4AHUo8C_EG1IjmjHCE34zNxta0iznVGhr9k0uTjg" />
                        </div>
                        <div className="hidden lg:block">
                            <p className="text-sm font-bold">John Doe</p>
                            <p className="text-xs text-gray-400">Notary Public</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="lg:ml-[260px] ml-0 min-h-screen flex flex-col transition-all duration-300">
                {/* Header */}
                <header className="sticky top-0 z-40 bg-white border-b border-gray-200 px-6 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="lg:hidden">
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-gray-600">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                    <div className="flex-1 max-w-2xl relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                        <input className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-gray-200 rounded-xl text-sm focus:ring-primary focus:border-primary focus:outline-none" placeholder="Search registers, clients, or specific acts..." type="text" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-xl text-sm font-medium">
                            <span className="material-symbols-outlined text-gray-500 text-sm">calendar_month</span>
                            <span>Oct 01 - Oct 31, 2023</span>
                            <span className="material-symbols-outlined text-gray-400 text-sm">expand_more</span>
                        </div>
                        <button className="bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:bg-red-700 transition-all flex items-center gap-2 cursor-pointer">
                            <span className="material-symbols-outlined text-sm">add</span>
                            New Entry
                        </button>
                    </div>
                </header>

                <div className="p-6 space-y-6">
                    {/* Stats Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="bg-primary/5 p-3 rounded-xl text-primary">
                                    <span className="material-symbols-outlined">description</span>
                                </div>
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12.5%</span>
                            </div>
                            <div className="mt-4">
                                <p className="text-legal-gray text-xs font-bold uppercase tracking-wider">Total Entries</p>
                                <h3 className="text-3xl font-bold mt-1 tracking-tight">1,240</h3>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="bg-primary/5 p-3 rounded-xl text-primary">
                                    <span className="material-symbols-outlined">verified</span>
                                </div>
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+8.2%</span>
                            </div>
                            <div className="mt-4">
                                <p className="text-legal-gray text-xs font-bold uppercase tracking-wider">Documents Notarized</p>
                                <h3 className="text-3xl font-bold mt-1 tracking-tight">856</h3>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="bg-primary/5 p-3 rounded-xl text-primary">
                                    <span className="material-symbols-outlined">groups</span>
                                </div>
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+5.1%</span>
                            </div>
                            <div className="mt-4">
                                <p className="text-legal-gray text-xs font-bold uppercase tracking-wider">Clients Served</p>
                                <h3 className="text-3xl font-bold mt-1 tracking-tight">432</h3>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="bg-primary/5 p-3 rounded-xl text-primary">
                                    <span className="material-symbols-outlined">book</span>
                                </div>
                                <span className="text-xs font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded-full">0%</span>
                            </div>
                            <div className="mt-4">
                                <p className="text-legal-gray text-xs font-bold uppercase tracking-wider">Active Books</p>
                                <h3 className="text-3xl font-bold mt-1 tracking-tight">12</h3>
                            </div>
                        </div>
                    </section>

                    {/* Charts Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-lg font-bold">Monthly Notarization Trends</h3>
                                    <p className="text-xs text-legal-gray">Data overview from Jan to Jun 2023</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-1 hover:bg-gray-50 rounded cursor-pointer"><span className="material-symbols-outlined text-gray-400">download</span></button>
                                    <button className="p-1 hover:bg-gray-50 rounded cursor-pointer"><span className="material-symbols-outlined text-gray-400">more_vert</span></button>
                                </div>
                            </div>
                            <div className="h-[240px] w-full relative">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                                    <defs>
                                        <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#ec1313" stopOpacity="0.2"></stop>
                                            <stop offset="100%" stopColor="#ec1313" stopOpacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,80 L40,70 L80,75 L120,40 L160,50 L200,30 L240,45 L280,20 L320,35 L360,25 L400,10" fill="none" stroke="#ec1313" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                    <path d="M0,80 L40,70 L80,75 L120,40 L160,50 L200,30 L240,45 L280,20 L320,35 L360,25 L400,10 V100 H0 Z" fill="url(#areaGradient)"></path>
                                </svg>
                                <div className="flex justify-between mt-4">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Jan</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Feb</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Mar</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Apr</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">May</span>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">Jun</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-lg font-bold">Document Types</h3>
                                    <p className="text-xs text-legal-gray">Distribution by volume</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>Power of Attorney</span>
                                        <span className="text-primary font-bold">45%</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary" style={{ width: '45%' }}></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>Affidavits</span>
                                        <span className="text-primary font-bold">30%</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary/70" style={{ width: '30%' }}></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>Real Estate Deeds</span>
                                        <span className="text-primary font-bold">20%</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary/40" style={{ width: '20%' }}></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm font-medium">
                                        <span>Certifications</span>
                                        <span className="text-primary font-bold">5%</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary/20" style={{ width: '5%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Recent Activity Table */}
                    <section className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-bold">Recent Activity</h3>
                                <p className="text-xs text-legal-gray">Overview of the last 10 entries</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-white border border-gray-200 text-legal-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-50 transition-all flex items-center gap-2 cursor-pointer">
                                    <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                                    PDF
                                </button>
                                <button className="bg-white border border-gray-200 text-legal-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-50 transition-all flex items-center gap-2 cursor-pointer">
                                    <span className="material-symbols-outlined text-sm">download</span>
                                    CSV
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50/50 text-[11px] uppercase text-legal-gray font-bold tracking-widest">
                                    <tr>
                                        <th className="px-6 py-4">Client Name</th>
                                        <th className="px-6 py-4">Document Type</th>
                                        <th className="px-6 py-4">Date & Time</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">MT</div>
                                                <div>
                                                    <p className="text-sm font-bold">Michael Thorne</p>
                                                    <p className="text-[10px] text-legal-gray">#NRT-2023-8842</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-sm font-medium">Power of Attorney</td>
                                        <td className="px-6 py-5 text-sm text-legal-gray">Oct 24, 2023 · 14:30</td>
                                        <td className="px-6 py-5">
                                            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-[10px] font-bold">
                                                <span className="size-1.5 rounded-full bg-green-600"></span>
                                                Completed
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <button className="material-symbols-outlined text-gray-400 hover:text-primary cursor-pointer">visibility</button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">SJ</div>
                                                <div>
                                                    <p className="text-sm font-bold">Sarah Jenkins</p>
                                                    <p className="text-[10px] text-legal-gray">#NRT-2023-8843</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-sm font-medium">Affidavit</td>
                                        <td className="px-6 py-5 text-sm text-legal-gray">Oct 24, 2023 · 11:15</td>
                                        <td className="px-6 py-5">
                                            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full text-[10px] font-bold">
                                                <span className="size-1.5 rounded-full bg-amber-600"></span>
                                                Pending
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <button className="material-symbols-outlined text-gray-400 hover:text-primary cursor-pointer">visibility</button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">RM</div>
                                                <div>
                                                    <p className="text-sm font-bold">Robert Miller</p>
                                                    <p className="text-[10px] text-legal-gray">#NRT-2023-8844</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-sm font-medium">Real Estate Deed</td>
                                        <td className="px-6 py-5 text-sm text-legal-gray">Oct 23, 2023 · 16:45</td>
                                        <td className="px-6 py-5">
                                            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-[10px] font-bold">
                                                <span className="size-1.5 rounded-full bg-blue-600"></span>
                                                Under Review
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <button className="material-symbols-outlined text-gray-400 hover:text-primary cursor-pointer">visibility</button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">AW</div>
                                                <div>
                                                    <p className="text-sm font-bold">Alice Wong</p>
                                                    <p className="text-[10px] text-legal-gray">#NRT-2023-8845</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-sm font-medium">Power of Attorney</td>
                                        <td className="px-6 py-5 text-sm text-legal-gray">Oct 23, 2023 · 09:20</td>
                                        <td className="px-6 py-5">
                                            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-[10px] font-bold">
                                                <span className="size-1.5 rounded-full bg-green-600"></span>
                                                Completed
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <button className="material-symbols-outlined text-gray-400 hover:text-primary cursor-pointer">visibility</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 border-t border-gray-100 text-center">
                            <button className="text-primary text-sm font-bold hover:underline cursor-pointer">View All Activities</button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
