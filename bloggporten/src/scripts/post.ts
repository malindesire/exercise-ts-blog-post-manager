import type { Post } from './types';

const storageKey = import.meta.env.VITE_LOCAL_STORAGE_KEY;

export const getPosts = (): Post[] => {
	const data = localStorage.getItem(storageKey);
	return data ? JSON.parse(data) : [];
};

export const savePost = (post: Post) => {
	const posts = getPosts();
	posts.push(post);
	localStorage.setItem(storageKey, JSON.stringify(posts));
};
