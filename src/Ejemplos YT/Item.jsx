import React, { useState, useEffect , memo } from "react";
const Item = memo (({ user }) => {
    const onClickItem = (e) => {
        //console.log(`Hiciste click pillin!!!`)
    };
    useEffect(() => {
        //console.log("Item Render : " + user.name)
    });
    return (
      <>
        <li className="list-group-item" onClick={onClickItem}>{user.name}</li>
      </>
    );
  })

  export default Item
  