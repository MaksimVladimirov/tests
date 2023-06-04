const getObjKeys = <Obj, Key extends keyof Obj>(obj: Obj, array: Key[]) => {
  const result = {} as Pick<Obj, Key>;

  array.map((key) => (result[key] = obj[key]));
  
  return result;
};

const user = {
  name: 'Dima',
  age: 24,
  channel: 'Syber',
};

console.log(getObjKeys(user, ['name', 'channel']));
