import { findAllClubs } from "../repositorio/clubs-repository";
import * as HttpResponse from "../utils/http-helper";



export const getClubService = async (id: number) => {
    const data = await findAllClubs();
    const response = HttpResponse.ok(data);
    return response;
}