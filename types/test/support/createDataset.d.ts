export function createPathDataset(data: any, { start, end, term, graph, predicates, add, expect, ...args }?: {
    start?: string;
    end?: string;
    term?: any;
    graph: any;
    predicates?: any[];
    add?: boolean;
    expect: any;
}): {
    term: any;
    graph: any;
    quads: any;
    dataset: any;
    edges: any;
    ptr: Path;
    expectedPtrs: any;
    expectedQuads: any;
    predicates: any[];
};
export function createPathListDataset(data: any, { start, end, terms, graphs, predicates, add, expect, ...args }?: {
    start?: string;
    end?: string;
    terms?: any[];
    graphs?: any[];
    predicates?: any[];
    add?: boolean;
    expect: any;
}): {
    terms: any[];
    graphs: any[];
    quads: any[];
    dataset: any;
    edges: Edge[];
    grapoi: Grapoi;
    ptrs: Path[];
    ptrList: PathList;
    expectedPtrs: any;
    expectedPtrList: PathList;
    expectedQuads: any;
    predicates: any[];
};
import Path from '../../Path.js';
import Edge from '../../Edge.js';
import Grapoi from '../../Grapoi.js';
import PathList from '../../PathList.js';
