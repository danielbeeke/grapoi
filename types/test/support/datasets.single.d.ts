export default single;
declare namespace single {
    export function addIn(): {
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
    export function addInGraph(): {
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
    export function addList(): {
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
    export function addListAny(): {
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
    export function addListEmpty(): {
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
    export function addListGraph(): {
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
    export function addOut(): {
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
    export function addOutGraph(): {
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
    export function addOutNoFactory(): {
        ptr: Path;
        term: any;
        graph: any;
        quads: any;
        dataset: any;
        edges: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function any(): {
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
    export function deleteIn(): {
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
    function _default(): {
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
    export { _default as default };
    export function defaultGraph(): {
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
    export function deleteList(): {
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
    export function deleteListEmpty(): {
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
    export function deleteListFirst0(): {
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
    export function deleteListFirst2(): {
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
    export function deleteListRest0(): {
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
    export function deleteListRest2(): {
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
    export function deleteObjectSubject(): {
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
    export function deleteOut(): {
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
    export function deleteSubjectObject(): {
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
    export function deleteSubjectPredicate(): {
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
    export function extend(): {
        edges: any;
        expectedQuads: Path;
        ptr: Path;
        term: any;
        graph: any;
        quads: any;
        dataset: any;
        expectedPtrs: any;
        predicates: any[];
    };
    export function extendGraph(): {
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
    export function extendGraphNull(): {
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
    export function graphEdges(): {
        edges: any;
        ptr: Path;
        term: any;
        graph: any;
        quads: any;
        dataset: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function graphEdgesNull(): {
        edges: any;
        ptr: Path;
        term: any;
        graph: any;
        quads: any;
        dataset: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function hasIn(): {
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
    export function hasInGraph(): {
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
    export function hasInSubjects(): {
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
    export function hasOut(): {
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
    export function hasOutGraph(): {
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
    export function hasOutObjects(): {
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
    function _in(): {
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
    export { _in as in };
    export function inGraph(): {
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
    export function inSubjects(): {
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
    export function isList(): {
        edges: any;
        ptr: Path;
        term: any;
        graph: any;
        quads: any;
        dataset: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function isListEmpty(): {
        edges: any;
        ptr: Path;
        term: any;
        graph: any;
        quads: any;
        dataset: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function length(): {
        dataset: any;
        ptr: Path;
        term: any;
        graph: any;
        edges: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function list(): {
        edges: any;
        ptr: Path;
        term: any;
        graph: any;
        quads: any;
        dataset: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function listEmpty(): {
        edges: any;
        ptr: Path;
        term: any;
        graph: any;
        quads: any;
        dataset: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function listFirst0(): {
        edges: any;
        ptr: Path;
        term: any;
        graph: any;
        quads: any;
        dataset: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function listFirst2(): {
        edges: any;
        ptr: Path;
        term: any;
        graph: any;
        quads: any;
        dataset: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function listRest0(): {
        edges: any;
        ptr: Path;
        term: any;
        graph: any;
        quads: any;
        dataset: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function listRest2(): {
        edges: any;
        ptr: Path;
        term: any;
        graph: any;
        quads: any;
        dataset: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function nodes(): {
        dataset: any;
        ptr: Path;
        term: any;
        graph: any;
        edges: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    export function out(): {
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
    export function outGraph(): {
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
    export function outObjects(): {
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
    export function traverseOneObject(): {
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
    export function traverseOneOrMore(): {
        edges: any;
        expectedQuads: Path[];
        term: any;
        graph: any;
        quads: any;
        dataset: any;
        ptr: Path;
        expectedPtrs: any;
        predicates: any[];
    };
    export function traverseOnePtrTerm(): {
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
    export function traverseOneSubject(): {
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
    export function traverseZeroOrMore(): {
        dataset: any;
        edges: any;
        expectedQuads: Path[];
        term: any;
        graph: any;
        quads: any;
        ptr: Path;
        expectedPtrs: any;
        predicates: any[];
    };
    export function traverseZeroOrMoreSelfRef(): {
        dataset: any;
        edges: any;
        expectedQuads: Path[];
        term: any;
        graph: any;
        quads: any;
        ptr: Path;
        expectedPtrs: any;
        predicates: any[];
    };
    export function traverseZeroOrMoreSelfRef2(): {
        dataset: any;
        edges: any;
        expectedQuads: Path[];
        term: any;
        graph: any;
        quads: any;
        ptr: Path;
        expectedPtrs: any;
        predicates: any[];
    };
    export function traverseZeroOrOne(): {
        dataset: any;
        edges: any;
        expectedQuads: Path[];
        term: any;
        graph: any;
        quads: any;
        ptr: Path;
        expectedPtrs: any;
        predicates: any[];
    };
    export function trim(): {
        dataset: any;
        expectedPtr: Path;
        ptr: Path;
        quads: any;
        term: any;
        graph: any;
        edges: any;
        expectedPtrs: any;
        expectedQuads: any;
        predicates: any[];
    };
    import constructorEdges = out;
    export { constructorEdges };
    import constructorEdgesTerm = out;
    export { constructorEdgesTerm };
    import constructorEdgesGraph = outGraph;
    export { constructorEdgesGraph };
    import executeAddList = addList;
    export { executeAddList };
    import executeAddOut = addOut;
    export { executeAddOut };
    import executeStartEnd = in;
    export { executeStartEnd };
    import executeObjects = out;
    export { executeObjects };
    import executePredicates = out;
    export { executePredicates };
    import executeQuantifier = traverseOneOrMore;
    export { executeQuantifier };
    import executeSubject = in;
    export { executeSubject };
    import quadsEdges = nodes;
    export { quadsEdges };
    import startTerm = out;
    export { startTerm };
    import traverseOne = out;
    export { traverseOne };
    import traverseOnePredicate = in;
    export { traverseOnePredicate };
    import value = out;
    export { value };
}
import Path from '../../Path.js';
