
import React, { Component, ErrorInfo, ReactNode } from 'react';

/**
 * Props and State definitions with explicit typing.
 */
interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * ErrorBoundary class component to catch rendering errors and display a luxury-themed fallback UI.
 * Fixed: Explicitly using Component from react and declaring state and props as properties to resolve inheritance visibility issues.
 */
export class ErrorBoundary extends Component<Props, State> {
  // Fix: Explicitly declare state as a public property to satisfy TypeScript in certain environments
  // This resolves the error: Property 'state' does not exist on type 'ErrorBoundary'.
  public state: State = {
    hasError: false
  };

  // Fix: Explicitly declare props as a public property to satisfy TypeScript in certain environments
  // This resolves the error: Property 'props' does not exist on type 'ErrorBoundary'.
  public props: Props;

  /**
   * Initialize and ensure props are correctly bound via super call.
   */
  constructor(props: Props) {
    super(props);
    // Fix: Explicitly assign props to ensure availability in environments where base class inheritance is not correctly inferred.
    this.props = props;
  }

  /**
   * Static method to update state so the next render will show the fallback UI.
   * @param _ The error that was caught.
   * @returns The updated state.
   */
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  /**
   * Lifecycle method to log error details for debugging and monitoring.
   * @param error The caught error.
   * @param errorInfo Metadata about the error.
   */
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Critical Render Error caught by ErrorBoundary:", error, errorInfo);
  }

  /**
   * Render method with luxury styling and advanced animated fallback.
   * @returns The rendered ReactNode.
   */
  public render(): ReactNode {
    // Fix: Access state and props via 'this' after ensuring inheritance is correctly typed
    // This resolves the errors regarding Property 'state' and 'props' not existing on the instance.
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 text-center selection:bg-[#bf953f] selection:text-black font-serif">
          <div className="glass-effect p-10 md:p-16 max-w-xl border-[#bf953f]/20 relative overflow-hidden group shadow-[0_50px_150px_rgba(0,0,0,0.9)] rounded-[3rem] backdrop-blur-[100px]">
            {/* Elegant luxury background aura with smooth pulse and flow animation */}
            <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-[#bf953f]/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute -bottom-32 -left-32 w-[25rem] h-[25rem] bg-[#aa771c]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Animated decorative lines for luxury feel */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#bf953f]/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#bf953f]/30 to-transparent"></div>

            <div className="relative z-10 space-y-12">
              <div className="relative inline-block">
                <div className="w-28 h-28 bg-gradient-to-br from-[#bf953f] to-[#aa771c] rounded-full flex items-center justify-center mx-auto border border-white/10 shadow-[0_0_60px_rgba(191,149,63,0.4)] transition-all duration-[1.5s] ease-out group-hover:rotate-[360deg] group-hover:scale-110">
                   <svg className="w-14 h-14 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                   </svg>
                </div>
                {/* Orbital animation for luxury touch */}
                <div className="absolute -inset-4 border border-[#bf953f]/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bengali font-bold text-white tracking-tight gold-gradient leading-tight">অপ্রত্যাশিত বিভ্রাট</h2>
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#bf953f] to-transparent mx-auto"></div>
                <p className="text-gray-400 font-bengali text-xl md:text-2xl leading-relaxed italic max-w-md mx-auto">
                  "সব বিরহ বিচ্ছেদ নয়, কিছু বিচ্ছেদ নতুন শুরুর সংকেত।" <br/> 
                  <span className="text-white/60 text-base mt-4 block">অনুগ্রহ করে পৃষ্ঠাটি পুনরায় লোড করুন।</span>
                </p>
              </div>
              
              <button 
                onClick={() => window.location.reload()}
                className="luxury-shimmer px-14 py-6 bg-[#bf953f] text-black font-bold uppercase tracking-[0.5em] hover:bg-white hover:scale-105 active:scale-95 transition-all duration-[0.8s] shadow-[0_30px_70px_rgba(191,149,63,0.5)] relative overflow-hidden rounded-full group ring-1 ring-[#bf953f]/50"
              >
                <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.2s] ease-in-out"></div>
                <span className="relative z-10 font-bengali text-lg">যাত্রা পুনরায় শুরু করুন</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}
