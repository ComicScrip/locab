import { useCallback, useEffect } from "react";
import createPersistedState from "use-persisted-state";
import dayjs from "dayjs";
import qs from "query-string";

const duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

const useSearchParams = createPersistedState("searchParams");

const today = new Date();
const todayToTomorrow = new Date(today);
const tomorrow = todayToTomorrow.setDate(todayToTomorrow.getDate() + 1);

const defaultParams = {
  fromDate: dayjs(tomorrow).format("YYYY-MM-DD"),
  toDate: dayjs().format("YYYY-MM-DD"),
  city: "",
  showUnavailable: false,
  productNameContains: "",
};

const useSearch = () => {
  let [params, setParams] = useSearchParams(defaultParams);
  if (params === null) params = defaultParams; // bypass strange bug in cypress...

  const mergeParams = useCallback(
    (newParams) => {
      setParams((old) => ({ ...old, ...newParams }));
    },
    [setParams]
  );

  useEffect(() => {
    // if start date is before today
    if (dayjs().subtract(1, "day").isAfter(params.fromDate))
      mergeParams({ fromDate: dayjs().format("YYYY-MM-DD") });
    // if start > end
    if (dayjs(params.fromDate).isAfter(params.toDate))
      mergeParams({ toDate: params.fromDate });
  }, [params?.fromDate, params?.toDate, mergeParams]);

  const queryString = qs.stringify(params, { skipEmptyString: true });

  const setProductNameContains = (search) =>
    mergeParams({ productNameContains: search });

  const setCity = (name) => mergeParams({ city: name });
  const setFromDate = (date) => mergeParams({ fromDate: date });
  const setToDate = (date) => mergeParams({ toDate: date });

  const toggleShowUnavailable = () =>
    mergeParams({ showUnavailable: !params.showUnavailable });

  const nbDays =
    dayjs.duration(dayjs(params.toDate).diff(params.fromDate)).asDays() + 1;

  return {
    params,
    mergeParams,
    queryString,
    setProductNameContains,
    setCity,
    toggleShowUnavailable,
    nbDays,
    setFromDate,
    setToDate,
  };
};

export default useSearch;
