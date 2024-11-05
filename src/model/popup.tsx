export interface IPopup {
    type: number; // 1: warning, 2: confirmation, 3: danger
    message: string;
    onConfirm?: () => void; // Optionnel pour confirmer l'action
    onClose: () => void; // Fonction pour fermer le popup
}