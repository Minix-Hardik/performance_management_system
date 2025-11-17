import type { ReactNode } from "react";

interface InoutProps {
    label: ReactNode;
    value: string;
    onChange: (value: string) => void;
}

export const Input = (props: InoutProps) => {
    return (
        <label>
            {props.label && <div>{props.label}</div>}
            <input
                className="ef-border ef-border-gray-400 ef-rounded ef-px-2 ef-py-1"
                onChange={e => props.onChange(e.target.value)}
                type="text"
                value={props.value}
            />
        </label>
    );
};
