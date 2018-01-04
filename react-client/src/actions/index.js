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
        results.push(m);
        break;
      }
    }
  }
  return results;
};

// const 
// get req a specific monster with url input
// eg. input: '(monster url)'
//     output (on callback): store.dispatch({type: ADD_MONSTER, payload: (res)})

export default { populateMonsterUrls, searchMonsterUrls };
