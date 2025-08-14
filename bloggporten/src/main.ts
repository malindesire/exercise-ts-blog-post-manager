import './style.css';
import './scripts/post';
import type { Post } from './scripts/types';
import { renderPosts, savePost } from './scripts/post';
import { v4 as generateId } from 'uuid';

renderPosts();

const form = document.querySelector<HTMLFormElement>('[data-add-post-form]');
const inputTitle =
	document.querySelector<HTMLInputElement>('[data-input-title]');
const inputContent = document.querySelector<HTMLTextAreaElement>(
	'[data-input-content]'
);
const inputAuthor = document.querySelector<HTMLTextAreaElement>(
	'[data-input-author]'
);

form?.addEventListener('submit', (e) => {
	e.preventDefault();

	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const date = today.getDate();
	const createdAt = `${year}-${month}-${date}`;

	const newPost: Post = {
		id: generateId(),
		title: inputTitle?.value ?? '',
		content: inputContent?.value ?? '',
		author: inputAuthor?.value ?? '',
		createdAt: createdAt,
	};

	savePost(newPost);
	location.reload();
});
