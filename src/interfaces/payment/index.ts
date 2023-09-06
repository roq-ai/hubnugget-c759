import { JobInterface } from 'interfaces/job';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PaymentInterface {
  id?: string;
  amount: number;
  status: string;
  job_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  job?: JobInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PaymentGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  job_id?: string;
  user_id?: string;
}
