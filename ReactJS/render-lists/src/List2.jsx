function List2(props){
    const itemList = props.items;

    const listItems = itemList.map(item => <li>{item.name}:&nbsp;
                                              {item.calories}  </li>)

    return(
        <ul>
            {listItems}
        </ul>
    )
}

export default List2