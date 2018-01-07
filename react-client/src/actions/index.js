import store from '../store';
import axios from 'axios';

export const CHANGE_TAB = 'CHANGE_TAB';
export const ADD_MONSTER = 'ADD_MONSTER';
export const DELETE_MONSTER = 'DELETE_MONSTER';

export const populateMonsterUrls = () => {
  axios('http://www.dnd5eapi.co/api/monsters')
  .then(res => {
    store.dispatch({
      type: 'POPULATE_MONSTER_URLS',
      payload: res.data.results
    });
  });
};

export const addMonster = (url, checked) => {
  axios.get(url)
  .then(res => {
    const monster = res.data;
    if (checked) {
      monster.init = Math.floor((monster.dexterity - 10) / 2) + (Math.floor(Math.random() * Math.floor(20)));
      store.dispatch({type: 'ADD_MONSTER', payload: monster});
    } else {
      store.dispatch({type: 'ADD_MONSTER', payload: monster});
    }

    fetchMonsterImg(monster.name)
    .then(url => {
      console.log(url);
    });

  });
}

const fetchMonsterImg = monsterName => {
  return axios.get('http://localhost:3000/monsterimg', {
    params: {
      monsterName: monsterName
    }
  })
  .then(res => res.data);
};

// export const addMonsterImg = url => {

// };

export const removeMonster = monster => {
  return {
    type: DELETE_MONSTER,
    payload: monster
  }
}

export const generateTurnOrder = () => {
  return {
    type: 'ORDER'
  }
}

export const selectTab = tab => {
  return {
    type: CHANGE_TAB,
    payload: tab
  }
}
