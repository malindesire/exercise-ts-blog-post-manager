import type { Post } from './types';

const storageKey = import.meta.env.VITE_LOCAL_STORAGE_KEY;
const postList = document.querySelector<HTMLUListElement>('[data-posts]');

export const getPosts = (): Post[] => {
	const data = localStorage.getItem(storageKey);
	return data ? JSON.parse(data) : [];
};

export const savePost = (post: Post) => {
	const posts = getPosts();
	posts.push(post);
	localStorage.setItem(storageKey, JSON.stringify(posts));
};

const createPostItem = (post: Post) => {
	const newItem = document.createElement('li');
	newItem.classList.add('post');

	newItem.innerHTML = `
		<h3 class="post-title" data-post-title>${post.title}</h3>
		<p class="post-author" data-post-author>${post.author}</p>
		<p class="post-content" data-post-content>${post.content}</p>
		<span class="post-time" data-post-created>${post.createdAt}</span>
	`;

	return newItem;
};

export const renderPosts = () => {
	const posts = getPosts();

	posts.forEach((post) => {
		const postItem = createPostItem(post);
		postList?.appendChild(postItem);
	});
};
