import createPersistedState from "use-persisted-state";

const useSelectProducts = createPersistedState("selectProducts");

export default useSelectProducts;
