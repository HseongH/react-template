import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import GlobalStyle from './style/GlobalStyle';

import Header from './components/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle>
          <Header />
        </GlobalStyle>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
