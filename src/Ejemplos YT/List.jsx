import Item from "./Item";
import React , {useEffect , memo} from 'React'

const List = memo(({ users }) => {
    useEffect(() => {
        //console.log("List Render")
      })
  return (
    <ul>
      {users.map((item) => (
        <Item key={item.id} user={item} />
      ))}
    </ul>
  );
})

export default List