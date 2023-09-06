const mapping: Record<string, string> = {
  applications: 'application',
  jobs: 'job',
  organizations: 'organization',
  payments: 'payment',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
