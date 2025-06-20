let list = [
    [1, 2, 3],
    [4, 5, 6, 7, 8, 9],
    [7, 8, 9]
];
console.log(list);

for(let i=0 ; i<list.length ; i++)
{
    console.log(list[i]);
    for(let j=0 ; j<list[i].length ; j++)
    {
        console.log(list[i][j]);
    }
}

console.log();
for(i of list)
{
    console.log(i);
    for(j of i)
    {
        console.log(j);
    }
}
console.log();
for(i of list)
{
    console.log(i);
}

let grid = [
    [],
    [],
    []
];
for(let i=0 ; i<3 ; i++)
{
    for(let j=0 ; j<3 ; j++)
    {
        if(i == j)  grid[i][j] = 'X';
        else if(i+j == 3-1)  grid[i][j] = '0';
        else grid[i][j] = '_'
    }
}

for(let i=0 ; i<grid.length ; i++)
{
    console.log(grid[i]);
    for(let j=0 ; j<grid[i].length ; j++)
    {
        console.log(grid[i][j]);
    }
}

console.log(grid);