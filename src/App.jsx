import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import CssBaseline from '@mui/material/CssBaseline';
import Header from '@/components/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <CssBaseline enableColorScheme />
        <Header />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
