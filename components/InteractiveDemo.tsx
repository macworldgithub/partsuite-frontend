"use client";

import React, { useState, useEffect } from 'react';

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
);

const FileJsonIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/></svg>
);

const AlertTriangleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
);

const LoaderIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);

const ServerIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>
);

const MessagesSquareIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
);

const BarcodeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 5v14"/><path d="M8 5v14"/><path d="M12 5v14"/><path d="M17 5v14"/><path d="M21 5v14"/></svg>
);


export default function InteractiveDemo() {
  const [activeStep, setActiveStep] = useState(1);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedProduct, setScannedProduct] = useState<any>(null);
  const [selectedRecommendations, setSelectedRecommendations] = useState<string[]>([]);
  const [syncStatus, setSyncStatus] = useState<Record<string, 'pending' | 'success' | 'error'>>({
    inventory: 'pending',
    customer: 'pending',
    pickTicket: 'pending'
  });
  const [dmsCode, setDmsCode] = useState('');
  
  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setScannedProduct({
        name: "Sikkens Basecoat",
        sku: "SK-BC-500",
        confidence: 99.8,
        price: "$45.99"
      });
    }, 1500);
  };

  const simulateSync = () => {
    setSyncStatus({ inventory: 'pending', customer: 'pending', pickTicket: 'pending' });
    
    setTimeout(() => {
      setSyncStatus(prev => ({ ...prev, inventory: 'success' }));
    }, 800);
    
    setTimeout(() => {
      setSyncStatus(prev => ({ ...prev, customer: 'success' }));
    }, 1500);
    
    setTimeout(() => {
      setSyncStatus(prev => ({ ...prev, pickTicket: 'success' }));
    }, 2200);
  };

  useEffect(() => {
    if (activeStep === 3) {
      simulateSync();
    }
  }, [activeStep]);

  useEffect(() => {
    if (activeStep === 5) {
        setDmsCode(`{
  "orderId": "ORD-${Math.floor(Math.random() * 10000)}",
  "status": "APPROVED",
  "items": [
    {
      "sku": "SK-BC-500",
      "qty": 1,
      "price": 45.99
    }
    ${selectedRecommendations.length > 0 ? `,
    {
      "sku": "ACC-TC-12",
      "qty": 1,
      "price": 8.50
    }` : ''}
  ],
  "dmsSyncStatus": "COMPLETE",
  "timestamp": "${new Date().toISOString()}"
}`);
    }
  }, [activeStep, selectedRecommendations]);

  const toggleRecommendation = (id: string) => {
    setSelectedRecommendations(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const renderStepNav = () => (
    <div className="flex justify-between items-center mb-8 border-b border-[var(--border)] pb-4 overflow-x-auto gap-4">
      {[
        { id: 1, name: 'Scan' },
        { id: 2, name: 'AI Match' },
        { id: 3, name: 'Review' },
        { id: 4, name: 'Intelligence' },
        { id: 5, name: 'Export' }
      ].map((step) => (
        <button
          key={step.id}
          onClick={() => setActiveStep(step.id)}
          className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-lg transition-colors ${
            activeStep === step.id 
              ? 'bg-[#1a2f2d] text-[#4fd1c5] border border-[#234543]' 
              : 'text-[var(--muted-foreground)] hover:text-white hover:bg-[var(--card)]'
          }`}
        >
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
            activeStep === step.id ? 'bg-[#4fd1c5] text-black' : 'bg-[var(--border)] text-white'
          }`}>
            {step.id}
          </div>
          {step.name}
        </button>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden relative">
      {renderStepNav()}

      <div className="min-h-[400px]">
        {/* STEP 1: SCAN */}
        {activeStep === 1 && (
          <div className="flex flex-col items-center justify-center h-full space-y-8 animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Simulate Barcode Scan</h3>
              <p className="text-[var(--muted-foreground)] max-w-md">Our AI instantly identifies the product and cross-references it with your DMS catalog.</p>
            </div>
            
            <button 
              onClick={handleScan}
              disabled={isScanning}
              className={`relative group w-48 h-48 rounded-full border-4 flex flex-col items-center justify-center transition-all ${
                isScanning 
                  ? 'border-[#4fd1c5] shadow-[0_0_30px_rgba(79,209,197,0.5)]' 
                  : scannedProduct 
                    ? 'border-[#38b2ac] bg-[#1a2f2d]' 
                    : 'border-[var(--border)] hover:border-[#4fd1c5]'
              }`}
            >
              {isScanning ? (
                <>
                  <div className="absolute inset-0 bg-[#4fd1c5] rounded-full animate-ping opacity-20"></div>
                  <LoaderIcon className="w-12 h-12 text-[#4fd1c5] animate-spin mb-2" />
                  <span className="text-[#4fd1c5] font-semibold">Scanning...</span>
                </>
              ) : scannedProduct ? (
                <>
                  <CheckCircleIcon className="w-16 h-16 text-[#38b2ac] mb-2" />
                  <span className="text-white font-bold">Identified</span>
                </>
              ) : (
                <>
                  <BarcodeIcon className="w-16 h-16 text-[var(--muted-foreground)] group-hover:text-[#4fd1c5] transition-colors mb-2" />
                  <span className="text-[var(--muted-foreground)] group-hover:text-white font-medium">Click to Scan</span>
                </>
              )}
            </button>

            {scannedProduct && (
              <div className="w-full max-w-md bg-[#0f0f11] border border-[var(--border)] rounded-xl p-4 flex justify-between items-center animate-in slide-in-from-bottom-4">
                <div>
                  <p className="text-xs text-[#4fd1c5] font-bold uppercase tracking-wider mb-1">Match: {scannedProduct.confidence}%</p>
                  <p className="text-white font-semibold text-lg">{scannedProduct.name}</p>
                  <p className="text-[var(--muted-foreground)] text-sm">{scannedProduct.sku}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-xl">{scannedProduct.price}</p>
                  <p className="text-[var(--muted-foreground)] text-xs">MSRP</p>
                </div>
              </div>
            )}

            {scannedProduct && (
               <button onClick={() => setActiveStep(2)} className="mt-4 px-6 py-3 bg-[#4fd1c5] hover:bg-[#38b2ac] text-black font-semibold rounded-lg transition-colors flex items-center gap-2">
                 Proceed to AI Match <ChevronRightIcon className="w-4 h-4" />
               </button>
            )}
          </div>
        )}

        {/* STEP 2: AI MATCH */}
        {activeStep === 2 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">AI Recommended Upsells</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-[#1a2f2d] border border-[#234543] p-4 rounded-xl">
                  <h4 className="text-[#4fd1c5] font-semibold mb-2">Primary Item</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-medium">Sikkens Basecoat</p>
                      <p className="text-[var(--muted-foreground)] text-sm">SK-BC-500</p>
                    </div>
                    <p className="text-white font-bold">$45.99</p>
                  </div>
                </div>

                <div className="bg-[#0f0f11] border border-[var(--border)] p-4 rounded-xl space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <SearchIcon className="w-5 h-5 text-[#ecc94b]" />
                    <h4 className="text-white font-semibold">Frequently Bought Together</h4>
                  </div>
                  
                  {[
                    { id: 'rec-1', name: 'Standard Activator', sku: 'ACC-ACT-01', price: '$12.99', confidence: '85%' },
                    { id: 'rec-2', name: 'Tack Cloth (3-pack)', sku: 'ACC-TC-12', price: '$8.50', confidence: '92%' }
                  ].map((rec) => (
                    <div 
                      key={rec.id} 
                      onClick={() => toggleRecommendation(rec.id)}
                      className={`p-3 rounded-lg border cursor-pointer transition-all flex justify-between items-center ${
                        selectedRecommendations.includes(rec.id) 
                          ? 'border-[#4fd1c5] bg-[#1a2f2d]' 
                          : 'border-[var(--border)] bg-[var(--card)] hover:border-[#4fd1c5] hover:bg-[#1a2f2d]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-white text-sm font-medium">{rec.name}</p>
                          <span className="text-[10px] px-1.5 py-0.5 bg-[#234543] text-[#4fd1c5] rounded-full">{rec.confidence} Match</span>
                        </div>
                        <p className="text-[var(--muted-foreground)] text-xs">{rec.sku}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-white text-sm font-semibold">{rec.price}</p>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          selectedRecommendations.includes(rec.id) ? 'bg-[#4fd1c5] border-[#4fd1c5]' : 'border-[var(--muted-foreground)]'
                        }`}>
                          {selectedRecommendations.includes(rec.id) && <CheckCircleIcon className="w-3 h-3 text-black" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0f0f11] border border-[var(--border)] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-white font-semibold mb-4">Order Summary</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--muted-foreground)]">Sikkens Basecoat (1)</span>
                      <span className="text-white">$45.99</span>
                    </div>
                    {selectedRecommendations.includes('rec-1') && (
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--muted-foreground)]">Standard Activator (1)</span>
                        <span className="text-white">$12.99</span>
                      </div>
                    )}
                    {selectedRecommendations.includes('rec-2') && (
                      <div className="flex justify-between text-sm">
                        <span className="text-[var(--muted-foreground)]">Tack Cloth (1)</span>
                        <span className="text-white">$8.50</span>
                      </div>
                    )}
                    <div className="pt-2 mt-2 border-t border-[var(--border)] flex justify-between font-bold">
                      <span className="text-white">Total</span>
                      <span className="text-[#4fd1c5]">
                        ${(
                          45.99 + 
                          (selectedRecommendations.includes('rec-1') ? 12.99 : 0) + 
                          (selectedRecommendations.includes('rec-2') ? 8.50 : 0)
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button onClick={() => setActiveStep(3)} className="w-full py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                  Create Pick Ticket <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: REVIEW / DMS SYNC */}
        {activeStep === 3 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-300">
             <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">DMS Synchronization</h3>
              <p className="text-[var(--muted-foreground)] max-w-md mx-auto">Pushing transaction details directly into Pentana DMS.</p>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {[
                { id: 'inventory', name: 'Deducting Inventory', desc: 'Updating quantity on hand for SK-BC-500' },
                { id: 'customer', name: 'Customer Pricing', desc: 'Applying wholesale discount tier B' },
                { id: 'pickTicket', name: 'Warehouse Routing', desc: 'Generating pick ticket for Zone 4' }
              ].map((task) => (
                <div key={task.id} className="bg-[#0f0f11] border border-[var(--border)] p-4 rounded-xl flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--card)] border border-[var(--border)] shrink-0">
                    {syncStatus[task.id] === 'pending' ? (
                       <LoaderIcon className="w-5 h-5 text-[#ecc94b] animate-spin" />
                    ) : (
                       <CheckCircleIcon className="w-5 h-5 text-[#4fd1c5]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{task.name}</h4>
                    <p className="text-[var(--muted-foreground)] text-sm">{task.desc}</p>
                  </div>
                  <div className="text-sm">
                    {syncStatus[task.id] === 'pending' ? (
                      <span className="text-[#ecc94b]">Processing</span>
                    ) : (
                      <span className="text-[#4fd1c5] font-semibold">Done</span>
                    )}
                  </div>
                </div>
              ))}

              {syncStatus.pickTicket === 'success' && (
                <div className="mt-8 pt-6 border-t border-[var(--border)] flex justify-end animate-in fade-in">
                  <button onClick={() => setActiveStep(4)} className="px-6 py-3 bg-[#4fd1c5] hover:bg-[#38b2ac] text-black font-semibold rounded-lg transition-colors flex items-center gap-2">
                    Review Intelligence <ChevronRightIcon className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* STEP 4: INTELLIGENCE */}
        {activeStep === 4 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-300">
             <h3 className="text-2xl font-bold text-white mb-6">Manager Intelligence</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0f0f11] border border-[#4a3424] p-5 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangleIcon className="w-5 h-5 text-[#ecc94b]" />
                    <h4 className="text-white font-semibold">Price Override Detected</h4>
                  </div>
                  <p className="text-[var(--muted-foreground)] text-sm mb-4">
                    System detected a manual discount applied by the counter staff that exceeds the 10% threshold.
                  </p>
                  <div className="bg-[var(--card)] p-3 rounded-lg space-y-2 text-sm border border-[var(--border)] mb-4">
                    <div className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">Original MSRP:</span>
                      <span className="text-white line-through">$45.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">Applied Price:</span>
                      <span className="text-[#ecc94b] font-bold">$38.00 (17% off)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--muted-foreground)]">User:</span>
                      <span className="text-white">J. Smith</span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-[#2a1f18] text-[#ecc94b] font-medium rounded-lg border border-[#4a3424] hover:bg-[#36271e] transition-colors">
                    Require Manager Approval
                  </button>
                </div>

                <div className="bg-[#0f0f11] border border-[var(--border)] p-5 rounded-xl flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <MessagesSquareIcon className="w-5 h-5 text-[#4fd1c5]" />
                    <h4 className="text-white font-semibold">AI Insights</h4>
                  </div>
                  
                  <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                    <div className="bg-[#1a2f2d] p-3 rounded-lg rounded-tl-none self-start border border-[#234543]">
                      <p className="text-sm text-white">This customer (AutoBody Pros) typically orders 5 units of SK-BC-500 every month. Today they only ordered 1.</p>
                    </div>
                    <div className="bg-[var(--card)] p-3 rounded-lg rounded-tr-none self-end border border-[var(--border)] ml-8">
                      <p className="text-sm text-[var(--muted-foreground)]">Should we offer a bulk discount?</p>
                    </div>
                    <div className="bg-[#1a2f2d] p-3 rounded-lg rounded-tl-none self-start border border-[#234543]">
                      <p className="text-sm text-white">Yes, offering $42/unit for a quantity of 5 maintains your margin threshold while increasing average order value by 380%.</p>
                    </div>
                  </div>
                </div>
             </div>
             
             <div className="mt-8 flex justify-end">
                <button onClick={() => setActiveStep(5)} className="px-6 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-colors flex items-center gap-2">
                  View Data Export <ChevronRightIcon className="w-4 h-4" />
                </button>
             </div>
          </div>
        )}

        {/* STEP 5: EXPORT */}
        {activeStep === 5 && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-300">
             <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Developer Ready</h3>
              <p className="text-[var(--muted-foreground)] max-w-md mx-auto">Export transaction data in standard formats for integration with any reporting tool or custom DMS.</p>
            </div>

            <div className="bg-[#0f0f11] border border-[var(--border)] rounded-xl overflow-hidden mb-6">
              <div className="bg-[var(--card)] px-4 py-2 border-b border-[var(--border)] flex justify-between items-center">
                <span className="text-sm font-medium text-white flex items-center gap-2">
                  <ServerIcon className="w-4 h-4 text-[#4fd1c5]"/> transaction.json
                </span>
                <div className="flex gap-2">
                  <button className="p-1.5 hover:bg-[#2a2a2a] rounded text-[var(--muted-foreground)] hover:text-white transition-colors" title="Download JSON">
                    <FileJsonIcon className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 hover:bg-[#2a2a2a] rounded text-[var(--muted-foreground)] hover:text-white transition-colors" title="Download CSV">
                    <DownloadIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-[#a0a0a0] leading-relaxed">
                  <code dangerouslySetInnerHTML={{
                    __html: dmsCode.replace(/"(.*?)":/g, '<span class="text-[#4fd1c5]">"$1"</span>:')
                                  .replace(/"(.*?)"/g, '<span class="text-[#ecc94b]">"$1"</span>')
                                  .replace(/: <span class="text-\[#ecc94b\]">"(.*?)"<\/span>/g, ': <span class="text-[#ecc94b]">"$1"</span>')
                                  .replace(/: ([0-9.]+)/g, ': <span class="text-[#f56565]">$1</span>')
                  }} />
                </pre>
              </div>
            </div>
            
            <div className="flex justify-center">
               <button onClick={() => {setActiveStep(1); setScannedProduct(null); setSelectedRecommendations([]);}} className="px-6 py-3 border border-[var(--border)] hover:bg-[#1a1a1a] text-white font-medium rounded-lg transition-colors">
                  Restart Demo
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
