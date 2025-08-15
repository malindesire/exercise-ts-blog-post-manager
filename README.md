# Blog Post Manager

## How to start the project
You need to add a .env file in the "bloggporten" folder with the key "VITE_LOCAL_STORAGE_KEY" and an optional string as the value.
eg. `VITE_LOCAL_STORAGE_KEY="posts"`

Then run `nvm use` and `npm run dev`.

## About the exercise

In this exercise, you will build a simple blog post manager using **Vanilla TypeScript** and **Vite**. The goal is not to create a fully-fledged blogging platform, but to practice DOM manipulation, events, _( local storage - extra )_, and basic styling.

Remember to create a vite project before you start. You can do it in this folder after you have cloned the repo _( If you choose to clone it.. )_. The new vite project will be in a subfolder to this project.

```bash
npm create vite@latest
```

Follow the steps, pick a name of the project _( will be the name of the subfolder that is created inside this repo )_ and choose **vanilla typescript**.

## 📌 Instructions

### ✅ Basics

- All blog posts should be displayed in a list on the page.

- There should be a form where users can add a new blog post with at least:

  - A **title**
  - A **body**
  - An **author**

- Each blog post should show:

  - The **title**
  - The **author**
  - The **content**
  - A **timestamp** (when it was created)

- Each blog post should have buttons to:

  - ✏️ **Edit** the post in place
  - 🗑️ **Delete** the post

- Style your application! Design matters in frontend development. But remember: it's usually best to finish the functionality or the styling first — don't do both at the same time.

---

### 🚀 More Complexity

- Allow **sorting** of blog posts by:

  - Timestamp (newest first – _default_)
  - Author (alphabetically)

- Blog posts should be **stored in local storage** and automatically loaded when the page is refreshed. Even if you close your browser and reopen it, the posts should still be there.

- Optionally, let users **filter posts** by author name.

- Use **textareas** for writing blog content to support multiline input.
