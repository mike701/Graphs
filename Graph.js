class GraphNode{
  constructor(value,edge={}) {
    this.value = value;
    this.adjacencyList = edge;
  }
  AddEdge(pointer,value) {
    this.adjacencyList[pointer]=value;
  }
  nearestNodes() {
    return this.adjacencyList
  }
}

let FirstGraphNode = new GraphNode(0);
let SecondGraphNode = new GraphNode(4, { "FirstGraphNode": 4 });
let ThirdGraphNode = new GraphNode(12, { "SecondGraphNode": 8 });
console.log(FirstGraphNode, SecondGraphNode, ThirdGraphNode);
console.log(FirstGraphNode.nearestNodes())
FirstGraphNode.AddEdge("ThirdGraphNode", 12);
console.log(FirstGraphNode.nearestNodes());
