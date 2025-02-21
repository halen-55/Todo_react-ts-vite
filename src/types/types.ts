export interface ITitle {
    title: string | null;
}

export interface ITask {
    userId?: number;
    id?: number;
    title: string;
    body: string;
}

export interface IOption {
    value: string;
    name: string;
}

export interface IFilter {
    sort: string;
    query: string;
}

