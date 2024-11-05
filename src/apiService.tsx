import { IRecette } from './model/recette';

const URL = 'https://apifinaldev3.onrender.com/api';

export const getRecettes = async (): Promise<IRecette[]> => {
    const response = await fetch(`${URL}/recette`);

    if (!response.ok) {
        throw new Error('Connection à l\'API non fonctionnelle');
    }

    const data = await response.json();
    
    return data.recettes; 
};
export const getRecetteById = async (id: string): Promise<IRecette> => {
    const response = await fetch(`${URL}/recette/${id}`);

    if (!response.ok) {
        throw new Error('Erreur de connexion à l\'API');
    }
    
    const data = await response.json();
    return data as IRecette; 
};
export const ajouterRecettes = async (nouvelleRecette: IRecette): Promise<IRecette> => {
    const response = await fetch(`${URL}/recette`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nouvelleRecette)
    });

    if (!response.ok) {
        throw new Error('Erreur lors de l’ajout de la recette');
    }

    const data = await response.json();
    return data as IRecette;
};

export const getRecetteTitre = async (titre: string): Promise<IRecette> => {
    const response = await fetch(`${URL}/recette/title/${titre}`)

    if(!response.ok){
        throw new Error('Erreur lors de la recherche par titre')
    }
    
    const data = await response.json();
    return data as IRecette
}

export const supprimerRecette = async (id: string | undefined): Promise<void> => {

    const response = await fetch(`${URL}/recette/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        
    });

    if(!response.ok){
        throw new Error('Erreur lors de la suppression')
    }

    return 
}
