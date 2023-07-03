import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface CampaignInterface {
  id?: string;
  name: string;
  description?: string;
  business_id?: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface CampaignGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  business_id?: string;
}
