import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface AppHeaderProps {
  title: string;
  showBack?: boolean;
  backHref?: string;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
  leftContent?: React.ReactNode;
}

export function AppHeader({ 
  title, 
  showBack = false, 
  backHref = "/home",
  className = "",
  maxWidth = '2xl',
  leftContent
}: AppHeaderProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full'
  };
  return (
    <header className={`w-full py-3 ${className}`}>
      <div className={`w-full ${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="flex items-center h-10">
          {leftContent ? (
            leftContent
          ) : showBack ? (
            <Button asChild variant="ghost" size="icon" className="h-10 w-10 -ml-2">
              <Link href={backHref}>
                <ArrowLeft className="h-4 w-4 text-primary" />
              </Link>
            </Button>
          ) : null}
          <h1 className="text-xl font-semibold ml-2">{title}</h1>
        </div>
      </div>
    </header>
  );
}
