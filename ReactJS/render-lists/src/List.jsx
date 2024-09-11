function List(){
    const fruits = [{id:1,name:"apple", calories:95}, 
    {id:2,name:"orange",calories:45}, 
    {id:3,name:"banana", calories:105}];
    const listItem = fruits.map(fruit => <li key = {fruit.name}
                                        >{fruit.name}:&nbsp;
                                       {fruit.calories} </li>)
    return(
        <ul>
            {listItem}
        </ul>
    )
}

export default List