class GFG
{
static class Node 
{ 
    int key; 
    Node left, right; 
}
 
/* utility that allocates a new 
   Node with the given key */
static Node newNode(int key) 
{ 
    Node node = new Node(); 
    node.key = key; 
    node.left = node.right = null; 
    return (node); 
} 
