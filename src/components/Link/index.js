import NextLink from 'next/link';

export default function Link({ chidren, href, ...props }){
    return (
        <div>
            <NextLink href={href}>
            <a {...props}>{children}</a>
            </NextLink>
        </div>
    );
}