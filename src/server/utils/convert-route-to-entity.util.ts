const mapping: Record<string, string> = {
  businesses: 'business',
  campaigns: 'campaign',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
