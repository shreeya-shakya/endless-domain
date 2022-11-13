export interface DomainAvailability {
  domain: Domain;
  availability: Availability;
}

export interface Availability {
  registered: boolean;
  protected: boolean;
  price: number;
  availableForFree: boolean;
  test: boolean;
}

export interface Domain {
  id: number;
  name: string;
  ownerAddress: null | string;
  resolver: null;
  resolution: {};
  blockchain: string;
  projectedBlockchain: string;
  registryAddress: string;
  networkId: number;
  freeToClaim: boolean;
  node: string;
}
