import Header from "@/components/home/header"
import { VendorSignupForm } from "@/components/auth/vendor-signup-form"
import Footer from "@/components/home/footer"

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--steam)] font-sans antialiased text-[var(--ink)]">
      <Header />
      
      <main className="flex-1 flex flex-col items-center w-full pt-20 pb-16 px-4 sm:px-8 relative overflow-hidden">
        {/* Decorative ambient background glows matching Cleclo landing pages */}
        <div 
          className="absolute top-1/4 -left-24 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl" 
          style={{ background: "var(--brand-light)" }} 
        />
        <div 
          className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full pointer-events-none opacity-15 blur-3xl" 
          style={{ background: "var(--brass)" }} 
        />

        <VendorSignupForm />
      </main>
      <Footer />
    </div>
  )
}

