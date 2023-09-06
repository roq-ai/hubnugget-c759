import { ApplicationInterface } from 'interfaces/application';
import { PaymentInterface } from 'interfaces/payment';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description: string;
  organization_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  payment?: PaymentInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    application?: number;
    payment?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  organization_id?: string;
  user_id?: string;
}
