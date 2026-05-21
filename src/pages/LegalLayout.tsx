import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export const LegalLayout = ({ title, children }: Props) => {
  return (
    <div className="min-h-screen bg-graphite text-foreground">
      <header className="border-b border-white/5">
        <div className="container mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-tight text-gold">
            Точка відліку
          </Link>
          <Link to="/" className="text-sm text-foreground/70 hover:text-gold transition-colors">
            На головну
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-5 lg:px-10 py-16 lg:py-24 max-w-3xl">
        <h1 className="text-[32px] md:text-[44px] font-semibold leading-[1.1] tracking-[-0.025em] mb-10 text-gold">
          {title}
        </h1>
        <div className="space-y-6 text-base lg:text-lg leading-[1.75] text-foreground/85">
          {children}
        </div>
      </main>
      <footer className="border-t border-white/5 mt-12">
        <div className="container mx-auto px-5 lg:px-10 py-8 text-xs text-foreground/50 flex flex-wrap gap-x-8 gap-y-2">
          <Link to="/terms" className="hover:text-gold">Публічна оферта</Link>
          <Link to="/refund" className="hover:text-gold">Політика повернення</Link>
          <Link to="/contacts" className="hover:text-gold">Контакти</Link>
          <span className="ml-auto">© {new Date().getFullYear()} ФОП Грицай Ольга Григорівна</span>
        </div>
      </footer>
    </div>
  );
};
