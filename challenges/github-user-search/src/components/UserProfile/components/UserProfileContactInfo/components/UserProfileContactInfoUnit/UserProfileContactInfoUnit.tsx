import type {ComponentType} from 'react';

type Props = {
    Icon: ComponentType;
}
export default function UserProfileContactInfoUnit({Icon}: Props) {
    return (
        <div>
            <Icon/>
            Name
        </div>
    );
};
