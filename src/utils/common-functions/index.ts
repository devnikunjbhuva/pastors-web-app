// Common utilities functions
export const getName = (item: any) => {
  return item?.firstName + item?.lastName || "-";
};

export const handleChanges = (
  key: string,
  event: string | boolean,
  setAction: (state: any) => void
) => setAction((prev: any) => ({ ...prev, [key]: event }));
