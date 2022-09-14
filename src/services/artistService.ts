import Artist from "../db/models/Artist";
import * as crypto from 'crypto'

export interface ArtistAttributes {
    id: string
    name: string
    genre: string
}

export interface ArtistMutationAttributes {
    name: string
    genre: string
}


const findArtistById = async (id: string): Promise<Artist|null> => {
    return Artist.findByPk(id)
}


export const create = async (payload: ArtistMutationAttributes): Promise<ArtistAttributes> => {
    return Artist.create({
        id: crypto.randomUUID(),
        name: payload.name,
        genre: payload.genre
    });
}

export const update = async (id: string, payload: ArtistMutationAttributes): Promise<ArtistAttributes|null> => {
    return findArtistById(id)
        .then((artist) => {
            if(artist != null) {
                return artist.update(payload);
            }
            return null;
        })
}

export const getById = async (id: string): Promise<ArtistAttributes|null> => {
    return findArtistById(id)
}

export const deleteById = async (id: string): Promise<boolean> => {
    return Artist.destroy({where: {id}})
        .then((count) => count > 0)
}

export const getAll = async (): Promise<ArtistAttributes[]> => {
    return Artist.findAll()
}