import type { Post } from './types';

const mockPosts: Post[] = [
	{
		id: '1',
		title: 'Välkommen till vår nya blogg',
		content:
			'Det här är vårt allra första inlägg där vi berättar om vad som kommer härnäst. Häng med på resan!',
		author: 'Anna Svensson',
		createdAt: '2025-08-01',
	},
	{
		id: '2',
		title: '5 tips för bättre produktivitet',
		content:
			'Att strukturera din arbetsdag kan ge dig mer energi och fokus. Här är fem enkla men effektiva tips.',
		author: 'Johan Karlsson',
		createdAt: '2025-08-02',
	},
	{
		id: '3',
		title: 'Så lyckas du med din webbshop',
		content:
			'En guide för dig som vill starta och driva en framgångsrik e-handelsbutik från grunden.',
		author: 'Lisa Berg',
		createdAt: '2025-08-03',
	},
	{
		id: '4',
		title: 'Trendspaning: Höstens färger',
		content:
			'Hösten 2025 bjuder på mustiga toner och spännande material. Här är våra favoriter.',
		author: 'Emma Lind',
		createdAt: '2025-08-04',
	},
	{
		id: '5',
		title: 'Guide till Bali – paradisön för alla sinnen',
		content:
			'Bali är mer än bara stränder – här hittar du kultur, natur och fantastiska människor.',
		author: 'Anders Nilsson',
		createdAt: '2025-08-05',
	},
	{
		id: '6',
		title: 'Intervju med en Shopify-expert',
		content:
			'Vi träffade en expert som delade sina bästa tips för att lyckas med Shopify Storefront API.',
		author: 'Sara Ek',
		createdAt: '2025-08-06',
	},
	{
		id: '7',
		title: 'Så optimerar du din kod i TypeScript',
		content:
			'Med några enkla knep kan du göra din TypeScript-kod både snabbare och mer lättläst.',
		author: 'David Larsson',
		createdAt: '2025-08-07',
	},
	{
		id: '8',
		title: 'Malmö FF – en klubb med hjärta',
		content:
			'Vi tar en titt på historien bakom Sveriges mest framgångsrika fotbollsklubb.',
		author: 'Karin Holm',
		createdAt: '2025-08-08',
	},
];

export const addMockPosts = () => {
	localStorage.setItem(
		import.meta.env.VITE_LOCAL_STORAGE_KEY,
		JSON.stringify(mockPosts)
	);
};
