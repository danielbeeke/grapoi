export default Edge;
declare class Edge {
    constructor({ dataset, end, quad, start }: {
        dataset: any;
        end: any;
        quad: any;
        start: any;
    });
    dataset: any;
    end: any;
    quad: any;
    start: any;
    get term(): any;
    get graph(): any;
    get startTerm(): any;
}
