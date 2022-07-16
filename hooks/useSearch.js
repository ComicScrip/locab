import { useCallback, useEffect } from "react";
import createPersistedState from "use-persisted-state";
import dayjs from "dayjs";
import qs from "query-string";

const duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

const useSearchParams = createPersistedState("searchParams");

const defaultParams = {
  fromDate: dayjs().format("YYYY-MM-DD"),
  toDate: dayjs().format("YYYY-MM-DD"),
  city: "",
  showUnavailable: false,
  productNameContains: "",
};

const useSearch = () => {
  const [params, setParams] = useSearchParams(defaultParams);

  const mergeParams = useCallback(
    (newParams) => {
      setParams((old) => ({ ...old, ...newParams }));
    },
    [setParams]
  );

  useEffect(() => {
    // if start date is before today
    //if (dayjs().isAfter(params.fromDate))
    //mergeParams({ fromDate: dayjs().format("YYYY-MM-DD") });
    // if start > end
    //if (dayjs(params.fromDate).isAfter(params.toDate))
    //mergeParams({ toDate: params.fromDate });
  }, [params.fromDate, params.toDate, mergeParams]);

  const queryString = qs.stringify(params, { skipEmptyString: true });

  const setProductNameContains = (search) =>
    mergeParams({ productNameContains: search });

  const setCity = (name) => mergeParams({ city: name });

  const toggleShowUnavailable = () =>
    mergeParams({ showUnavailable: !params.showUnavailable });

  const nbDays =
    dayjs.duration(dayjs(params.fromDate).diff(params.toDate)).asDays() + 1;

  return {
    params,
    mergeParams,
    queryString,
    setProductNameContains,
    setCity,
    toggleShowUnavailable,
    nbDays,
  };
};

export default useSearch;
