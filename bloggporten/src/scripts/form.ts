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

	const newPost: Post = {
		id: generateId(),
		title: inputTitle?.value ?? '',
		content: inputContent?.value ?? '',
		author: inputAuthor?.value ?? '',
		createdAt: Date.now(),
	};

	savePost(newPost);
	location.reload();
});
