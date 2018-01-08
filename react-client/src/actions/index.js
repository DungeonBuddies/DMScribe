import store from '../store';
import axios from 'axios';

export const CHANGE_TAB = 'CHANGE_TAB';
export const ADD_MONSTER = 'ADD_MONSTER';
export const DELETE_MONSTER = 'DELETE_MONSTER';
export const CLEAR_MONSTERS = 'CLEAR_MONSTERS';
export const ADD_MONSTER_IMG = 'ADD_MONSTER_IMG';
export const ADD_PLAYER = 'ADD_PLAYER';

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
    // var monsters = [];
    // for (var i = 0; i < number; i++) {
    //   monsters.push(monster);
    // };
    if (checked) {
      monster.init = Math.floor((monster.dexterity - 10) / 2) + (Math.floor(Math.random() * Math.floor(20)))
      // monsters.map((monster) => {
      //   return monster.init = Math.floor((monster.dexterity - 10) / 2) + (Math.floor(Math.random() * Math.floor(20)));
      // });
      store.dispatch({type: ADD_MONSTER, payload: monster});
    } else {
      store.dispatch({type: ADD_MONSTER, payload: monster});
    }

    fetchMonsterImg(monster.name)
    .then(url => {
        addMonsterImg(url, monster.id);
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

const addMonsterImg = (url, id) => {
  store.dispatch({
    type: ADD_MONSTER_IMG,
    payload: {
      url: url,
      id: id
    }
  });
};

export const clearMonstersField = () => {
  store.dispatch({
    type: CLEAR_MONSTERS,
    payload: []
  });
}

export const removeMonster = id => {
  return {
    type: DELETE_MONSTER,
    payload: {
      id: id
    }
  }
}

export const addPlayer = (player) => {
  store.dispatch({
    type: ADD_PLAYER,
    payload: player
  })
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
