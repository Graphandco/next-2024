'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

const NextBreadcrumb = ({ homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks }) => {
    const paths = usePathname();
    const pathNames = paths.split('/').filter((path) => path);

    return (
        <div className="breadcrumbs container">
            {pathNames.length > 0 && (
                <span className="breadcrumb-home">
                    Vous êtes ici: <Link href={'/'}>Accueil</Link>
                    <FaLongArrowAltRight />
                </span>
            )}
            {pathNames.map((link, index) => {
                let href = `/${pathNames.slice(0, index + 1).join('/')}`;
                let itemClass = paths === href ? `breadcrumb-item active` : 'breadcrumb-item';
                let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;
                return (
                    <span key={index} className={itemClass}>
                        <Link href={href}>{itemLink}</Link>
                        {pathNames.length !== index + 1 && <FaLongArrowAltRight />}
                    </span>
                );
            })}
        </div>
    );
};

export default NextBreadcrumb;
