type Props = {
    category: string;
    amount: number;
}

export default function UserProfileStatsUnit({category, amount}: Props) {
    return (
        <div>
            <p>{category}</p>
            <p>{amount}</p>
        </div>
    );
};
