import { type FC, type ReactNode } from "react";

type InfoBoxProps = {
    mode: 'hint' | 'warning';
    children: ReactNode;
}

const InfoBox: FC<InfoBoxProps> = (props) => {
    const { mode, children } = props;

    if (mode === 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        );
    }
    return (
        <aside className="infobox infobox-warning warning--low">
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    );
}

export default InfoBox;