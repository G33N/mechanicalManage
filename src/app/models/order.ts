export interface Order {
    model: string;
    plate: string;
    fuel?: string;
    client: string;
    chassis?: string;
    kilometers: number;
    aux?: boolean;
    stereo?: boolean;
    request: string;
    response: string;
    date: Date;
    outDate: Date;
    employee: string;
    state: string;
    items?: [{
      key: string;
      quantity: number;
    }];
  }
