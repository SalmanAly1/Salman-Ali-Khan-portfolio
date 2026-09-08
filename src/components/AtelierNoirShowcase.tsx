import { useState } from 'react';
import {
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  ChevronRight,
  Filter,
  Lock,
  ArrowRight,
  Sparkles,
  CreditCard,
  Plus,
  Minus,
  Trash2,
} from 'lucide-react';

interface AtelierNoirShowcaseProps {
  pageId: string;
  viewMode: 'desktop' | 'mobile';
}

export default function AtelierNoirShowcase({ pageId, viewMode }: AtelierNoirShowcaseProps) {
  const [selectedSize, setSelectedSize] = useState<string>('48');
  const [cartQuantities, setCartQuantities] = useState<{ [key: string]: number }>({
    trench: 1,
    cardigan: 1,
  });

  const updateQuantity = (item: string, delta: number) => {
    setCartQuantities((prev) => ({
      ...prev,
      [item]: Math.max(1, (prev[item] || 1) + delta),
    }));
  };

  const trenchPrice = 890;
  const cardiganPrice = 420;
  const subtotal =
    (cartQuantities.trench || 1) * trenchPrice +
    (cartQuantities.cardigan || 1) * cardiganPrice;

  // --------------------------------------------------------------------------
  // STAGE A: HOME PAGE
  // --------------------------------------------------------------------------
  if (pageId === 'an-p1') {
    return (
      <div className="bg-[#0f0f10] text-white">
        {/* Luxury Brand Nav Header */}
        <div className="border-b border-[#262629] px-6 py-4 flex items-center justify-between font-mono-code text-xs">
          <div className="flex items-center gap-6">
            <span className="font-editorial text-lg tracking-[0.25em] font-bold text-white uppercase">
              ATELIER NOIR
            </span>
            <div className="hidden md:flex items-center gap-5 text-[11px] text-[#8e8e93] tracking-widest uppercase">
              <span className="text-white">COLLECTIONS</span>
              <span className="hover:text-white transition-colors cursor-pointer">ARCHIVE</span>
              <span className="hover:text-white transition-colors cursor-pointer">THE ATELIER</span>
              <span className="hover:text-white transition-colors cursor-pointer">EDITORIAL</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px] tracking-wider text-[#a0a0a5]">
            <span className="hidden sm:inline">PARIS / MILAN</span>
            <span className="bg-[#1f1f23] px-2.5 py-1 text-white border border-[#333338] flex items-center gap-1.5">
              <ShoppingBag size={11} className="text-[#c7ff3d]" />
              <span>BAG (2)</span>
            </span>
          </div>
        </div>

        {/* Hero Editorial Campaign Banner */}
        <div className="relative h-[380px] sm:h-[480px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85"
            alt="Atelier Noir Autumn Winter Campaign"
            className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10] via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-12">
            <div className="font-mono-code text-[11px] tracking-[0.3em] uppercase text-[#c7ff3d] mb-2">
              AUTUMN / WINTER 2026 // CAPSULE COLLECTION
            </div>
            <h3 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white max-w-2xl leading-none">
              ARCHITECTURAL VOLUMES &amp; VIRGIN FIBERS
            </h3>
            <p className="font-mono-code text-xs sm:text-sm text-[#b5b5be] max-w-xl mt-3 font-light leading-relaxed">
              Bespoke Italian virgin wool, double-faced cashmere, and brutalist tailoring engineered in Biella, Italy.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <span className="px-5 py-2.5 bg-white text-[#0f0f10] font-mono-code text-xs font-bold tracking-wider uppercase hover:bg-[#c7ff3d] transition-colors cursor-pointer">
                EXPLORE RUNWAY LOOKBOOK
              </span>
              <span className="px-5 py-2.5 bg-transparent border border-white/40 text-white font-mono-code text-xs tracking-wider uppercase hover:border-white transition-colors cursor-pointer">
                VIEW CAPSULE CATALOG
              </span>
            </div>
          </div>
        </div>

        {/* Campaign Ticker Ribbon */}
        <div className="bg-[#17171a] border-y border-[#262629] py-3 px-6 overflow-hidden font-mono-code text-[11px] text-[#8e8e93] flex justify-between items-center tracking-widest uppercase">
          <span>PARIS SHOWROOM // 14 RUE DU FAUBOURG</span>
          <span className="hidden sm:inline">COMPLIMENTARY WORLDWIDE DHL EXPRESS</span>
          <span>HAND-NUMBERED LIMITED RUNS</span>
        </div>

        {/* Featured 3-Look Capsule Row */}
        <div className="p-6 sm:p-10 bg-[#0f0f10]">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#262629] font-mono-code text-xs">
            <span className="text-white font-bold tracking-wider uppercase">
              FEATURED CAPSULE LOOKS
            </span>
            <span className="text-[#8e8e93]">3 OF 24 ARCHIVE PIECES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="group border border-[#262629] bg-[#141416] p-3 space-y-3">
              <div className="h-60 sm:h-72 overflow-hidden bg-[#1f1f23]">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=85"
                  alt="Look 01"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="font-mono-code text-xs">
                <div className="text-[#8e8e93] text-[10px]">LOOK 01 // OVERCOAT</div>
                <div className="font-editorial text-sm font-bold text-white uppercase mt-0.5">
                  Virgin Wool Storm Coat
                </div>
                <div className="text-[#c7ff3d] mt-1">€890.00 EUR</div>
              </div>
            </div>

            <div className="group border border-[#262629] bg-[#141416] p-3 space-y-3">
              <div className="h-60 sm:h-72 overflow-hidden bg-[#1f1f23]">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=85"
                  alt="Look 02"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="font-mono-code text-xs">
                <div className="text-[#8e8e93] text-[10px]">LOOK 02 // TAILORING</div>
                <div className="font-editorial text-sm font-bold text-white uppercase mt-0.5">
                  Raw Edge Wool Trouser
                </div>
                <div className="text-[#c7ff3d] mt-1">€380.00 EUR</div>
              </div>
            </div>

            <div className="group border border-[#262629] bg-[#141416] p-3 space-y-3">
              <div className="h-60 sm:h-72 overflow-hidden bg-[#1f1f23]">
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=85"
                  alt="Look 03"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="font-mono-code text-xs">
                <div className="text-[#8e8e93] text-[10px]">LOOK 03 // RUNWAY</div>
                <div className="font-editorial text-sm font-bold text-white uppercase mt-0.5">
                  Mulberry Silk Blazer
                </div>
                <div className="text-[#c7ff3d] mt-1">€640.00 EUR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // STAGE B: SHOP ARCHIVE
  // --------------------------------------------------------------------------
  if (pageId === 'an-p2') {
    const products = [
      {
        id: 'p1',
        name: 'Virgin Wool Belted Trench',
        category: 'Outerwear',
        price: '€890.00',
        badge: 'NEW IN',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=85',
        colors: ['#1c1c1f', '#d5d2cb', '#3c3a35'],
      },
      {
        id: 'p2',
        name: 'Sculpted Silk Blazer',
        category: 'Tailoring',
        price: '€640.00',
        badge: 'SIGNATURE',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=85',
        colors: ['#111112', '#7a7672'],
      },
      {
        id: 'p3',
        name: 'Pleated Cashmere Cardigan',
        category: 'Knitwear',
        price: '€420.00',
        badge: 'LIMITED',
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=85',
        colors: ['#e4e1d8', '#252629'],
      },
      {
        id: 'p4',
        name: 'Raw Edge Wool Trouser',
        category: 'Tailoring',
        price: '€380.00',
        badge: 'CORE',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=85',
        colors: ['#1a191a', '#4a443e'],
      },
      {
        id: 'p5',
        name: 'Minimalist Leather Trench',
        category: 'Outerwear',
        price: '€1,250.00',
        badge: 'EXCLUSIVE',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=85',
        colors: ['#0d0d0e'],
      },
      {
        id: 'p6',
        name: 'Calfskin Minimalist Tote',
        category: 'Leather Goods',
        price: '€520.00',
        badge: 'RESTOCKED',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=85',
        colors: ['#1c1c1f', '#8f5c38'],
      },
    ];

    return (
      <div className="bg-[#ffffff] text-[#111111]">
        {/* Archive Filter Header */}
        <div className="border-b border-[#e5e5e0] px-6 py-5 bg-[#faf9f6]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono-code text-[11px] uppercase tracking-widest text-[#7a7a75]">
                COLLECTIONS / ALL GARMENTS
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111111] mt-0.5">
                READY-TO-WEAR ARCHIVE
              </h3>
            </div>
            <div className="flex items-center gap-3 font-mono-code text-xs">
              <span className="text-[#7a7a75]">SHOWING 6 OF 24 PIECES</span>
              <span className="px-3 py-1.5 border border-[#111111] bg-white text-[#111111] flex items-center gap-1.5 cursor-pointer">
                <Filter size={12} />
                <span>FILTER &amp; SORT</span>
              </span>
            </div>
          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 font-mono-code text-xs">
            <span className="px-3 py-1 bg-[#111111] text-white font-semibold">ALL PIECES</span>
            <span className="px-3 py-1 bg-white border border-[#d8d5cc] text-[#666660] hover:border-[#111111] cursor-pointer">OUTERWEAR</span>
            <span className="px-3 py-1 bg-white border border-[#d8d5cc] text-[#666660] hover:border-[#111111] cursor-pointer">TAILORING</span>
            <span className="px-3 py-1 bg-white border border-[#d8d5cc] text-[#666660] hover:border-[#111111] cursor-pointer">KNITWEAR</span>
            <span className="px-3 py-1 bg-white border border-[#d8d5cc] text-[#666660] hover:border-[#111111] cursor-pointer">LEATHER GOODS</span>
          </div>
        </div>

        {/* 6-Item Product Grid */}
        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((item) => (
              <div key={item.id} className="group border border-[#e5e5e0] bg-[#ffffff] p-3 space-y-3 hover:border-[#111111] transition-all">
                <div className="relative h-72 sm:h-80 overflow-hidden bg-[#f3f2ee]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#111111] text-white font-mono-code text-[9px] px-2 py-0.5 tracking-wider uppercase">
                    {item.badge}
                  </span>
                  <span className="absolute top-3 right-3 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={13} />
                  </span>
                </div>

                <div className="pt-1 font-mono-code">
                  <div className="flex items-center justify-between text-[11px] text-[#7a7a75]">
                    <span>{item.category}</span>
                    <div className="flex items-center gap-1">
                      {item.colors.map((c, i) => (
                        <span key={i} className="w-2.5 h-2.5 rounded-full border border-black/20" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  </div>
                  <h4 className="font-editorial text-base font-bold text-[#111111] uppercase tracking-tight mt-1">
                    {item.name}
                  </h4>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#f0eee8] text-xs">
                    <span className="font-bold text-[#111111]">{item.price}</span>
                    <span className="text-[10px] text-[#7a7a75] uppercase group-hover:text-[#111111] transition-colors">
                      EU 46–54 AVAILABLE
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // STAGE C: SINGLE PRODUCT
  // --------------------------------------------------------------------------
  if (pageId === 'an-p3') {
    return (
      <div className="bg-[#ffffff] text-[#111111]">
        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Prominent Dual Product Gallery */}
            <div className="lg:col-span-7 space-y-4">
              <div className="border border-[#d8d5cc] overflow-hidden bg-[#f4f3ef] h-[400px] sm:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
                  alt="Virgin Wool Belted Trench Coat Full Shot"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-[#d8d5cc] overflow-hidden bg-[#f4f3ef] h-48 sm:h-56">
                  <img
                    src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=85"
                    alt="Virgin Wool Fabric Texture Detail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="border border-[#d8d5cc] overflow-hidden bg-[#f4f3ef] h-48 sm:h-56">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85"
                    alt="Collar and Storm Flap Detail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: High-End E-Commerce Product Configuration Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-mono-code text-[11px] text-[#7a7a75] uppercase tracking-widest block">
                  HOME / OUTERWEAR / TRENCH COATS
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#111111] mt-1">
                  VIRGIN WOOL BELTED TRENCH COAT
                </h3>
                <div className="flex items-center gap-3 mt-2 font-mono-code text-xs">
                  <span className="font-bold text-lg text-[#111111]">€890.00 EUR</span>
                  <span className="text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 font-medium">IN STOCK · BATCH 04</span>
                </div>
              </div>

              {/* Color Swatch Selector */}
              <div className="border-t border-[#e5e5e0] pt-4 font-mono-code text-xs">
                <div className="flex justify-between mb-2">
                  <span className="text-[#7a7a75]">COLOR:</span>
                  <span className="text-[#111111] font-bold">CHARCOAL NOIR</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#1c1c1f] ring-2 ring-offset-2 ring-[#111111] cursor-pointer" />
                  <span className="w-6 h-6 rounded-full bg-[#e3e0d8] border border-[#d8d5cc] cursor-pointer" />
                  <span className="w-6 h-6 rounded-full bg-[#393732] border border-[#d8d5cc] cursor-pointer" />
                </div>
              </div>

              {/* Size Selector */}
              <div className="border-t border-[#e5e5e0] pt-4 font-mono-code text-xs">
                <div className="flex justify-between mb-2">
                  <span className="text-[#7a7a75]">SELECT SIZE:</span>
                  <span className="underline text-[#111111] cursor-pointer">SIZE ADVISOR GUIDE</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {['46', '48', '50', '52'].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 text-center border font-mono-code text-xs transition-all cursor-pointer ${
                        selectedSize === sz
                          ? 'bg-[#111111] text-white border-[#111111] font-bold'
                          : 'bg-white text-[#111111] border-[#d8d5cc] hover:border-[#111111]'
                      }`}
                    >
                      EU {sz}
                    </button>
                  ))}
                </div>
                <div className="text-[10px] text-[#7a7a75] mt-1.5">
                  Model is 188cm / 74kg wearing size EU 48
                </div>
              </div>

              {/* Add to Bag CTA */}
              <div className="space-y-2 pt-2">
                <button className="w-full py-3.5 bg-[#111111] hover:bg-[#c7ff3d] hover:text-[#111111] text-white font-mono-code text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer flex items-center justify-center gap-2">
                  <ShoppingBag size={14} />
                  <span>ADD TO BAG — €890.00</span>
                </button>
                <div className="flex items-center justify-center gap-6 font-mono-code text-[11px] text-[#7a7a75] pt-1">
                  <span className="flex items-center gap-1">
                    <Truck size={12} />
                    <span>Free Global DHL Express</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <RotateCcw size={12} />
                    <span>30-Day Doorstep Returns</span>
                  </span>
                </div>
              </div>

              {/* Technical Specifications Accordion Box */}
              <div className="border border-[#e5e5e0] bg-[#faf9f6] p-4 space-y-3 font-mono-code text-xs">
                <div>
                  <span className="font-bold text-[#111111] block mb-1">GARMENT ARCHITECTURE &amp; SPECS</span>
                  <p className="text-[11px] text-[#555758] leading-relaxed">
                    100% Virgin Italian Wool (380gsm) woven in Biella. Horn button fastenings, throat latch, storm flap, and removable buckled waist tie. Fully lined in cupro twill.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#e5e5e0] flex items-center justify-between text-[11px] text-[#7a7a75]">
                  <span>CARE: DRY CLEAN ONLY</span>
                  <span>ORIGIN: MADE IN ITALY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // STAGE D: CART
  // --------------------------------------------------------------------------
  if (pageId === 'an-p4') {
    return (
      <div className="bg-[#ffffff] text-[#111111]">
        <div className="p-6 sm:p-10">
          <div className="border-b border-[#e5e5e0] pb-4 mb-6">
            <span className="font-mono-code text-[11px] text-[#7a7a75] uppercase tracking-widest block">
              YOUR RESERVED SELECTION
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111111] mt-0.5">
              SHOPPING BAG (2 ITEMS)
            </h3>
          </div>

          {/* Complimentary Shipping Progress Banner */}
          <div className="mb-6 p-4 bg-[#f4f7ed] border border-[#d2e8b0] font-mono-code text-xs space-y-2">
            <div className="flex items-center justify-between text-[#2d6614] font-bold">
              <span className="flex items-center gap-1.5">
                <Check size={14} />
                <span>COMPLIMENTARY DHL EXPRESS DELIVERY UNLOCKED</span>
              </span>
              <span>100%</span>
            </div>
            <div className="w-full bg-[#dbe8c8] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#10b981] h-full w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Cart Items Table */}
            <div className="lg:col-span-8 space-y-4">
              {/* Line Item 1 */}
              <div className="border border-[#e5e5e0] p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-[#faf9f6]">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-24 overflow-hidden bg-[#e5e5e0] shrink-0 border border-[#d8d5cc]">
                    <img
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=300&q=85"
                      alt="Virgin Wool Trench"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-mono-code">
                    <h4 className="font-editorial text-base font-bold text-[#111111] uppercase">
                      Virgin Wool Belted Trench Coat
                    </h4>
                    <div className="text-[11px] text-[#7a7a75] mt-0.5">
                      Size: EU 48 · Color: Charcoal Noir · SKU: AN-0492
                    </div>
                    <div className="text-xs font-bold text-[#111111] mt-2 sm:hidden">
                      €{(cartQuantities.trench || 1) * 890}.00 EUR
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#d8d5cc] bg-white font-mono-code text-xs">
                    <button
                      onClick={() => updateQuantity('trench', -1)}
                      className="px-2.5 py-1 hover:bg-[#f0eee8] cursor-pointer"
                    >
                      <Minus size={11} />
                    </button>
                    <span className="px-3 py-1 font-bold">{cartQuantities.trench || 1}</span>
                    <button
                      onClick={() => updateQuantity('trench', 1)}
                      className="px-2.5 py-1 hover:bg-[#f0eee8] cursor-pointer"
                    >
                      <Plus size={11} />
                    </button>
                  </div>
                  <span className="font-mono-code text-xs font-bold text-[#111111] hidden sm:inline">
                    €{(cartQuantities.trench || 1) * 890}.00
                  </span>
                </div>
              </div>

              {/* Line Item 2 */}
              <div className="border border-[#e5e5e0] p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-[#faf9f6]">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-24 overflow-hidden bg-[#e5e5e0] shrink-0 border border-[#d8d5cc]">
                    <img
                      src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=300&q=85"
                      alt="Pleated Cashmere Cardigan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-mono-code">
                    <h4 className="font-editorial text-base font-bold text-[#111111] uppercase">
                      Pleated Cashmere Cardigan
                    </h4>
                    <div className="text-[11px] text-[#7a7a75] mt-0.5">
                      Size: M · Color: Ivory · SKU: AN-0182
                    </div>
                    <div className="text-xs font-bold text-[#111111] mt-2 sm:hidden">
                      €{(cartQuantities.cardigan || 1) * 420}.00 EUR
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#d8d5cc] bg-white font-mono-code text-xs">
                    <button
                      onClick={() => updateQuantity('cardigan', -1)}
                      className="px-2.5 py-1 hover:bg-[#f0eee8] cursor-pointer"
                    >
                      <Minus size={11} />
                    </button>
                    <span className="px-3 py-1 font-bold">{cartQuantities.cardigan || 1}</span>
                    <button
                      onClick={() => updateQuantity('cardigan', 1)}
                      className="px-2.5 py-1 hover:bg-[#f0eee8] cursor-pointer"
                    >
                      <Plus size={11} />
                    </button>
                  </div>
                  <span className="font-mono-code text-xs font-bold text-[#111111] hidden sm:inline">
                    €{(cartQuantities.cardigan || 1) * 420}.00
                  </span>
                </div>
              </div>

              {/* Promo Code Input Bar */}
              <div className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="VIP INVITATION CODE"
                  defaultValue="PARIS-RUNWAY-26"
                  className="px-4 py-2 border border-[#d8d5cc] bg-[#faf9f6] font-mono-code text-xs uppercase flex-1"
                />
                <button className="px-4 py-2 bg-[#111111] text-white font-mono-code text-xs uppercase font-bold cursor-pointer">
                  APPLY
                </button>
              </div>
            </div>

            {/* Right Column: Order Subtotal Summary */}
            <div className="lg:col-span-4">
              <div className="border border-[#111111] bg-[#faf9f6] p-6 space-y-4 font-mono-code text-xs">
                <h4 className="font-mono-code text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#d8d5cc] pb-3">
                  ORDER SUMMARY
                </h4>

                <div className="space-y-2">
                  <div className="flex justify-between text-[#666660]">
                    <span>ITEMS SUBTOTAL:</span>
                    <span className="text-[#111111] font-semibold">€{subtotal}.00</span>
                  </div>
                  <div className="flex justify-between text-[#666660]">
                    <span>DHL EXPRESS DELIVERY:</span>
                    <span className="text-[#10b981] font-bold">FREE (€0)</span>
                  </div>
                  <div className="flex justify-between text-[#666660]">
                    <span>ESTIMATED VAT (20%):</span>
                    <span className="text-[#111111]">INCLUDED</span>
                  </div>
                  <div className="pt-3 border-t border-[#d8d5cc] flex justify-between text-sm font-bold text-[#111111]">
                    <span>ESTIMATED TOTAL:</span>
                    <span className="text-[#111111]">€{subtotal}.00 EUR</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-[#111111] hover:bg-[#c7ff3d] hover:text-[#111111] text-white font-mono-code text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer flex items-center justify-center gap-2 mt-4">
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight size={13} />
                </button>

                <div className="pt-3 border-t border-[#e5e5e0] space-y-1.5 text-[10px] text-[#7a7a75]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={11} className="text-[#111111]" />
                    <span>256-Bit Encrypted WooCommerce Checkout</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Truck size={11} className="text-[#111111]" />
                    <span>Signature Required on Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // STAGE E: CHECKOUT
  // --------------------------------------------------------------------------
  return (
    <div className="bg-[#faf9f6] text-[#111111]">
      <div className="p-6 sm:p-10">
        <div className="border-b border-[#e5e5e0] pb-4 mb-6">
          <span className="font-mono-code text-[11px] text-[#7a7a75] uppercase tracking-widest block">
            FINAL STEP // ENCRYPTED GATEWAY
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111111] mt-0.5">
            EXPRESS CHECKOUT &amp; PAYMENT
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Checkout Inputs Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1-Click Fast Gateways */}
            <div className="p-4 bg-white border border-[#d8d5cc] space-y-2.5">
              <span className="font-mono-code text-[10px] uppercase tracking-wider text-[#7a7a75] block text-center">
                EXPRESS WALLET CHECKOUT
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button className="py-2.5 bg-[#000000] text-white font-mono-code text-xs font-bold rounded-xs cursor-pointer text-center">
                  Pay
                </button>
                <button className="py-2.5 bg-[#ffffff] border border-[#d8d5cc] text-[#111111] font-mono-code text-xs font-bold rounded-xs cursor-pointer text-center">
                  GPay
                </button>
                <button className="py-2.5 bg-[#5a31f4] text-white font-mono-code text-xs font-bold rounded-xs cursor-pointer text-center">
                  ShopPay
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 font-mono-code text-[11px] text-[#7a7a75]">
              <div className="flex-1 h-px bg-[#d8d5cc]" />
              <span>OR ENTER SHIPPING DETAILS</span>
              <div className="flex-1 h-px bg-[#d8d5cc]" />
            </div>

            {/* Contact Information */}
            <div className="p-5 bg-white border border-[#d8d5cc] space-y-3 font-mono-code text-xs">
              <div className="flex items-center justify-between border-b border-[#f0eee8] pb-2">
                <span className="font-bold text-[#111111]">1. CONTACT INFO</span>
                <span className="text-[10px] text-[#7a7a75]">LOGGED IN AS CLIENT</span>
              </div>
              <input
                type="email"
                defaultValue="clara.vanderbilt@couture-collector.com"
                className="w-full p-2.5 bg-[#faf9f6] border border-[#d8d5cc] text-xs font-mono-code"
                placeholder="Email Address"
              />
            </div>

            {/* Shipping Address */}
            <div className="p-5 bg-white border border-[#d8d5cc] space-y-3 font-mono-code text-xs">
              <div className="flex items-center justify-between border-b border-[#f0eee8] pb-2">
                <span className="font-bold text-[#111111]">2. DELIVERY DESTINATION</span>
                <span className="text-[10px] text-[#10b981]">DHL WORLDWIDE COURIER</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  defaultValue="Clara"
                  className="p-2.5 bg-[#faf9f6] border border-[#d8d5cc] text-xs font-mono-code"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  defaultValue="Vanderbilt"
                  className="p-2.5 bg-[#faf9f6] border border-[#d8d5cc] text-xs font-mono-code"
                  placeholder="Last Name"
                />
              </div>
              <input
                type="text"
                defaultValue="45 Avenue Montaigne, Suite 4B"
                className="w-full p-2.5 bg-[#faf9f6] border border-[#d8d5cc] text-xs font-mono-code"
                placeholder="Street Address"
              />
              <div className="grid grid-cols-3 gap-3">
                <input
                  type="text"
                  defaultValue="Paris"
                  className="p-2.5 bg-[#faf9f6] border border-[#d8d5cc] text-xs font-mono-code"
                  placeholder="City"
                />
                <input
                  type="text"
                  defaultValue="75008"
                  className="p-2.5 bg-[#faf9f6] border border-[#d8d5cc] text-xs font-mono-code"
                  placeholder="Postal Code"
                />
                <input
                  type="text"
                  defaultValue="France"
                  className="p-2.5 bg-[#faf9f6] border border-[#d8d5cc] text-xs font-mono-code"
                  placeholder="Country"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="p-5 bg-white border border-[#d8d5cc] space-y-3 font-mono-code text-xs">
              <div className="flex items-center justify-between border-b border-[#f0eee8] pb-2">
                <span className="font-bold text-[#111111] flex items-center gap-1.5">
                  <CreditCard size={13} />
                  <span>3. PAYMENT METHOD (ENCRYPTED STRIPE GATEWAY)</span>
                </span>
                <Lock size={12} className="text-[#10b981]" />
              </div>
              <div className="p-3 bg-[#faf9f6] border border-[#111111] space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold">CARD NUMBER</span>
                  <span className="text-[#7a7a75]">VISA / MASTERCARD / AMEX</span>
                </div>
                <input
                  type="text"
                  defaultValue="•••• •••• •••• 8842"
                  className="w-full p-2 bg-white border border-[#d8d5cc] text-xs font-mono-code font-bold tracking-widest"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    defaultValue="09/28"
                    className="p-2 bg-white border border-[#d8d5cc] text-xs font-mono-code"
                  />
                  <input
                    type="text"
                    defaultValue="•••"
                    className="p-2 bg-white border border-[#d8d5cc] text-xs font-mono-code"
                  />
                </div>
              </div>

              <button className="w-full py-4 bg-[#111111] hover:bg-[#c7ff3d] hover:text-[#111111] text-white font-mono-code text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer flex items-center justify-center gap-2">
                <Lock size={13} />
                <span>CONFIRM ORDER &amp; PAY €1,310.00 EUR</span>
              </button>
            </div>
          </div>

          {/* Right Column: Mini Order Summary Drawer */}
          <div className="lg:col-span-5">
            <div className="border border-[#d8d5cc] bg-white p-6 space-y-4 font-mono-code text-xs">
              <div className="flex items-center justify-between border-b border-[#e5e5e0] pb-3">
                <span className="font-bold text-[#111111]">REVIEW ITEMS</span>
                <span className="text-[#7a7a75]">2 GARMENTS</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-14 bg-[#f0eee8] border border-[#d8d5cc] overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=150&q=85"
                      alt="Trench mini"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-[11px]">
                    <div className="font-bold text-[#111111] truncate">Virgin Wool Belted Trench</div>
                    <div className="text-[#7a7a75]">Size EU 48 · Qty 1</div>
                  </div>
                  <div className="font-bold text-[#111111]">€890.00</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-14 bg-[#f0eee8] border border-[#d8d5cc] overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=150&q=85"
                      alt="Cardigan mini"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-[11px]">
                    <div className="font-bold text-[#111111] truncate">Pleated Cashmere Cardigan</div>
                    <div className="text-[#7a7a75]">Size M · Qty 1</div>
                  </div>
                  <div className="font-bold text-[#111111]">€420.00</div>
                </div>
              </div>

              <div className="border-t border-[#e5e5e0] pt-3 space-y-2">
                <div className="flex justify-between text-[#7a7a75]">
                  <span>Subtotal</span>
                  <span className="text-[#111111]">€1,310.00</span>
                </div>
                <div className="flex justify-between text-[#7a7a75]">
                  <span>DHL Express Courier</span>
                  <span className="text-[#10b981] font-bold">Complimentary</span>
                </div>
                <div className="flex justify-between text-[#7a7a75]">
                  <span>Taxes (Included)</span>
                  <span className="text-[#111111]">€218.33</span>
                </div>
                <div className="pt-2 border-t border-[#111111] flex justify-between font-bold text-sm text-[#111111]">
                  <span>Total Amount</span>
                  <span>€1,310.00 EUR</span>
                </div>
              </div>

              <div className="p-3 bg-[#faf9f6] border border-[#d8d5cc] text-[10px] text-[#555758] space-y-1">
                <div>📦 Complimentary black matte magnetic presentation box</div>
                <div>🌿 100% Carbon-neutral courier transit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
