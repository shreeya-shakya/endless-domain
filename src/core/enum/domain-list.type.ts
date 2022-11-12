import { DOMAIN_STATUS } from "./domain-status.enum";

export interface DomainListItem {
  name: string;
  price: number;
  status: DOMAIN_STATUS;
}
