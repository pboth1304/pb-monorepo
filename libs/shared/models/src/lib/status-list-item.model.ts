export interface StatusListItem {
  serviceTitle: string;
  serviceDescription: string;
  status: StatusType;
  lastStatusCheck: Date;
}

export type StatusType = 'Online' | 'Offline' | 'Crashed';
