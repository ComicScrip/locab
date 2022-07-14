import createPersistedState from "use-persisted-state";

const useUserStartDate = createPersistedState("userStartDate");

export default useUserStartDate;
