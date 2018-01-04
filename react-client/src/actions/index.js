import store from '../store';
import $ from 'jquery';

const populateMonsterUrls = () => {
  $.get('http://www.dnd5eapi.co/api/monsters', (res) => {
    store.dispatch({
      type: 'POPULATE_MONSTER_URLS',
      payload: res.results
    });
  });
};

const searchMonsterUrls = (query) => {
  const monsterUrls = store.getState().monsterUrls;
  const results = [];
  // MVP linear search
  for (let m in monsterUrls) {
    const name = m.toLowerCase().split(' ');
    for (let w of name) {
      if (w.slice(0, query.length) === query) {
        results.push({name: m, url: monsterUrls[m]});
        break;
      }
    }
  }
  return results;
};

const addMonster = (monster) => {
  $.get(monster.url, (res) => {
    store.dispatch({type: 'ADD_MONSTER', payload: res});
  });
};



// const extendMonsterId = (id) => {
//   const monsters = store.getState().monsters;
//   const duplicateMonsters = Object.keys(monsters).filter(m => m._id === id);
//   return `${id}-${duplicateMonsters.length}`;
// };

export default { populateMonsterUrls, searchMonsterUrls };
