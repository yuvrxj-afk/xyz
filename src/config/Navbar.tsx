export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  /** Text logo — links home. */
  wordmark: 'yuvrxj',
  navItems: [
    {
      label: 'Work',
      href: '/work-experience',
    },
    {
      label: 'Blogs',
      href: '/blog',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
  ] as NavItem[],
};
