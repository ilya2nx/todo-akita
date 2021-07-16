export enum VisibilityFilter {
  show_all = 'show_all',
  show_active = 'show_active',
  show_completed = 'show_completed'
}

export type TodoFilter = {
  name: string,
  value: VisibilityFilter
}

export const initialFilters: TodoFilter[] = [
  {name: 'Все заметки', value: VisibilityFilter.show_all},
  {name: 'Активные', value: VisibilityFilter.show_active},
  {name: 'Завершенные', value: VisibilityFilter.show_completed}
]
