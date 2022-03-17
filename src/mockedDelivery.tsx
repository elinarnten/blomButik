export const deliveryAlternatives: DeliveryOption[] = [
  {
    id: "1",
    company: "Schenker utlämningsställe.",
    price: 40,
    label: "2 arbetsdagar. (40.00SEK)",
    deliveryTime: 2,
  },
  {
    id: "2",
    company: "Postens utlämningsställe.",
    price: 19,
    label: "4 arbetsdagar. (19.00SEK)",
    deliveryTime: 4,
  },
  {
    id: "3",
    company: "BudBee hemleverans.",
    price: 60,
    label: "1 arbetsdagar. (60.00SEK)",
    deliveryTime: 1,
  },
];

export interface DeliveryOption {
  id: string;
  company: string;
  price: number;
  label: string;
  deliveryTime: number;
}
