export interface Graph {

    buildGraph() : void;
    getEdges() : Array<Edge>
    getNodes() : Array<Node>

}

export interface Edge {

    nodeA : Node;
    nodeB : Node;

    label : string;
    color : string;

}

export interface Node {

    label : string;
    color : string;
    size : number;

}