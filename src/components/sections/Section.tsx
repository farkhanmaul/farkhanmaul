import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  dataId?: string;
}

// Open/Closed Principle: Open for extension, closed for modification
export default function Section({ id, className = '', children, dataId }: SectionProps) {
  return (
    <section 
      id={id}
      className={`relative w-screen min-h-screen flex flex-col ${className}`}
      data-id={dataId || id}
    >
      {children}
    </section>
  );
}