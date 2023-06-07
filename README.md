# Application Backend Express

Il s'agit d'une application backend construite avec Express.js. Elle fournit des endpoints d'API pour gérer les données des produits.


## Endpoints

| Resource           | POST                  | GET                            | PATCH                                    | PUT | DELETE           |
| ------------------ | --------------------- | ------------------------------ | ---------------------------------------- | --- | ---------------- |
| **/products**      | Create a new products | Retrieve all products          | X                                        | X   |     X            |
| **/products/1**    | X                     | Retrieve details for product 1 | Update details of product 1 if it exists | X   | Remove product 1 |

### Récupérer tous les produits

- **URL :** `/products`
- **Méthode :** `GET`
- **Description :** Récupère la liste de tous les produits.
- **Réponse :** Un tableau d'objets produit.

### Récupérer les détails d'un produit spécifique

- **URL :** `/products/:id`
- **Méthode :** `GET`
- **Description :** Récupère les détails d'un produit spécifique.
- **Paramètres :**
  - `id` : L'ID du produit.
- **Réponse :** L'objet produit s'il est trouvé, ou un message d'erreur s'il n'est pas trouvé.

### Créer un nouveau produit

- **URL :** `/products`
- **Méthode :** `POST`
- **Description :** Crée un nouveau produit.
- **Corps de la requête :** Un objet JSON contenant les données du produit (voir ci-dessous pour les champs requis).
- **Réponse :** Le nouvel objet produit créé.

### Mettre à jour les détails d'un produit spécifique

- **URL :** `/products/:id`
- **Méthode :** `PATCH`
- **Description :** Met à jour les détails d'un produit spécifique.
- **Paramètres :**
  - `id` : L'ID du produit.
- **Corps de la requête :** Un objet JSON contenant les données mises à jour du produit (voir ci-dessous pour les champs disponibles).
- **Réponse :** L'objet produit mis à jour s'il est trouvé, ou un message d'erreur s'il n'est pas trouvé.

### Supprimer un produit spécifique

- **URL :** `/products/:id`
- **Méthode :** `DELETE`
- **Description :** Supprime un produit spécifique.
- **Paramètres :**
  - `id` : L'ID du produit.
- **Réponse :** Un message de succès si le produit est trouvé et supprimé, ou un message d'erreur s'il n'est pas trouvé.

## Données des produits

Un produit a les caractéristiques suivantes : 

``` typescript
class Product {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  inventoryStatus: string;
  category: string;
  image?: string;
  rating?: number;
}
```
