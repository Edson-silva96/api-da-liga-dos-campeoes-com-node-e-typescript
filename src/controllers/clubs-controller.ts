import { Request, Response } from 'express';
import { getClubService } from "../services/clubs-service";

export  const getclubs = async (req: Request, res: Response) => {
    const clubId = Number(req.params.id); // or use req.query.id depending on your route
    const response = await getClubService(clubId);
    res.status(response.statusCode).json(response.body);
}