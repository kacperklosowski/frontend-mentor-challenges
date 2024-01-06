import type {ComponentType} from 'react';

type Props = {
    Icon: ComponentType;
    label: string | null;
}
export default function UserProfileContactInfoUnit({Icon, label}: Props) {
    return (
        <div>
            <Icon/>
            {label}
        </div>
    );
};
