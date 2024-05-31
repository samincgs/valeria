import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from './theme-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        {children}
      </ThemeProvider>
    </>
  );
};
export default Providers;
