export default Path;
declare class Path {
    constructor({ dataset, edges, factory, graph, term }: {
        dataset: any;
        edges?: any[];
        factory: any;
        graph: any;
        term: any;
    });
    dataset: any;
    edges: any[];
    factory: any;
    _graph: any;
    _term: any;
    get edge(): any;
    get graph(): any;
    get length(): number;
    get startTerm(): any;
    get term(): any;
    get value(): any;
    addIn(predicates: any, subjects: any, callback: any): any;
    addList(predicates: any, items: any): any;
    addOut(predicates: any, objects: any, callback: any): any;
    deleteIn(predicates: any, subjects: any): any;
    deleteList(predicates: any): any;
    deleteOut(predicates: any, objects: any): any;
    execute({ operation, quantifier, start, end, subjects, predicates, objects, graphs, items, callback }: {
        operation: any;
        quantifier: any;
        start: any;
        end: any;
        subjects: any;
        predicates: any;
        objects: any;
        graphs: any;
        items: any;
        callback: any;
    }): any;
    extend(edge: any): any;
    hasIn(predicates: any, subjects: any): any;
    hasOut(predicates: any, objects: any): any;
    in(predicates: any, subjects: any): any;
    isAny(): boolean;
    isList(): boolean;
    list(): {
        [Symbol.iterator](): Generator<any, void, unknown>;
    };
    nodes(): {
        [Symbol.iterator](): Generator<{
            dataset: any;
            term: any;
        }, void, unknown>;
    };
    out(predicates: any, objects: any): any;
    quads(): {
        [Symbol.iterator](): Generator<any, void, unknown>;
    };
    trim(): any;
}
