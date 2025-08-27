import CustomCursor from './CustomCursor';

interface CursorProviderProps {
  children: React.ReactNode;
}

export default function CursorProvider({ children }: CursorProviderProps) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}