
const monsterUrlsReducer = (state = [], action) => {
  if (action.type === 'POPULATE_MONSTER_URLS') {
    // const newPayload = {};
    // action.payload.forEach(monster => {
    //   newPayload[monster.name] = monster.url;
    // });
    const newPayload = [];
    action.payload.forEach(monster => {
      var monsterObj = {};
      monsterObj.key = monster.name;
      monsterObj.value = monster.url;
      monsterObj.text = monster.name;
      newPayload.push(monsterObj);
    })
    return [...state, ...newPayload];
  }
  return state;
};

export default monsterUrlsReducer;
