import type { Post } from './types';

const storageKey = import.meta.env.VITE_LOCAL_STORAGE_KEY;
const postList = document.querySelector<HTMLUListElement>('[data-posts]');

const getPosts = (): Post[] => {
	const data = localStorage.getItem(storageKey);
	return data ? JSON.parse(data) : [];
};

export const savePost = (post: Post) => {
	const posts = getPosts();
	posts.push(post);
	localStorage.setItem(storageKey, JSON.stringify(posts));
};

const updatePost = (id: string) => {
	document.querySelector<HTMLElement>(`#form-${id}`)!.style.display = 'flex';
	const btn = document.querySelector<HTMLButtonElement>(`#btn-${id}`);

	btn?.addEventListener('click', () => {
		const posts = getPosts().map((post) => {
			const updated: Post = {
				id: id,
				title:
					document.querySelector<HTMLInputElement>(`#title-${id}`)
						?.value ?? '',
				content:
					document.querySelector<HTMLInputElement>(`#content-${id}`)
						?.value ?? '',
				author:
					document.querySelector<HTMLInputElement>(`#author-${id}`)
						?.value ?? '',
				createdAt: post.createdAt,
			};

			return post.id === id ? updated : post;
		});

		localStorage.setItem(storageKey, JSON.stringify(posts));
		location.reload();
	});
};

const deletePost = (id: string) => {
	const posts = getPosts().filter((post) => post.id !== id);
	localStorage.setItem(storageKey, JSON.stringify(posts));
	location.reload();
};

const createPostItem = (post: Post) => {
	const newItem = document.createElement('li');
	newItem.classList.add('post');

	newItem.innerHTML = `
		<h3 class="post-title">${post.title}</h3>
		<p class="post-author">${post.author}</p>
		<p class="post-content">${post.content}</p>
		<span class="post-time">${post.createdAt}</span>
		<div>
			<form class="form form-edit" id="form-${post.id}">
				<label>
					Titel
					<input type="text" id="title-${post.id}" value="${post.title}">
				</label>
				<label>
					Inlägg
					<textarea rows="10" id="content-${post.id}">${post.content}</textarea>
				</label>
				<label>
					Namn
					<input type="text" id="author-${post.id}" value="${post.author}">
				</label>
				<button type="button" id="btn-${post.id}">Redigera</button>
			</form>
			<button class="edit-btn material-symbols-outlined" data-edit-btn data-post-id=${post.id}>edit</button>
			<button class="delete-btn material-symbols-outlined" data-delete-btn data-post-id=${post.id}>delete</button>
		</div>
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

postList?.addEventListener('click', (e: MouseEvent) => {
	const target = e.target as HTMLElement;
	const postId = target.dataset.postId;
	if (!postId) return;

	if (target.closest('[data-delete-btn]')) deletePost(postId);
	if (target.closest('[data-edit-btn]')) updatePost(postId);
});
