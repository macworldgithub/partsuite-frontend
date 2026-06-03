export default function Footer() {
  return (
    <footer className="py-12 bg-[#0f1514] border-t border-[#1a3a36]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded border border-[#1a3a36] flex items-center justify-center bg-[#1a1a1a]">
              <span className="text-[#1fddcb] font-bold text-xs">PS</span>
            </div>
            <div>
              <span className="text-lg font-bold font-heading text-white">Part Suite</span>
              <div className="text-xs text-[#666]">BY OMNISUITEAL</div>
            </div>
          </div>
          <div className="text-sm text-[#888]">
            © {new Date().getFullYear()} OmniSuiteAI.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}