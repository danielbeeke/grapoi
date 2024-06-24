export function replaceDataset(oldTerm: any, newTerm: any, { factory }: {
    factory: any;
}): (dataset: any) => void;
export function replaceQuad(oldTerm: any, newTerm: any, { factory }: {
    factory: any;
}): (quad: any) => any;
export function replaceTerm(oldTerm: any, newTerm: any): (term: any) => any;
