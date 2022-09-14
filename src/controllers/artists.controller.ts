import {Request, Response} from "express";
import * as artistService from "../services/artistService";
import {ArtistMutationAttributes} from "../services/artistService";

export const createArtist = async (req: Request, res: Response) => {
    const attrs: ArtistMutationAttributes = req.body
    artistService.create(attrs)
        .then((artist) => res.send(artist))
        .catch(() => res.sendStatus(500))
}

export const getAllArtists = async (req: Request, res: Response) => {
    artistService.getAll()
        .then((artists) => res.send(artists))
        .catch(() => res.sendStatus(500))
}

export const deleteArtist = async (req: Request, res: Response) => {
    const id = req.params.id
    artistService.deleteById(id)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500))
}

export const getArtist = async (req: Request, res: Response) => {
    const id = req.params.id
    artistService.getById(id)
        .then((artist) => {
            if (artist == null) {
                res.sendStatus(404)
            } else {
                res.send(artist)
            }
        })
        .catch(() => res.sendStatus(500))

}

export const updateArtist = async (req: Request, res: Response) => {
    const id = req.params.id
    const attrs: ArtistMutationAttributes = req.body
    artistService.update(id, attrs)
        .then((artist) => {
            if (artist == null) {
                res.sendStatus(404)
            } else {
                res.send(artist)
            }
        })
        .catch(() => res.sendStatus(500))
}
