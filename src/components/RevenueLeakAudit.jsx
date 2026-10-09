import React from 'react';
import { ShieldAlert, AlertOctagon, CheckCircle2, DollarSign } from 'lucide-react';

export default function RevenueLeakAudit({ themeMode = 'dark' }) {
  const isLight = themeMode === 'light';

  return (
    <div className={`telemetry-card p-6 sm:p-8 space-y-6 mt-8 transition-all ${isLight ? 'bg-white border-[#E2E8F0]' : 'bg-[#0E1015] border-[#1E222D]'}`}>
      {/* Audit Header */}
      <div className={`border-b pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${isLight ? 'border-[#E2E8F0]' : 'border-[#1E222D]'}`}>
        <div>
          <div className="flex items-center gap-2">
            <ShieldAlert className={`w-4 h-4 ${isLight ? 'text-[#D97706]' : 'text-[#F59E0B]'}`} />
            <h3 className={`text-lg font-bold font-mono-telemetry ${isLight ? 'text-[#0F172A]' : 'text-[#F1F3F7]'}`}>
              The Math: Why Speed-to-Lead Directly Impacts Ad ROAS
            </h3>
          </div>
          <p className={`text-xs font-mono-telemetry mt-1 ${isLight ? 'text-[#64748B]' : 'text-[#767E8F]'}`}>
            Industry benchmark data based on speed-to-lead response studies.
          </p>
        </div>
        <span className={`text-[10px] font-mono-telemetry px-2.5 py-1 rounded w-fit ${
          isLight 
            ? 'text-[#D97706] bg-[#FEF3C7] border border-[#FDE68A]' 
            : 'text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/30'
        }`}>
          SPEED-TO-LEAD BENCHMARK AUDIT
        </span>
      </div>

      {/* 2 Hard Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Metric 1 */}
        <div className={`p-4.5 rounded border space-y-1.5 font-mono-telemetry ${isLight ? 'bg-[#F8FAFC] border-[#E2E8F0]' : 'bg-[#08090C] border-[#1E222D]'}`}>
          <div className={`text-3xl font-extrabold ${isLight ? 'text-[#059669]' : 'text-[#10B981]'}`}>391%</div>
          <div className={`text-xs leading-relaxed ${isLight ? 'text-[#475569]' : 'text-[#94A3B8]'}`}>
            Higher contact-to-conversion rate when leads receive a response within 60 seconds vs. 1 hour.
          </div>
        </div>

        {/* Metric 2 */}
        <div className={`p-4.5 rounded border space-y-1.5 font-mono-telemetry ${isLight ? 'bg-[#F8FAFC] border-[#E2E8F0]' : 'bg-[#08090C] border-[#1E222D]'}`}>
          <div className={`text-3xl font-extrabold ${isLight ? 'text-[#D97706]' : 'text-[#F59E0B]'}`}>~40%</div>
          <div className={`text-xs leading-relaxed ${isLight ? 'text-[#475569]' : 'text-[#94A3B8]'}`}>
            Average drop in response rate when inbound luxury ad leads wait more than 30 minutes for a catalog.
          </div>
        </div>
      </div>

      {/* Comparison Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {/* Left Side: The Manual Workflow */}
        <div className={`border rounded p-5 space-y-3 font-mono-telemetry ${
          isLight ? 'bg-[#FEF2F2] border-[#FCA5A5]' : 'bg-[#1A1114] border-[#EF4444]/30'
        }`}>
          <div className="flex items-center gap-2 text-[#DC2626] font-bold text-xs border-b border-[#FCA5A5]/40 pb-2">
            <AlertOctagon className="w-4 h-4" />
            <span>The Manual Workflow (Typical 2+ Hour Lag)</span>
          </div>
          <ul className="space-y-2 text-xs text-[#991B1B] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-[#DC2626] shrink-0">•</span>
              <span>Inbound form leads sit unassigned in sheets while the prospect checks other ads.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#DC2626] shrink-0">•</span>
              <span>Buyer interest cools down significantly before the sales agent makes the first manual call.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#DC2626] shrink-0">•</span>
              <span>A measurable portion of paid ad spend is lost to slow follow-up friction.</span>
            </li>
          </ul>
        </div>

        {/* Right Side: The Automated Pipeline */}
        <div className={`border rounded p-5 space-y-3 font-mono-telemetry ${
          isLight ? 'bg-[#ECFDF5] border-[#6EE7B7]' : 'bg-[#0D1914] border-[#10B981]/30'
        }`}>
          <div className="flex items-center gap-2 text-[#059669] font-bold text-xs border-b border-[#6EE7B7]/40 pb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>The Automated Pipeline (&lt;1.4s Dispatch)</span>
          </div>
          <ul className="space-y-2 text-xs text-[#065F46] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-[#059669] shrink-0">•</span>
              <span>Form submission triggers an immediate verified WhatsApp brochure directly to the lead.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#059669] shrink-0">•</span>
              <span>Sales team receives a real-time Telegram sound notification with lead details.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#059669] shrink-0">•</span>
              <span>Maximizes connection rates by reaching prospects while their buying intent is active.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line ROI Calculation */}
      <div className={`border p-4 rounded text-center text-xs font-mono-telemetry flex flex-col sm:flex-row items-center justify-between gap-3 ${
        isLight ? 'bg-[#F1F5F9] border-[#CBD5E1] text-[#0F172A]' : 'bg-[#141720] border-[#2E3648] text-[#F1F3F7]'
      }`}>
        <div className={`flex items-center gap-2 font-bold ${isLight ? 'text-[#0284C7]' : 'text-[#3B82F6]'}`}>
          <DollarSign className="w-4 h-4" />
          <span>ROI Perspective:</span>
        </div>
        <div className={`font-bold text-left sm:text-right ${isLight ? 'text-[#059669]' : 'text-[#10B981]'}`}>
          A one-time $1,500 – $2,000 infrastructure setup typically pays for itself by recovering just 1–2 high-intent leads that would otherwise be missed.
        </div>
      </div>
    </div>
  );
}
