import React, { useEffect, useState } from 'react';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
  Clock,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [pktTime, setPktTime] = useState('');

  // Live PKT clock (UTC+5)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const pkt = new Date(utc + 3600000 * 5);
      setPktTime(
        pkt.toLocaleTimeString('en-US', {
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (e: React.MouseEvent, text: string, key: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev));
    }, 2200);
  };

  const contactChannels = [
    {
      id: 'email',
      label: 'EMAIL',
      value: 'salmanalyy101@gmail.com',
      href: 'mailto:salmanalyy101@gmail.com',
      icon: Mail,
      actionHint: 'Open mail client',
      external: false,
      allowCopy: true,
      copyValue: 'salmanalyy101@gmail.com',
    },
    {
      id: 'phone',
      label: 'PHONE',
      value: '03330265927',
      href: 'tel:03330265927',
      icon: Phone,
      actionHint: 'Initiate call',
      external: false,
      allowCopy: true,
      copyValue: '03330265927',
    },
    {
      id: 'github',
      label: 'GITHUB',
      value: 'github.com/SalmanAly1',
      href: 'https://github.com/SalmanAly1',
      icon: Github,
      actionHint: 'View repositories',
      external: true,
      allowCopy: false,
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      value: 'linkedin.com/in/salman-aly1-b4588b315',
      href: 'https://www.linkedin.com/in/salman-aly1-b4588b315/',
      icon: Linkedin,
      actionHint: 'Connect professionally',
      external: true,
      allowCopy: false,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#111111] text-[#F2F0EA] py-20 sm:py-24 md:py-32 border-t border-[#242422] relative overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-12">
        {/* Header Meta: Availability & Location */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#242422] pb-6 mb-12 md:mb-16 font-mono-code text-xs">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#171717] border border-[#2e2e2a]">
            <span className="w-2 h-2 rounded-full bg-[#c7ff3d] animate-pulse inline-block" />
            <span className="text-[#F2F0EA] font-bold tracking-wider uppercase text-[11px]">
              OPEN TO REMOTE WORK
            </span>
          </div>

          {/* Time and Location Badge */}
          <div className="flex items-center gap-4 text-xs text-[#84847f]">
            <span className="hidden sm:flex items-center gap-1.5 text-[#F2F0EA]">
              <MapPin size={13} className="text-[#c7ff3d]" />
              <span>HYDERABAD, PAKISTAN</span>
            </span>
            <span className="hidden sm:inline text-[#3a3a38]">/</span>
            <div className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#c7ff3d]" />
              <span>PKT (UTC+5):</span>
              <span className="text-[#c7ff3d] font-bold">{pktTime || 'UTC+5'}</span>
            </div>
          </div>
        </div>

        {/* Editorial Layout: Large Statement (Left) + Contact Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Monumental Headline & Availability Statement */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold tracking-tight uppercase leading-[0.95] text-[#F2F0EA]">
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              <span className="text-[#c7ff3d]">GREAT.</span>
            </h2>

            <p className="font-editorial text-lg sm:text-xl text-[#b4b4ab] leading-relaxed max-w-xl pt-2">
              Available for remote opportunities, freelance projects, product design, frontend development, and digital experiences.
            </p>

            {/* Profile Info Stamp */}
            <div className="pt-6 border-t border-[#242422] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-code text-xs text-[#84847f]">
              <div>
                <span className="text-[10px] uppercase text-[#6f6f6a] block mb-0.5 tracking-wider">
                  NAME &amp; ROLE
                </span>
                <span className="text-[#F2F0EA] font-semibold block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[11px] text-[#84847f]">
                  {PERSONAL_INFO.role}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-[#6f6f6a] block mb-0.5 tracking-wider">
                  LOCATION &amp; BASE
                </span>
                <span className="text-[#F2F0EA] font-semibold block">
                  {PERSONAL_INFO.location}
                </span>
                <span className="text-[11px] text-[#84847f]">
                  Global Remote Friendly
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Contact Cards Grid */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="font-mono-code text-xs text-[#84847f] tracking-widest uppercase mb-2 flex items-center justify-between">
              <span>DIRECT CHANNELS</span>
              <span className="text-[#c7ff3d]">INTERACTIVE</span>
            </div>

            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              const isCopied = copiedKey === channel.id;

              return (
                <a
                  key={channel.id}
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  className="group relative block p-5 sm:p-6 bg-[#171717] border border-[#262626] hover:border-[#c7ff3d] hover:bg-[#1c1c1c] transition-all duration-200 hover:-translate-y-0.5 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Left: Icon & Contact Data */}
                    <div className="flex items-start gap-4 min-w-0">
                      <div className="w-11 h-11 bg-[#111111] border border-[#2e2e2a] group-hover:border-[#c7ff3d]/60 flex items-center justify-center text-[#c7ff3d] shrink-0 transition-colors">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono-code text-[10px] sm:text-[11px] text-[#84847f] group-hover:text-[#c7ff3d] uppercase tracking-wider font-bold transition-colors">
                            {channel.label}
                          </span>
                          <span className="font-mono-code text-[10px] text-[#555555]">
                            · {channel.actionHint}
                          </span>
                        </div>

                        <div className="font-editorial text-base sm:text-lg text-[#F2F0EA] font-semibold break-all group-hover:text-[#ffffff] transition-colors leading-snug">
                          {channel.value}
                        </div>
                      </div>
                    </div>

                    {/* Right: Actions (Copy + External Arrow) */}
                    <div className="flex items-center gap-2 shrink-0 pt-1">
                      {channel.allowCopy && channel.copyValue && (
                        <button
                          type="button"
                          onClick={(e) => handleCopy(e, channel.copyValue, channel.id)}
                          aria-label={`Copy ${channel.label}`}
                          title={`Copy ${channel.label}`}
                          className="p-2 bg-[#111111] border border-[#2e2e2a] hover:border-[#c7ff3d] text-[#84847f] hover:text-[#c7ff3d] transition-colors cursor-pointer relative"
                        >
                          {isCopied ? (
                            <Check size={14} className="text-[#c7ff3d]" />
                          ) : (
                            <Copy size={14} />
                          )}
                          {isCopied && (
                            <span className="absolute -top-7 right-0 bg-[#c7ff3d] text-[#111111] px-1.5 py-0.5 font-mono-code text-[9px] font-bold uppercase whitespace-nowrap shadow-xs">
                              COPIED!
                            </span>
                          )}
                        </button>
                      )}

                      <div className="w-8 h-8 flex items-center justify-center text-[#6f6f6a] group-hover:text-[#c7ff3d] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
