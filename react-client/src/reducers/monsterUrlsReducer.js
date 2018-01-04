
const monsterUrlsReducer = (state = {}, action) => {
  if (action.type === 'POPULATE_MONSTER_URLS') {
    const newPayload = {};
    action.payload.forEach(monster => {
      newPayload[monster.name] = monster.url;
    });
    return {...state, ...newPayload};
  }
  return state;
};

export default monsterUrlsReducer;
