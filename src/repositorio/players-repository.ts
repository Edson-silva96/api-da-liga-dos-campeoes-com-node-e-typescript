import { playerModel } from "../models/players-models";
import { StatisticsModel } from "../models/statistics-models";

const players: playerModel[] = [
    { 
        id: 1, 
        name: 'Lionel Messi',
        club: 'Paris Saint-Germain',
        nationality: 'Argentina',
        position: 'Forward',
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
       },
    },
    { 
        id: 2, 
        name: 'Cristiano Ronaldo',
        club: 'Al Nassr',
        nationality: 'Portugal',
        position: 'Forward',
        statistics: {
            Overall: 91,
            Pace: 87,
            Shooting: 93,
            Passing: 82,
            Dribbling: 90,
            Defending: 35,
            Physical: 80,
        }
    },
    {
        id: 3, 
        name: 'Neymar Jr',
        club: 'Al Hilal',
        nationality: 'Brazil',
        position: 'Forward',
        statistics: {
            Overall: 89,
            Pace: 91,
            Shooting: 87,
            Passing: 88,
            Dribbling: 92,
            Defending: 35,
            Physical: 65,
        }
    },
    {
        id: 4, 
        name: 'Kylian Mbappé',
        club: 'Paris Saint-Germain',
        nationality: 'France',
        position: 'Forward',
        statistics: {
            Overall: 91,
            Pace: 97,
            Shooting: 90,
            Passing: 85,
            Dribbling: 92,
            Defending: 38,
            Physical: 76,
        }
    },
    {
        id: 5, 
        name: 'Kevin De Bruyne',
        club: 'Manchester City',
        nationality: 'Belgium',
        position: 'Midfielder',
        statistics: {
            Overall: 91,
            Pace: 75,
            Shooting: 85,
            Passing: 93,
            Dribbling: 88,
            Defending: 60,
            Physical: 70,
        }
    },
    {
        id: 6, 
        name: 'Robert Lewandowski',
        club: 'Barcelona',
        nationality: 'Poland',
        position: 'Forward',
        statistics: {
            Overall: 91,
            Pace: 80,
            Shooting: 93,
            Passing: 82,
            Dribbling: 88,
            Defending: 40,
            Physical: 80,
        }
    },
    {
        id: 7, 
        name: 'Mohamed Salah',
        club: 'Liverpool',
        nationality: 'Egypt',
        position: 'Forward',
        statistics: {
            Overall: 90,
            Pace: 92,
            Shooting: 88,
            Passing: 82,
            Dribbling: 90,
            Defending: 40,
            Physical: 75,
        }
    },
    {
        id: 8, 
        name: 'Virgil van Dijk',
        club: 'Liverpool',
        nationality: 'Netherlands',
        position: 'Defender',
        statistics: {
            Overall: 90,
            Pace: 75,
            Shooting: 60,
            Passing: 80,
            Dribbling: 70,
            Defending: 90,
            Physical: 85,
        }
    },
    {
        id: 9, 
        name: 'Sadio Mané',
        club: 'Al Nassr',
        nationality: 'Senegal',
        position: 'Forward',
        statistics: {
            Overall: 89,
            Pace: 90,
            Shooting: 85,
            Passing: 80,
            Dribbling: 88,
            Defending: 40,
            Physical: 75,
        }
    },
    {
        id: 10, 
        name: 'Karim Benzema',
        club: 'Al Ittihad',
        nationality: 'France',
        position: 'Forward',
        statistics: {
            Overall: 90,
            Pace: 75,
            Shooting: 90,
            Passing: 85,
            Dribbling: 88,
            Defending: 40,
            Physical: 80,
        }
    },
    {
        id: 11, 
        name: 'Luka Modrić',
        club: 'Real Madrid',
        nationality: 'Croatia',
        position: 'Midfielder',
        statistics: {
            Overall: 89,
            Pace: 70,
            Shooting: 80,
            Passing: 90,
            Dribbling: 85,
            Defending: 60,
            Physical: 70,
        }
    },
    {
        id: 12, 
        name: 'Alisson Becker',
        club: 'Liverpool',
        nationality: 'Brazil',
        position: 'Goalkeeper',
        statistics: {
            Overall: 90,
            Pace: 60,
            Shooting: 50,
            Passing: 75,
            Dribbling: 60,
            Defending: 70,
            Physical: 85,
        }
    },
    {
        id: 13, 
        name: 'Ederson',
        club: 'Manchester City',
        nationality: 'Brazil',
        position: 'Goalkeeper',
        statistics: {
            Overall: 89,
            Pace: 65,
            Shooting: 55,
            Passing: 80,
            Dribbling: 65,
            Defending: 75,
            Physical: 80,
        }
    },
    {
        id: 14, 
        name: 'Thibaut Courtois',
        club: 'Real Madrid',
        nationality: 'Belgium',
        position: 'Goalkeeper',
        statistics: {
            Overall: 90,
            Pace: 60,
            Shooting: 50,
            Passing: 75,
            Dribbling: 60,
            Defending: 70,
            Physical: 85,
        }
    },
    {
        id: 15, 
        name: 'Son Heung-min',
        club: 'Tottenham Hotspur',
        nationality: 'South Korea',
        position: 'Forward',
        statistics: {
            Overall: 89,
            Pace: 90,
            Shooting: 85,
            Passing: 80,
            Dribbling: 88,
            Defending: 40,
            Physical: 75,
        }
    },
    {
        id: 16, 
        name: 'Harry Kane',
        club: 'Bayern Munich',
        nationality: 'England',
        position: 'Forward',
        statistics: {
            Overall: 90,
            Pace: 75,
            Shooting: 90,
            Passing: 85,
            Dribbling: 80,
            Defending: 40,
            Physical: 80,
        }
    },
    {
        id: 17, 
        name: 'Bruno Fernandes',
        club: 'Manchester United',
        nationality: 'Portugal',
        position: 'Midfielder',
        statistics: {
            Overall: 89,
            Pace: 75,
            Shooting: 85,
            Passing: 90,
            Dribbling: 85,
            Defending: 60,
            Physical: 70,
        }
    },
    {
        id: 18, 
        name: 'Gianluigi Donnarumma',
        club: 'Paris Saint-Germain',
        nationality: 'Italy',
        position: 'Goalkeeper',
        statistics: {
            Overall: 89,
            Pace: 60,
            Shooting: 50,
            Passing: 75,
            Dribbling: 60,
            Defending: 70,
            Physical: 85,
        }
    },
    {
        id: 19, 
        name: 'Joshua Kimmich',
        club: 'Bayern Munich',
        nationality: 'Germany',
        position: 'Midfielder',
        statistics: {
            Overall: 89,
            Pace: 75,
            Shooting: 80,
            Passing: 90,
            Dribbling: 85,
            Defending: 85,
            Physical: 75,
        }
    },
    {
        id: 20, 
        name: 'Rúben Dias',
        club: 'Manchester City',
        nationality: 'Portugal',
        position: 'Defender',
        statistics: {
            Overall: 88,
            Pace: 70,
            Shooting: 60,
            Passing: 80,
            Dribbling: 75,
            Defending: 90,
            Physical: 85,
        }
    }  
    
   
];

export const findAllPlayers = async(): Promise<playerModel[]> => {
    return players;
};

export const findPlayerById = async(id: number): Promise<playerModel | undefined> => {
    return players.find(player => player.id === id);
};


export const insertPlayer = async(player: playerModel) => {
    players.push(player);
}

export const deleteOnePlayer = async(id: number) => {
    const index = players.findIndex(player => player.id === id);
    if (index !== -1) {
        players.splice(index, 1);
        return true;
    }
    return false;
}

export const findAndModifyplayer = async(id: number, statistics: StatisticsModel): Promise<playerModel> => {
    const playerindex = players.findIndex(player => player.id === id);

    if (playerindex !== -1) {
        players[playerindex].statistics = statistics;
    }
    
    return players[playerindex];
}