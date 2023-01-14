import { randomUUID } from 'node:crypto';

export interface FilmProps {
  ghibli_id: string;
  title: string;
  image: string;
  description: string;
  director: string;
  producer: string;
  created_at: Date;
}

export class Films {
  private _id: string;
  private props: FilmProps;

  constructor(props: FilmProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      created_at: props.created_at ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get ghibli_id() {
    return this.props.ghibli_id;
  }

  public set ghibli_id(ghibli_id: string) {
    this.props.ghibli_id = ghibli_id;
  }

  public get title() {
    return this.props.title;
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get image() {
    return this.props.image;
  }

  public set image(image: string) {
    this.props.image = image;
  }

  public get description() {
    return this.props.description;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get director() {
    return this.props.director;
  }

  public set director(director: string) {
    this.props.director = director;
  }

  public get producer() {
    return this.props.producer;
  }

  public set producer(producer: string) {
    this.props.producer = producer;
  }

  public get created_at(): Date {
    return this.props.created_at;
  }
}
