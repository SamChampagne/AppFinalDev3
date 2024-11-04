import FormulaireAjout from './FormAjout'; // Assurez-vous que le chemin est correct

const MenuAjout = () => {
    return (
    <div className="min-h-screen w-screen flex bg-gray-100">
        <aside className="w-1/5 bg-gray-800 text-white p-4"> 
        <h2 className="text-2xl font-bold mb-5">Menu</h2>
        <nav>
            <ul>
            <li className="mb-2"><a href="/" className="text-gray-300 hover:text-white">Accueil</a></li>
            <li className="mb-2"><a href="/ajouter" className="text-gray-300 hover:text-white">Ajout</a></li>
            <li className="mb-2"><a href="/recherche" className="text-gray-300 hover:text-white">Recherche</a></li>
            </ul>
        </nav>
        </aside>

        <main className="flex-1 p-10 bg-gray-100"> 
        <FormulaireAjout />
        </main>
    </div>
    );
};

export default MenuAjout;
