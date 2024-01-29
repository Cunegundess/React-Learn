export type ItemProps = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}[];

export type FormProps = {
  onAddItems: (item: ItemType) => void;
};

export type PackingListProps = {
  items: ItemType[];
  item: ItemProps[number];
  // onDeleteItem: MouseEventHandler<HTMLButtonElement> | undefined;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearList?: () => void;
};

export type StatsProps = {
  items: ItemType[];
};

export type ItemType = {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
};
