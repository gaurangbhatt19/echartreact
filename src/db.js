export const colorList=
['#FF6633','#FF3380', '#CCCC00', '#66E64D', '#4D80CC',
 '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6',
'#6666FF','#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
];

export const values=[
    { value: 1048, name: 'Search Engine'},
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' }
  ]

export const chartValues=values.map((value,index)=>{
  return {
    ...value,
    color:colorList[index],
    render:true
  }
})

