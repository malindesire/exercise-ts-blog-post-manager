import type { Post } from './types';
import { savePost } from './post';
import { v4 as generateId } from 'uuid';

const form = document.querySelector<HTMLFormElement>('[data-add-post-form]');
const inputTitle = form?.querySelector<HTMLInputElement>('[data-input-title]');
const inputContent = form?.querySelector<HTMLTextAreaElement>(
	'[data-input-content]'
);
const inputAuthor = form?.querySelector<HTMLTextAreaElement>(
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
