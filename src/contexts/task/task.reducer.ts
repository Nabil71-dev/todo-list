
export const taskReducer = (draft, action) => {
    switch (action.type) {
        case "add": {
            const { id, title, description, priority, tags, status, isFavorite } = action;
            return [
                ...draft,
                {
                    id, title, description, priority, tags, status, isFavorite,
                }
            ]
        }
        case 'update': {
            return draft.map((task) => (task.id === action.task.id ? action.task : task));
        }
        case 'delete': {
            return draft.filter((task) => (task.id !== action.id));
        }
        case 'deleteAll': {
            return [];
        }
        case 'makeFavourite': {
            return draft.map((task) => task.id === action.id ? { ...task, isFavorite: !task.isFavorite } : task);
        }
        default: {
            throw Error(`No action matched with ${action.type}`);
        }
    }
}