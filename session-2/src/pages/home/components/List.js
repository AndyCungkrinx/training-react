import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../../redux/action/home";

const Content = () => {
  const [field, setField] = React.useState("");
  const [generateId, setId] = React.useState(99);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.home);
  console.log(data);

  const handleAdd = () => {
    dispatch(
      addCategory({
        id: generateId + 1,
        name: field
      })
    );
    setId(generateId + 1);
    setField("");
  };

  return (
    <div>
      <ul>
        {data &&
          data.category.length > 0 &&
          data.category.map((item) => <p key={item.id}>{item.name}</p>)}
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <input value={field} onChange={(e) => setField(e.target.value)} />
        <button onClick={handleAdd}>add</button>
      </div>
    </div>
  );
};

export default Content;
