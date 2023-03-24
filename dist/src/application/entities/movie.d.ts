import { Replace } from '@helpers/Replace';
export interface MovieProps {
    ghibli_id: string;
    title: string;
    banner: string;
    description: string;
    director: string;
    producer: string;
    created_at: Date;
}
export declare class Movie {
    private _id;
    private props;
    constructor(props: Replace<MovieProps, {
        created_at?: Date;
    }>, id?: string);
    get id(): string;
    get ghibli_id(): string;
    set ghibli_id(ghibli_id: string);
    get title(): string;
    set title(title: string);
    get banner(): string;
    set banner(banner: string);
    get description(): string;
    set description(description: string);
    get director(): string;
    set director(director: string);
    get producer(): string;
    set producer(producer: string);
    get created_at(): Date;
}
