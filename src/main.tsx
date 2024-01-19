import ReactDOM from 'react-dom/client';
import { Toaster } from '@/components/ui/toaster';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<App />
		<Toaster />
	</BrowserRouter>
);
