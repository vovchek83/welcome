import * as React from 'react';

export interface ICardProps {
    children?: React.ReactNode;
    title: string;
    childrenClassName?: string;
}

export default function Card({ children, title, childrenClassName }: ICardProps) {
    return (
        <div className='p-4 rounded-xl bg-zinc-900 shadow-md flex flex-col gap-4'>
            <h2 className='text-2xl font-bold mb-4'>{title}</h2>
            <div className={childrenClassName}> {children} </div>
        </div>
    );
}
