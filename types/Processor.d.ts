export default Processor;
declare class Processor {
    static add({ ptr, start, end, subjects, predicates, objects, graphs, callback }?: {
        ptr: any;
        start: any;
        end: any;
        subjects?: any[];
        predicates?: any[];
        objects?: any[];
        graphs: any;
        callback: any;
    }): any;
    static addList({ ptr, predicates, items, graphs }: {
        ptr: any;
        predicates: any;
        items: any;
        graphs: any;
    }): any;
    static delete({ ptr, start, subjects, predicates, objects }: {
        ptr: any;
        start: any;
        subjects?: any[];
        predicates?: any[];
        objects?: any[];
    }): any;
    static deleteList({ ptr, predicates }: {
        ptr: any;
        predicates: any;
    }): any;
    static execute({ ptr, operation, quantifier, start, end, subjects, predicates, objects, graphs, items, callback }?: {
        ptr: any;
        operation?: string;
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
    static isList({ ptr }: {
        ptr: any;
    }): boolean;
    static list({ ptr }: {
        ptr: any;
    }): {
        [Symbol.iterator](): Generator<any, void, unknown>;
    };
    static traverse({ ptr, quantifier, start, end, subjects, predicates, objects, graphs, callback }: {
        ptr: any;
        quantifier?: string;
        start?: string;
        end?: string;
        subjects?: any[];
        predicates?: any[];
        objects?: any[];
        graphs?: any[];
        callback: any;
    }): any;
    static traverseMore({ ptrs, end, start, subjects, predicates, objects, graphs, callback }?: {
        ptrs: any;
        end: any;
        start: any;
        subjects: any;
        predicates: any;
        objects: any;
        graphs: any;
        callback: any;
    }): any[];
    static traverseOne({ ptr, start, end, subjects, predicates, objects, graphs, callback }?: {
        ptr: any;
        start: any;
        end: any;
        subjects: any;
        predicates: any;
        objects: any;
        graphs: any;
        callback?: (edge: any, ptr: any) => any;
    }): any[];
}
