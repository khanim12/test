export interface UserType {
  name?: string;
  id?: number;
  email?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
  };
  address?: {
    street?: string;
    city?: string;
  };
  phone?: string;
  username?: string;
  website?: string;
}
