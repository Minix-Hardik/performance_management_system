import { customComponents } from "../../index.tsx";
import { Link } from "react-router-dom";

const ComponentItem = ({ tag }: { tag: string }) => {
    return <Link
        to={`/${tag}`}
        className='ef-p-2 ef-inline-block ef-border ef-m-1 ef-rounded ef-border-gray-500'
    >
        {tag}
    </Link>
}

export const ComponentList = () => {
    return (
        <div>
            {customComponents.map(cc => {
                return <ComponentItem key={cc.tag} tag={cc.tag} />;
            })}
        </div>
    );
};
