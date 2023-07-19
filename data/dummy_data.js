const benefits = [
    {imageurl: '/images/how-people-learn.jpeg', title: 'Master Common Coding Interview Questions', description:'Learn to analyze and choose the best approach for problems covering all major topics. C++, Java, and Python solutions are all provided.'},
    {imageurl: '/images/learn-on-the-go.jpeg', title: 'Practice LeetCode On The Go', description:'Available as a mobile app and a web app. Improve your pattern recognition skills with our spaced-repetition learning approach!'},
    {imageurl: '/images/identify-weakness.jpeg', title: 'Identify Strengths And Weaknesses Easily', description: 'Offer statistical insights into your performance on individual questions and topics, helping you quickly work out your areas to improve.'},
    {imageurl: '/images/explanation.webp', title: 'Guided Livecoding Videos For Visual Learners', description: 'Detailed explanations, backed up with a line-by-line live-coded video walkthrough, are provided for each question'},
    {imageurl: '/images/critical-feedback.jpeg', title: 'Comprehensive Feedback - Even For Wrong Answers!', description:'We provide comprehensive feedback on correct answers, as well as meaningful explanations for incorrect/suboptimal choices.'},
    {imageurl: '/images/no-cash.avif', title: 'Dynamic And Completely Free Application!', description: 'Remove some of the pain of the LeetCode grind. Refresh your problem-solving skills and pattern recognition ability - free of charge!'}
];

const dummyCode = {
    pythonCode: `
class Solution:
    def addEdge(self, graph, from_node, to):
        graph[from_node].append(to)
        graph[to].append(from_node)

    def dfs(self, graph, node, parent=-1):
        mxH1 = 0
        mxH2 = 0
        for cur in graph[node]:
            if cur == parent:
                continue
            h = self.dfs(graph, cur, node)
            if h > mxH1:
                mxH2 = mxH1
                mxH1 = h
            elif h > mxH2:
                mxH2 = h
        self.mxDia = max(self.mxDia, mxH1 + mxH2)
        return 1 + mxH1

    def treeDiameter(self, edges: List[List[int]]) -> int:
        graph = [[] for _ in range(len(edges) + 1)]
        for e in edges:
            self.addEdge(graph, e[0], e[1])
        self.mxDia = 0
        self.dfs(graph, 0)
        return self.mxDia
    `,
    javaCode: `
    class Solution {
        private boolean possible(int[] bloomDay, int bouquet, int flowers, int day) {
            int adjFlowers = 0;
            int bouCount = 0;
            
            for (int i = 0; i < bloomDay.length; i++) {
                if (bloomDay[i] <= day) {
                    adjFlowers++;
                    
                    if (adjFlowers == flowers) {
                        bouCount++;
                        adjFlowers = 0;
                    }
                    if (bouCount == bouquet) {
                        return true;
                    }
                } else {
                    adjFlowers = 0;
                }
            }
            return false;
        }
        
        public int minDays(int[] bloomDay, int m, int k) {
            int sz = bloomDay.length;
            if (m * k > sz) {
                return -1;
            }
            
            int start = 1;
            int end = (int)1e9;
            int ans = -1;
            
            while (start <= end) {
                int mid = start + (end - start) / 2;
                if (possible(bloomDay, m, k, mid)) {
                    end = mid - 1;
                    ans = mid;
                } else {
                    start = mid + 1;
                }
            }
            return ans;
        }
    }
    
    `,
    cppCode: `
    class Solution {
        struct Edge{
            int to;
            int color;
        };
        const int OO = 1e9;
        const int RED = 0;
        const int BLUE = 1;
        typedef vector<vector<Edge>>GRAPH;
    
        void addEdge(GRAPH&graph, int from, int to, int color){
            graph[from].push_back({to,color});
        }
    public:
        vector<int>bfs(GRAPH&graph, int node){
            queue<Edge>q;
            q.push({node,RED});
            q.push({node,BLUE});
    
            int nodes = graph.size();
            vector<vector<int>>visited(nodes,vector<int>(2,OO));
            visited[node][RED] = visited[node][BLUE] = 0;
    
            vector<int>result(nodes,-1);
            result[node] = 0;
    
            for(int level = 0, sz = q.size(); !q.empty(); ++level, sz = q.size()){
                while(sz--){
                    int to = q.front().to;
                    int color = q.front().color;
                    q.pop();
    
                    for(Edge&e:graph[to]){
                        if(e.color != color && visited[e.to][e.color]==OO){
                            q.push(e);
                            visited[e.to][e.color] = level+1;
    
                            if(result[e.to]==-1)
                                result[e.to] = level+1;
                        }
                    }
                }
            }
            return result;
        }
    
        vector<int> shortestAlternatingPaths(int n, vector<vector<int>>& redEdges, vector<vector<int>>& blueEdges) {
            GRAPH graph(n);
            for(auto&r:redEdges)
                addEdge(graph,r[0],r[1],RED);
            for(auto&b:blueEdges)
                addEdge(graph,b[0],b[1],BLUE);
            
            return bfs(graph,0);
        }
    };
    `
};

export default {benefits, dummyCode}