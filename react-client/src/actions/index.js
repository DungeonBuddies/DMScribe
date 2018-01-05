import store from '../store';
import $ from 'jquery';

export const CHANGE_TAB = 'CHANGE_TAB';

export const populateMonsterUrls = () => {
  $.get('http://www.dnd5eapi.co/api/monsters', (res) => {
    store.dispatch({
      type: 'POPULATE_MONSTER_URLS',
      payload: res.results
    });
  });
};

const addMonster = (monster) => {
  $.get(monster.url, (res) => {
    store.dispatch({type: 'ADD_MONSTER', payload: res});
  });
};

export const selectTab = (tab) => {
  return {
    type: CHANGE_TAB,
    payload: tab
  }
}

// const extendMonsterId = (id) => {
//   const monsters = store.getState().monsters;
//   const duplicateMonsters = Object.keys(monsters).filter(m => m._id === id);
//   return `${id}-${duplicateMonsters.length}`;
// };
