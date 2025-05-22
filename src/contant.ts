export const FOOTER_TEXT = "© 2025 mahmudnabiliiuc@gmail.com. All rights reserved."

export const PRIORITY_OPTIONS = ['Low', 'Medium', 'High', 'Critical'] as const;


export const initialTaskTasks = [
  {
    id: crypto.randomUUID(),
    title: "Buy Groceries",
    description: "Milk, Bread, Eggs",
    priority: "Low",
    tags: ["shopping", "home"],
    status: "created",
    isFavorite: false,
  },
];
