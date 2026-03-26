// 1351

const countNegatives = (grid) => {
    let m = grid.length
    let n = grid[0].length
    let row = 0
    let col = n - 1
    let count = 0

    while (row < m && col >= 0) {
        if (grid[row][col] < 0) {
            count += (m - row)
            col--
        } else {
            row++
        }
    }

    return count
}


console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])) // 8