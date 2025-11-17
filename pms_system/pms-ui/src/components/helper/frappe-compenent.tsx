import type { ReactNode } from "react";
import { FrappeProvider } from "frappe-react-sdk";

interface FrappeComponentProps {
    children: ReactNode;
}

export const FrappeComponent = (props: FrappeComponentProps) => {
    return (
        <FrappeProvider enableSocket={false} customHeaders={{
            "x-frappe-csrf-token": window.frappe?.csrf_token
        }}>
            {props.children}
        </FrappeProvider>
    );
};

