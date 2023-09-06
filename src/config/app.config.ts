interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Recruiter'],
  customerRoles: [],
  tenantRoles: ['Job Seeker', 'Employer', 'Recruiter'],
  tenantName: 'Organization',
  applicationName: 'Hubnugget',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage Organization profile',
    'Invite Job Seekers and Employers to Organization',
    'Manage tasks within Organization',
    'Manage escrow and payment mechanisms within Organization',
  ],
};
