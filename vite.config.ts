import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(
	async () =>
		({
			plugins: [TanStackRouterVite(), react()],
			clearScreen: false,
			server: {
				port: 1420,
				strictPort: true
			},
			envPrefix: ['VITE_', 'TAURI_'],
			build: {
				target: process.env.TAURI_PLATFORM === 'windows' ? 'chrome105' : 'safari13',
				minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
				sourcemap: !!process.env.TAURI_DEBUG
			},
			resolve: {
				alias: {
					global: path.resolve(__dirname, './'),
					'@': path.resolve(__dirname, './src')
				}
			}
		}) as any
);
