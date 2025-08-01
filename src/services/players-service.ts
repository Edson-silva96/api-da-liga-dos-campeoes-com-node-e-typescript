import { response } from "express";
import { playerModel } from "../models/players-models";
import { StatisticsModel } from "../models/statistics-models";
import { deleteOnePlayer, findAllPlayers, findAndModifyplayer, findPlayerById, insertPlayer } from "../repositorio/players-repository";
import * as HttpResponse from "../utils/http-helper";




export const getplayerservice = async (playerId: string) => {
    const data = await findAllPlayers();
    let response = null;

    if (data) {
      response = await HttpResponse.ok(data);
    } else {
      response = await HttpResponse.noContent();
    }
    return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);
  let response = null;

  if (data) {
    response = HttpResponse.ok(data);
  } else {
    response = HttpResponse.noContent();
  }

  return response;
}

export const createPlayerService = async (id: number, bodyValue: StatisticsModel, player: playerModel) => {
  let response = null;

  if((player)){
    await insertPlayer(player);
    response = HttpResponse.created(player);
  } else{
    response = HttpResponse.badRequest();
  }
  
  return response;
}

export const deleteplayerservice = async (id: number) => {
  let response = null;

  const isdeleted = await deleteOnePlayer(id);

  if(isdeleted) {
    response = HttpResponse.ok({ message: "Player deleted successfully" });
  } else {
    response = HttpResponse.badRequest();
  }
  return response;
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
  const data = await findAndModifyplayer(id , statistics);
  let response = null;
  
  if(Object.keys(data).length === 0) {
    response = HttpResponse.badRequest();
  } else {
    response = HttpResponse.ok(data);
  }
  return response;
};