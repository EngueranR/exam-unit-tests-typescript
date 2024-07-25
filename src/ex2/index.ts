/*
[1 points]
Dans le fichier src/ex2/index.ts,
écrire l’implémentation de la fonction submitOrder, 
qui prend en argument une commande,
retourne la même commande avec isSubmitted mis à true,
et appelle la fonction sendOrderEmail avec en argument l'identifiant de la commande.
Si la commande a déjà isSubmitted à true, émettre une erreur.
*/

import { sendOrderEmail } from "./lib/email";

export type Order = {
  id: string;
  isSubmitted: boolean;
};

export function submitOrder(order: Order): Order {
  if (order.isSubmitted) {
    throw new Error("La commande a déjà été soumise.");
  } else if (order.id === "" || order.id === undefined || order.id === null) {
    throw new Error("L'identifiant de la commande est requis.");
  }
  order.isSubmitted = true;
  sendOrderEmail(order.id);

  return order;
}
