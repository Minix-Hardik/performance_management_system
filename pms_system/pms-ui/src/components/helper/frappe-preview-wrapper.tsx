import type { ReactNode } from "react";

interface FrappeComponentProps {
    children: ReactNode;
}

export const FrappePreviewWrapper = (props: FrappeComponentProps) => {
    return (
        <div className='ef-border ef-p-1 ef-m-2 ef-border-gray-500 ef-rounded'>
            {props.children}
        </div>
    );
};
