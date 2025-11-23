import React, { FC } from 'react';
import { Globe, X, Send, GitBranch, Download, BookOpen, Shield, Box, LayoutGrid } from 'lucide-react';

// Define structure for navigation links
interface NavLink {
    label: string;
    href: string;
    icon?: FC<any>;
}

// Data for the two link columns
const linksColumn1: NavLink[] = [
    { label: 'Features', href: '#features' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Whitepaper', href: '#whitepaper' },
    { label: 'Download', href: '#download' },
];

const linksColumn2: NavLink[] = [
    { label: 'Chrome Extension', href: '#extension' },
    { label: 'Windows App', href: '#windows' },
    { label: 'WAF', href: '#waf' },
    { label: 'Tg AI Agent', href: '#telegram' },
];

// Updated social links with specific color classes for the icon
const socialLinks = [
    { icon: Globe, href: '#website', label: 'Website', colorClass: 'text-cyan-500' },
    { icon: X, href: '#twitter', label: 'Twitter/X', colorClass: 'text-gray-900' }, 
    { icon: GitBranch, href: '#github', label: 'GitHub', colorClass: 'text-blue-600' },
    { icon: Send, href: '#telegram', label: 'Telegram', colorClass: 'text-sky-500' },
];

const FooterSection: FC = () => {
    return (
        // Adjusted vertical padding to match the image's minimal bottom space
        <footer className="bg-slate-950 border-t border-blue-900/50 pt-16 pb-8 relative overflow-hidden">
            
            {/* Background pattern matching the theme */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {/* Subtle, repeating dots/pattern matching the image */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        radial-gradient(circle at 10% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                        radial-gradient(circle at 90% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    
                    {/* Left Section: Logo, Management, Socials (Takes 6 of 12 columns) */}
                    <div className="md:col-span-6 lg:col-span-6">
                        {/* Managed by */}
                        <p className="text-sm text-blue-300 uppercase tracking-widest font-light mb-1">
                            Managed by
                        </p>
                        <h2 className="text-2xl font-extrabold text-white tracking-wider mb-8">
                            ESTORM INNOVATIONS
                        </h2>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    aria-label={link.label}
                                    // Set background to white, remove text color, add light border
                                    className="p-2 bg-white hover:bg-gray-100 rounded-full border border-gray-300 transition-colors duration-200 shadow-lg shadow-white/20 group"
                                >
                                    {/* Icon color uses the defined colorClass and retains the size */}
                                    <link.icon className={`w-5 h-5 ${link.colorClass} group-hover:opacity-80 transition-opacity`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Section: Links Columns (Takes 6 of 12 columns) */}
                    {/* Use flex/justify-end to push content to the far right on medium screens and up */}
                    <div className="md:col-span-6 lg:col-span-6 flex justify-start md:justify-end">
                        {/* This inner div groups the two columns and controls their layout */}
                        <div className="grid grid-cols-2 gap-8">
                            
                            {/* Column 1: LINKS */}
                            <div>
                                {/* Removed border-b border-blue-700/50 pb-1 */}
                                <h3 className="text-md font-semibold text-white uppercase tracking-wider mb-6">
                                    Links
                                </h3>
                                <ul className="space-y-3">
                                    {linksColumn1.map((link, index) => (
                                        <li key={index}>
                                            <a 
                                                href={link.href} 
                                                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 2: DOWNLOADS */}
                            <div>
                                {/* Removed border-b border-blue-700/50 pb-1 */}
                                <h3 className="text-md font-semibold text-white uppercase tracking-wider mb-6">
                                    Downloads
                                </h3>
                                <ul className="space-y-3">
                                    {linksColumn2.map((link, index) => (
                                        <li key={index}>
                                            <a 
                                                href={link.href} 
                                                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section (Full Width) */}
                <div className="">
                    <p className="text-sm text-gray-400">
                        ©{new Date().getFullYear()} ZK Guard AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;