# 📝 Task Board App

A minimal, modular, and beautiful task management app built with **React**, **TypeScript**, and **TailwindCSS**. Manage your tasks with features like create, edit, delete, search, and favorite—all in one elegant UI.

---

## 🧱 Features

- ✅ Create, edit, and delete tasks
- 🔍 Real-time search through tasks
- ⭐ Toggle favorite tasks
- 🏷️ Auto-colored tags with random background colors
- 📥 Modal-based task creation and editing
- 💬 Confirm dialogs for destructive actions
- 🧼 Reusable components for buttons, modals, inputs, etc.
- 🧩 Fully responsive and clean UI
- 📌 Sticky footer that stays at the bottom
- 🧾 Scrollable task table with height limit

---

## 🚀 Getting Started

### 1. Clone the repository

```bash

git clone https://github.com/Nabil71-dev/todo-list.git
cd tic-tac-toe-react

```

### 2. Install dependencies & Start the development server

```bash

npm install
npm run dev

```

## Folder Structure (Module Tree)

```bash
src/
├── assets/                    # Images, icons, etc.
├── component/
│   ├── common/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Modal.tsx
│   │   ├── ConfirmModal.tsx
│   │   └── Footer.tsx
│   └── task-board/            # Task management components
│       ├── index.tsx
│       ├── search.tsx
│       ├── task-header.tsx
│       ├── task-table.tsx
│       └── task-modal/
│           ├── index.tsx
│           └── task-form.tsx
├── layout/
│   └── TaskLayout.tsx         # Main page layout
├── utils/
│   └── generateRandomColor.ts # Utility for tag color generation
├── App.tsx
├── main.tsx
└── index.css                  # TailwindCSS styles
```

## 🧩 Component Tree

```bash
App
└── TaskLayout
        ├── TaskBoard
        │    ├── SearchInput
        │    ├── TaskHeader
        │    │    └── Button (reused)
        │    ├── TaskTable
        │    │    └── StarIcon
        │    │    └── Button
        │    └── TaskModal
        │         ├── Modal (common)
        │         └── TaskForm
        │              ├── Input
        │              ├── Select
        │              └── Button
        ├── Footer
        └── ConfirmModal (triggered on delete)
```

## 🙌 Future Enhancements

- 🧩 **Add task status filters (e.g., Done, In Progress)**
- 📆 **Add due dates with calendar picker**
- 🗂️ **Drag-and-drop task ordering**
- ☁️ **Backend/API integration**
- 👥 **Multi-user support with auth**


## 📜 License

- This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
