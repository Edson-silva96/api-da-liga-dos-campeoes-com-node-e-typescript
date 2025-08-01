import { ClubModel } from "../models/club-models";
import fs from "fs/promises";
import "";

const data = [
    { id: 1, name: 'Paris Saint-Germain' },
]

export const findAllClubs = async(): Promise<ClubModel[]> => {
    const data = await fs.readFile('./src/data/clubs.json', 'utf-8');
    const clubs: ClubModel[] = JSON.parse(data);
    return clubs;
};