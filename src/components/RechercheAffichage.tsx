import React, { useState, useEffect } from 'react';
import { IRecette } from '../model/recette';
import RecetteComponent from './recetteComponents';
import { getRecetteTitre } from '../apiService';

const RechercheRecette = () => {
    const [searchTerm, setSearchTerm] = useState('');
    

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    

    return (
        <div className="flex w-screen min-h-screen bg-gray-100">
            <aside className="w-1/6 bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-5">Menu</h2>
                <nav>
                    <ul>
                        <li className="mb-2"><a href="/" className="text-gray-300 hover:text-white">Accueil</a></li>
                        <li className="mb-2"><a href="/ajouter" className="text-gray-300 hover:text-white">Ajout</a></li>
                        <li className="mb-2"><a href="/recherche" className="text-gray-300 hover:text-white">Recherche</a></li>
                    </ul>
                </nav>
            </aside>

            <main className="w-4/5 p-6">
                <section>
                    <h2 className="text-3xl font-bold mb-4 text-black">Rechercher une recette</h2>
                    <input
                        type="text"
                        placeholder="Rechercher par titre..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="border border-gray-300 p-2 rounded-lg w-full mb-4 text-black bg-white"
                    />
                    <div>
                        <p className="text-black">Résultats pour : "{searchTerm}"</p>
                    </div>
                    <br />
                </section>
                
            </main>
        </div>
    );
};

export default RechercheRecette;
