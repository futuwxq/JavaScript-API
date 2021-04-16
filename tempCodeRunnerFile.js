            if (grid[i][j] == 1) {
                console.log(res);
                max = Math.max(max, dfs(i, j, grid));
            }