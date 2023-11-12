import StoreItem from "../Components/StoreItem";
import storeItems from "../items/items.json";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <div>
        {storeItems.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
