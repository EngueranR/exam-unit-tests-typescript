/* 
[3 points]
Ecrire les tests correspondants à tous les cas que vous jugez 
pertinent de tester. La fonction sendOrderEmail ne 
doit pas être réellement appelée, elle doit 
être remplacée par un bouchon (mock).
*/

import { submitOrder, Order } from "./index";
import { sendOrderEmail } from "./lib/email";

jest.mock("./lib/email");

describe("submitOrder", () => {
  it("Définir le paramètre isSubmitted de la commande à true, et exécute sendOrderEmail", () => {
    const order: Order = {
      id: "ORDER_1234",
      isSubmitted: false,
    };
    submitOrder(order);
    expect(order.isSubmitted).toBe(true);
    expect(sendOrderEmail).toHaveBeenCalledWith(order.id);
  });

  it("Retourne une erreur si la commande est déjà envoyé", () => {
    const order: Order = {
      id: "ORDER_1234",
      isSubmitted: true,
    };

    expect(() => submitOrder(order)).toThrow("La commande a déjà été soumise.");
    expect(sendOrderEmail).not.toHaveBeenCalled();
  });

  it("Retourne une erreur si la commande n'a pas d'identifiant", () => {
    const order: Order = {
      id: "",
      isSubmitted: false,
    };

    expect(() => submitOrder(order)).toThrow(
      "L'identifiant de la commande est requis."
    );
    expect(sendOrderEmail).not.toHaveBeenCalled();
  });
});
