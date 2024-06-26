export default multi;
declare namespace multi {
    export function addIn(): {
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
    export function addInNoSubject(): {
        edges: Edge[];
        expectedGrapois: Grapoi[];
        expectedPtrs: any;
        terms: any[];
        graphs: any[];
        quads: any[];
        dataset: any;
        grapoi: Grapoi;
        ptrs: Path[];
        ptrList: PathList;
        expectedPtrList: PathList;
        expectedQuads: any;
        predicates: any[];
    };
    export function addInGraphs(): {
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
    export function addInPath(): {
        edges: Edge[];
        expectedGrapois: Grapoi[];
        expectedPtrLists: PathList[];
        grapoi: Grapoi;
        ptrList: PathList;
        terms: any[];
        graphs: any[];
        quads: any[];
        dataset: any;
        ptrs: Path[];
        expectedPtrs: any;
        expectedPtrList: PathList;
        expectedQuads: any;
        predicates: any[];
    };
    export function addList(): {
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
    export function addListEmpty(): {
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
    export function addListGraphs(): {
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
    export function addOut(): {
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
    export function addOutNoObject(): {
        edges: Edge[];
        expectedGrapois: Grapoi[];
        expectedPtrs: any;
        terms: any[];
        graphs: any[];
        quads: any[];
        dataset: any;
        grapoi: Grapoi;
        ptrs: Path[];
        ptrList: PathList;
        expectedPtrList: PathList;
        expectedQuads: any;
        predicates: any[];
    };
    export function addOutGraphs(): {
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
    export function addOutPath(): {
        edges: Edge[];
        expectedGrapois: Grapoi[];
        expectedPtrLists: PathList[];
        grapoi: Grapoi;
        ptrList: PathList;
        terms: any[];
        graphs: any[];
        quads: any[];
        dataset: any;
        ptrs: Path[];
        expectedPtrs: any;
        expectedPtrList: PathList;
        expectedQuads: any;
        predicates: any[];
    };
    export function any(): {
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
    export function base(): {
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
        expectedGrapoi: Grapoi;
        expectedTerm: any;
    };
    export function best(): {
        terms: any[];
        graphs: any[];
        quads: any[];
        edges: Edge[];
        grapoi: Grapoi;
        ptrs: Path[];
        ptrList: PathList;
        expectedPtrs: any;
        expectedPtrList: PathList;
        expectedQuads: any;
        predicates: any[];
        expectedGrapoi: Grapoi;
    };
    export function clonePtrs(): {
        terms: any[];
        graphs: any[];
        quads: any[];
        dataset: any;
        edges: Edge[];
        grapoi: Grapoi;
        expectedPtrs: any;
        expectedPtrList: PathList;
        expectedQuads: any;
        predicates: any[];
        ptrList: PathList;
        ptrs: Path[];
    };
    export function constructorGraphs(): {
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
    export function constructorPtrsVsTerms(): {
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
    function _default(): {
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
    export { _default as default };
    export function deleteIn(): {
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
    export function deleteInSubjects(): {
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
    export function deleteList(): {
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
    export function deleteOut(): {
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
    export function deleteOutObjects(): {
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
    export function empty(): {
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
    export function execute(): {
        dataset: any;
        edges: Edge[];
        expectedGrapoi: Grapoi;
        expectedPtrList: PathList;
        terms: any[];
        graphs: any[];
        quads: any[];
        grapoi: Grapoi;
        ptrs: Path[];
        ptrList: PathList;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function executeAll(): {
        dataset: any;
        expectedGrapoi: Grapoi;
        expectedPtrList: PathList;
        instructions: {
            start: string;
            end: string;
            predicates: any[];
        }[];
        predicates: any[];
        quads: any[];
        terms: any[];
        graphs: any[];
        edges: Edge[];
        grapoi: Grapoi;
        ptrs: Path[];
        ptrList: PathList;
        expectedPtrs: any;
        expectedQuads: any;
    };
    function _in(): {
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
    export { _in as in };
    export function inSubjects(): {
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
    export function iterator(): {
        expectedGrapois: PathList[];
        expectedPtrLists: PathList[];
        graphs: any[];
        quads: any[];
        edges: Edge[];
        grapoi: Grapoi;
        ptrs: Path[];
        ptrList: PathList;
        expectedPtrs: any;
        expectedPtrList: PathList;
        expectedQuads: any;
        predicates: any[];
    };
    export function hasIn(): {
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
    export function hasInSubject(): {
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
    export function hasOut(): {
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
    export function hasOutObjects(): {
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
    export function list(): {
        dataset: any;
        edges: Edge[];
        grapoi: Grapoi;
        items: any[];
        ptrList: PathList;
        terms: any[];
        graphs: any[];
        quads: any[];
        ptrs: Path[];
        expectedPtrs: any;
        expectedPtrList: PathList;
        expectedQuads: any;
        predicates: any[];
    };
    export function out(): {
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
    export function outObjects(): {
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
    export function quads(): {
        ptrList: PathList;
        terms: any[];
        graphs: any[];
        quads: any[];
        dataset: any;
        grapoi: Grapoi;
        ptrs: Path[];
        expectedPtrs: any;
        expectedPtrList: PathList;
        expectedQuads: any;
        predicates: any[];
    };
    export function rebase(): {
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
        expectedGrapoi: Grapoi;
        expectedTerm: any;
    };
    export function rebaseEmpty(): {
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
        expectedGrapoi: Grapoi;
        expectedTerm: any;
    };
    export function rebaseRelative(): {
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
        expectedGrapoi: Grapoi;
        expectedTerm: any;
    };
    export function replace(): {
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
        expectedGrapoi: Grapoi;
        expectedTerm: any;
    };
    export function score(): {
        terms: any[];
        graphs: any[];
        quads: any[];
        edges: Edge[];
        grapoi: Grapoi;
        ptrs: Path[];
        ptrList: PathList;
        expectedPtrs: any;
        expectedPtrList: PathList;
        expectedQuads: any;
        predicates: any[];
        expectedGrapoi: Grapoi;
    };
    export function trim(): {
        dataset: any;
        edges: Edge[];
        expectedPtrList: PathList;
        ptrList: PathList;
        terms: any[];
        graphs: any[];
        quads: any[];
        grapoi: Grapoi;
        ptrs: Path[];
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    import clone = out;
    export { clone };
    import constructorPtrs = out;
    export { constructorPtrs };
    import filter = out;
    export { filter };
    import map = out;
    export { map };
}
import Edge from '../../Edge.js';
import Grapoi from '../../Grapoi.js';
import Path from '../../Path.js';
import PathList from '../../PathList.js';
