import { Input } from "../../components/input.tsx";
import { getCurrentDoc, setDocValue } from "../../utils/current-doc.ts";
import { useEffect, useState } from "react";

export const DemoComponent = () => {
    const [value, setValue] = useState<string>(getCurrentDoc()?.client_name);
    useEffect(() => {
        setDocValue('client_name', value)
    }, [value]);
    return (
        <>
            <Input
                value={value}
                onChange={setValue}
                label={"Client Name"}
            />
        </>
    );
};

DemoComponent.component = 'pms-demo-component';
// DemoComponent.renderInReact = true;
DemoComponent.simulator = {
    doctype: "Appraisal Cycle",
    docname: "2025-26",
}
