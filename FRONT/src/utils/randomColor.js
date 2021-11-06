const colors =['indianRed', 'DarkSlateGray', 'DodgerBlue','Chocolate', 'SaddleBrown','CadetBlue',
'Tomato', 'DarkOrange', 'MediumSeaGreen', 'Firebrick', 'DarkSlateBlue', 'SlateBlue', 'ForestGreen'
]

const randomColor = () => {

  const randomColor = Math.floor(Math.random()*colors.length-1);
  return colors[randomColor];
};

export default randomColor;
