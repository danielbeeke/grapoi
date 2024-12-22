export default Grapoi;
/**
 * A graph pointer object
 * @extends PathList
 */
declare class Grapoi extends PathList {
    _toTerm(value: any): any;
    _toTermArray(values: any): any;
    /**
     * Add quad(s) with the current terms as the object
     * @param {Grapoi|Grapoi[]|Term|Term[]} predicates Predicates of the quads
     * @param {Grapoi|Grapoi[]|Term|Term[]} [subjects] Subjects of the quads
     * @param {function} [callback] Function called for each subject as a pointer argument
     * @returns {Grapoi} this
     */
    addIn(predicates: Grapoi | Grapoi[] | Term | Term[], subjects?: Grapoi | Grapoi[] | Term | Term[], callback?: Function): this;
    /**
     * Add list(s) with the given items
     * @param {Grapoi|Grapoi[]|Term|Term[]} predicates Predicates of the lists
     * @param {Grapoi|Grapoi[]|Term|Term[]} [items] List items
     * @returns {Grapoi} this
     */
    addList(predicates: Grapoi | Grapoi[] | Term | Term[], items?: Grapoi | Grapoi[] | Term | Term[]): this;
    /**
     * Add quad(s) with the current terms as the subject
     * @param {Grapoi|Grapoi[]|Term|Term[]} predicates Predicates of the quads
     * @param {Grapoi|Grapoi[]|Term|Term[]} [objects] Objects of the quads
     * @param {function} [callback] Function called for each subject as a pointer argument
     * @returns {Grapoi} this
     */
    addOut(predicates: Grapoi | Grapoi[] | Term | Term[], objects?: Grapoi | Grapoi[] | Term | Term[], callback?: Function): this;
    /**
     * Base all terms with a relative IRI with the given base.
     * @param {Grapoi|Grapoi[]|Term|Term[]} base Base of the terms
     * @returns {Grapoi} Instance with a single pointer with the term based
     */
    base(base: Grapoi | Grapoi[] | Term | Term[]): this;
    /**
     * Use the given score function on all pointers and return the pointer with the best score.
     * @param {function} score Score function
     * @returns {Grapoi} Instance with a single pointer with the best score
     */
    best(score: Function): this;
    /**
     * Delete quad(s) with the current terms as the object.
     * @param {Grapoi|Grapoi[]|Term|Term[]} predicates Predicates of the quads
     * @param {Grapoi|Grapoi[]|Term|Term[]} [subjects] Subjects of the quads
     * @returns {Grapoi} this
     */
    deleteIn(predicates?: Grapoi | Grapoi[] | Term | Term[], subjects?: Grapoi | Grapoi[] | Term | Term[]): this;
    /**
     * Delete list(s).
     * @param {Grapoi|Grapoi[]|Term|Term[]} predicates Predicates of the lists
     * @returns {Grapoi} this
     */
    deleteList(predicates?: Grapoi | Grapoi[] | Term | Term[]): this;
    /**
     * Delete quad(s) with the current terms as the subject.
     * @param {Grapoi|Grapoi[]|Term|Term[]} predicates Predicates of the quads
     * @param {Grapoi|Grapoi[]|Term|Term[]} [objects] Objects of the quads
     * @returns {Grapoi} this
     */
    deleteOut(predicates: Grapoi | Grapoi[] | Term | Term[], objects?: Grapoi | Grapoi[] | Term | Term[]): this;
    /**
     * Filter the pointers based on matching quad(s) with the current terms as the object.
     * @param {Grapoi|Grapoi[]|Term|Term[]} predicates Predicates of the quads
     * @param {Grapoi|Grapoi[]|Term|Term[]} [subjects] Subjects of the quads
     * @returns {Grapoi} Instance that contains only the filtered pointers
     */
    hasIn(predicates?: Grapoi | Grapoi[] | Term | Term[], subjects?: Grapoi | Grapoi[] | Term | Term[]): this;
    /**
     * Filter the pointers based on matching quad(s) with the current terms as the subject.
     * @param {Grapoi|Grapoi[]|Term|Term[]} predicates Predicates of the quads
     * @param {Grapoi|Grapoi[]|Term|Term[]} [objects] Objects of the quads
     * @returns {Grapoi} Instance that contains only the filtered pointers
     */
    hasOut(predicates: Grapoi | Grapoi[] | Term | Term[], objects?: Grapoi | Grapoi[] | Term | Term[]): this;
    /**
     * Traverse the graph with the current terms as the object.
     * @param {Grapoi|Grapoi[]|Term|Term[]} predicates Predicates of the quads
     * @param {Grapoi|Grapoi[]|Term|Term[]} [subjects] Subjects of the quads
     * @returns {Grapoi} Instance with pointers of the traversed target terms
     */
    in(predicates?: Grapoi | Grapoi[] | Term | Term[], subjects?: Grapoi | Grapoi[] | Term | Term[]): this;
    /**
     * Traverse the graph with the current terms as the subject.
     * @param {Grapoi|Grapoi[]|Term|Term[]} predicates Predicates of the quads
     * @param {Grapoi|Grapoi[]|Term|Term[]} [objects] Objects of the quads
     * @returns {Grapoi} Instance with pointers of the traversed target terms
     */
    out(predicates?: Grapoi | Grapoi[] | Term | Term[], objects?: Grapoi | Grapoi[] | Term | Term[]): this;
    /**
     * Jump to random terms.
     * @param {Grapoi|Grapoi[]|Term|Term[]} predicates Terms for the new pointers
     * @returns {Grapoi} Instance with pointers of the selected terms
     */
    node(terms?: any): this;
    /**
     * Rebase all terms of the current pointers with a new base.
     * @param {Grapoi|Grapoi[]|Term|Term[]} base New base of the terms
     * @returns {Grapoi} Instance with a single pointer with the new base as the term
     */
    rebase(base: Grapoi | Grapoi[] | Term | Term[]): this;
    /**
     * Replace all terms of the current pointers with another term.
     * @param {Grapoi|Grapoi[]|Term|Term[]} replacement Term used as replacement
     * @returns {Grapoi} Instance with a single pointer with the replacement as the term
     */
    replace(replacement: Grapoi | Grapoi[] | Term | Term[]): this;
    /**
     * Score the pointers and sort them by score value.
     * @param {Function} score @rdfjs/score compatible score function
     * @param {Number} [limit] Limit for the result pointers
     * @param {Number} [offset] Offset for the result pointers
     * @returns {Grapoi} Instance of the scored pointers, sorted and sliced.
     */
    score(score: Function, { limit, offset }?: { limit: number, offset: number }): this;
}
import { Term } from '@rdfjs/types';
import PathList from './PathList.js';

