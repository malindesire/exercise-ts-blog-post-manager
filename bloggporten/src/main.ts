import './style.css';
import './scripts/post';
import type { Post } from './scripts/types';
import { savePost } from './scripts/post';
import { v4 as generateId } from 'uuid';

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

	const newPost: Post = {
		id: generateId(),
		title: inputTitle?.value ?? '',
		content: inputContent?.value ?? '',
		author: inputAuthor?.value ?? '',
		createdAt: new Date(),
	};

	savePost(newPost);
});
