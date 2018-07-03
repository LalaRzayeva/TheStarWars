import { Character } from './character';

export class Movie {
    title: string;
    episode_id: number;
    characters: string[];
    fetched_characters: Character[];
}