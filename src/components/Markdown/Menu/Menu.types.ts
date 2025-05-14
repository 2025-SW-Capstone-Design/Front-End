type MarkdownButton = {
  icon: string;
  markdown: string;
  label: string;
};

type Divider = {
  divider: true;
};

type MenuItem = MarkdownButton | Divider;

export type { MenuItem, MarkdownButton, Divider };
