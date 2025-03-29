import React, { cloneElement, JSX } from 'react'
import { AssignmentOneRelatedProvider } from './AssignmentOneContext';

function ProviderComposer({ contexts, children }: { contexts: React.ReactElement[]; children: JSX.Element }) {
    return contexts.reduce(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (kids, parent: React.ReactElement<any>) =>
            cloneElement(parent, {
                children: kids
            }),
        children
    )
}
export default function ContextProvider({ children }: { children: JSX.Element }) {
    return (
        <ProviderComposer
            contexts={[<AssignmentOneRelatedProvider key="assignment-one" />]}
        >
            {children}
        </ProviderComposer>
    )
}
