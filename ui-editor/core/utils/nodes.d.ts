import { Node } from '@babel/types';
export declare type NodeId = string;
export declare const getNodeId: (node: Node) => NodeId | undefined;
export declare const initNodeId: (node: Node) => Node;
