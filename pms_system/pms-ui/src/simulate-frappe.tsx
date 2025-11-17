import { useFrappeGetDoc } from "frappe-react-sdk";
import { type ReactNode, useEffect, useState } from "react";
import { customComponents } from "./index.tsx";

export const SimulateFrappeEnv = ({ children, component }: {
    children: ReactNode,
    component: typeof customComponents[number]
}) => {
    const { doctype, docname } = component.simulator || {};
    const [dataFetched, setDataFetched] = useState(false);

    const doc = useFrappeGetDoc(doctype, docname, undefined, {
        isPaused: () => !(doctype && docname)
    });

    useEffect(() => {
        if (!doc.data) return;
        (window as any).frappe = (window as any).frappe || {};
        (window as any).cur_frm = (window as any).cur_frm || {};

        Object.assign((window as any).cur_frm, {
            doc: doc.data,
            docname,
            doctype
        });

        setDataFetched(true);
    }, [doc.data, docname, doctype]);

    if (!component.simulator) {
        (window as any).cur_frm = {};
        return children;
    }

    if (doc.error) {
        return doc.error.message;
    }

    if (!dataFetched) {
        return "Loading...";
    }

    return children;
};
