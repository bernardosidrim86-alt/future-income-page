/** Planos de assinatura exibidos na página. Edite valores livremente. */
export interface Plan {
  id: string;
  label: string;
  discount?: string;
  price: string;
}

export const SUBSCRIPTION: Plan = { id: "1m", label: "1 mês", price: "R$ 0,00" };
export const PROMOTIONS: Plan[] = [
  { id: "3m", label: "3 meses", discount: "(0% de desconto)", price: "R$ 0,00" },
  { id: "6m", label: "6 meses", discount: "(0% de desconto)", price: "R$ 0,00" },
];

/**
 * Ponto único de integração do gateway de pagamento.
 * Todos os botões de pagamento chamam esta função — implemente seu gateway aqui.
 */
export function handlePayment(plan: Plan): void {
  // TODO: integrar gateway de pagamento
  void plan;
}
