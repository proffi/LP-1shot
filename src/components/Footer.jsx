import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <>
            {/* Membership Section */}
            <section id="membership" className="w-full bg-nura-cream py-32 px-8 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-nura-charcoal tracking-tight mb-4">
                            Select Your Protocol
                        </h2>
                        <p className="font-outfit text-xl text-nura-charcoal/70">
                            Clinical precision tailored to your biological data.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {/* Base Tier */}
                        <div className="bg-white rounded-[2rem] p-8 border border-nura-charcoal/5 flex flex-col items-center text-center">
                            <h3 className="font-outfit font-medium text-xl text-nura-charcoal mb-2">Baseline</h3>
                            <p className="font-jakarta text-4xl font-bold text-nura-charcoal mb-8">$299<span className="text-sm font-normal text-nura-charcoal/50">/mo</span></p>
                            <ul className="flex flex-col gap-4 text-sm font-jakarta text-nura-charcoal/80 mb-10 w-full">
                                <li className="border-b border-nura-charcoal/5 pb-2">Quarterly Blood Panel</li>
                                <li className="border-b border-nura-charcoal/5 pb-2">Basic Biomarker Dashboard</li>
                                <li className="border-b border-nura-charcoal/5 pb-2">Standard Optimization</li>
                            </ul>
                            <button className="w-full py-4 rounded-full border border-nura-charcoal/10 font-jakarta text-sm hover:bg-nura-charcoal/5 transition-colors">
                                Apply Now
                            </button>
                        </div>

                        {/* Performance Tier (Moss background, Clay button) */}
                        <div className="bg-nura-moss rounded-[2rem] p-10 shadow-2xl scale-105 flex flex-col items-center text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-nura-clay/20 blur-3xl rounded-full" />
                            <div className="absolute font-mono text-xs uppercase tracking-widest text-nura-clay bg-nura-clay/10 px-3 py-1 rounded-full top-6">
                                Recommended
                            </div>
                            <h3 className="font-outfit font-medium text-xl text-nura-cream mb-2 mt-8">Performance</h3>
                            <p className="font-jakarta text-5xl font-bold text-nura-cream mb-8">$899<span className="text-sm font-normal text-nura-cream/50">/mo</span></p>
                            <ul className="flex flex-col gap-4 text-sm font-jakarta text-nura-cream/80 mb-10 w-full relative z-10">
                                <li className="border-b border-white/10 pb-2">Monthly Epigenetic Testing</li>
                                <li className="border-b border-white/10 pb-2">Live Telemetry & Dashboard</li>
                                <li className="border-b border-white/10 pb-2">Adaptive Biological Regimen</li>
                                <li className="border-b border-white/10 pb-2">Direct Physician Access</li>
                            </ul>
                            {/* Magnetic, slide bg button effect would be handled with custom CSS or simple hover state here */}
                            <button className="group relative w-full overflow-hidden rounded-full py-4 bg-nura-cream text-nura-charcoal font-jakarta text-sm font-semibold transition-transform hover:scale-105">
                                <div className="absolute inset-0 w-full h-full bg-nura-clay transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
                                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
                                    Join Protocol <ArrowRight size={16} />
                                </span>
                            </button>
                        </div>

                        {/* Apex Tier */}
                        <div className="bg-white rounded-[2rem] p-8 border border-nura-charcoal/5 flex flex-col items-center text-center">
                            <h3 className="font-outfit font-medium text-xl text-nura-charcoal mb-2">Apex</h3>
                            <p className="font-jakarta text-4xl font-bold text-nura-charcoal mb-8">Custom</p>
                            <ul className="flex flex-col gap-4 text-sm font-jakarta text-nura-charcoal/80 mb-10 w-full">
                                <li className="border-b border-nura-charcoal/5 pb-2">Full Genome Sequencing</li>
                                <li className="border-b border-nura-charcoal/5 pb-2">Dedicated Clinical Team</li>
                                <li className="border-b border-nura-charcoal/5 pb-2">On-Demand Biomarker Labs</li>
                            </ul>
                            <button className="w-full py-4 rounded-full border border-nura-charcoal/10 font-jakarta text-sm hover:bg-nura-charcoal/5 transition-colors">
                                Inquire
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Actual Footer */}
            <footer className="w-full bg-nura-charcoal rounded-t-[4rem] text-nura-cream px-8 py-16 md:px-16 pb-8 border-t border-nura-moss/20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

                    <div className="max-w-xs">
                        <h2 className="font-outfit text-2xl font-semibold mb-6">Nura Health</h2>
                        <p className="font-jakarta text-sm text-nura-cream/60 leading-relaxed mb-8">
                            A clinical boutique approach to biological optimization. Nature is the algorithm.
                        </p>
                        {/* System Status */}
                        <div className="inline-flex items-center gap-3 bg-[#2E4036]/20 border border-nura-moss/30 px-4 py-2 rounded-full">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="font-mono text-xs text-nura-cream uppercase tracking-widest opacity-80">
                                System Operational
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 font-jakarta text-sm">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-nura-clay mb-2">Platform</h4>
                            <a href="#" className="text-nura-cream/60 hover:text-nura-cream transition-colors">Intelligence</a>
                            <a href="#" className="text-nura-cream/60 hover:text-nura-cream transition-colors">Philosophy</a>
                            <a href="#" className="text-nura-cream/60 hover:text-nura-cream transition-colors">Protocol</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-nura-clay mb-2">Company</h4>
                            <a href="#" className="text-nura-cream/60 hover:text-nura-cream transition-colors">Manifesto</a>
                            <a href="#" className="text-nura-cream/60 hover:text-nura-cream transition-colors">Clinical Team</a>
                            <a href="#" className="text-nura-cream/60 hover:text-nura-cream transition-colors">Careers</a>
                        </div>
                        <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-nura-clay mb-2">Legal</h4>
                            <a href="#" className="text-nura-cream/60 hover:text-nura-cream transition-colors">Privacy Policy</a>
                            <a href="#" className="text-nura-cream/60 hover:text-nura-cream transition-colors">Terms of Service</a>
                            <a href="#" className="text-nura-cream/60 hover:text-nura-cream transition-colors">HIPAA Compliance</a>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-nura-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-jakarta text-nura-cream/40">
                    <p>© {new Date().getFullYear()} Nura Health Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-nura-cream transition-colors">Twitter</a>
                        <a href="#" className="hover:text-nura-cream transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-nura-cream transition-colors">Instagram</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
