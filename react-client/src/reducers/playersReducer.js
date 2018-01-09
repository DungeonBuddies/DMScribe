const sample = [
  {
   name: 'Jake',
   class: 'Fighter',
   armor_class: 17,
   hit_points: 60,
   init: 1,
   perception: 10,
   speed: 30,
   image: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/359/420/618/636272697874197438.png",
   order: 0
  }, {
   name: 'Brooks',
   class: 'Bard',
   armor_class: 15,
   hit_points: 55,
   init: 1,
   perception: 15,
   speed: 30,
   order: 2,
   image: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"
  }, {
   name: 'Spencer',
   class: 'Wizard',
   armor_class: 14,
   hit_points: 50,
   init: 2,
   perception: 15,
   speed: 25,
   order: 999,
   image: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/357/420/618/636272696881281556.png"
  }
]

const playersReducer = (state = sample, action) => {
  if (action.type === 'ADD_PLAYER') {
  	action.payload.id = state.length;
    return [...state, action.payload];

  } else if (action.type === 'ADD_CLASS_IMG') {
  	const index = state.findIndex(player => player.id === action.payload.id);
  	console.log('Add player URL: ', action.payload.url);
    return [...state.slice(0, index), {...state[index], image: action.payload.url}, ...state.slice(index + 1)];

  } else if (action.type === 'DELETE_PLAYER') {
  	const index = state.findIndex(player => player.name === action.payload.name);
    return [...state.slice(0, index), ...state.slice(index + 1)];

  } else if (action.type === 'ASSIGN_TURN_VALUE') {
    const index = state.findIndex(player => player.name === action.payload.name);
    console.log('name: ', action.payload.name);
    console.log('value: ', action.payload.value);
    console.log('index: ', index);
    console.log('state at index: ', {...state[index]});
    return [...state.slice(0, index), {...state[index], order: parseInt(action.payload.value)}, ...state.slice(index + 1)];
  }
  return state;
};

export default playersReducer;
