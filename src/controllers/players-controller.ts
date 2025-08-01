import { Request, Response } from 'express';
import { createPlayerService, deleteplayerservice, getPlayerByIdService, getplayerservice, updatePlayerService } from '../services/players-service';
import { StatisticsModel } from '../models/statistics-models';


export const getPlayer = async (req: Request, res: Response) => {
    const playerId = req.params.id;
    const HttpResponse = await getplayerservice(playerId);
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

export const getPlayerById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const HttpResponse = await getPlayerByIdService(id);
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

export const postPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const { name, team, statistics } = bodyValue;
    const HttpResponse = await createPlayerService(name, team, statistics); 

    if (HttpResponse) {
        res.status(HttpResponse.statusCode).json(HttpResponse.body);
    }
}

export const deleteplayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const httpResponse = await deleteplayerservice(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};


export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: StatisticsModel = req.body;
    const HttpResponse = await updatePlayerService(id, bodyValue);
    res.status(HttpResponse.statusCode).json(HttpResponse.body);

}