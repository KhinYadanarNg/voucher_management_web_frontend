export type CustomListBoxProps = {
    setFilter: (setFilter: CustomFilterTypeProps) => void;
    customFilterTypes: CustomFilterTypeProps[];
}

export type CustomFilterTypeProps = {
    id: string;
    value: string;
}
