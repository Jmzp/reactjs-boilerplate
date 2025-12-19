export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type AsyncState<T> = {
  data: Nullable<T>;
  loading: boolean;
  error: Nullable<string>;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type SortDirection = 'asc' | 'desc';

export type SortConfig<T> = {
  field: keyof T;
  direction: SortDirection;
};
