'use client';
import Link from 'next/link';
import Magnetic from '../UI/Magnetic';
import { usePathname } from 'next/navigation';

export const HeaderNav = ({ navItems }) => {
    const pathname = usePathname();

    return (
        <nav className="invisible sm:visible">
            <ul className="flex justify-end gap-5">
                {navItems.map((link, index) => (
                    <Magnetic key={index}>
                        <li>
                            <Link className={pathname === `${link.href}` ? 'navlink active' : 'navlink'} href={link.href}>
                                {link.label}
                            </Link>
                        </li>
                    </Magnetic>
                ))}
            </ul>
        </nav>
    );
};
