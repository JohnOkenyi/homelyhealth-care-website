export type User = {
  id: string;
  email: string;
  role: 'staff' | 'admin';
  first_name: string;
  last_name: string;
  phone?: string;
  status: 'active' | 'inactive' | 'on_leave';
};

export type Shift = {
  id: string;
  date: string;
  start_time: string;
  end_time: string;
  location: string;
  area: string;
  service_type: string;
  status: 'unassigned' | 'assigned' | 'confirmed' | 'completed' | 'cancelled';
};
