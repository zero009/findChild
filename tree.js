var json = [
	{
		name: '1',
		children: [{
			name: '2'
		}]
	},
    {
		name: '3',
		children: [{
			name: '4',
			children:[{
				name: '5'
			}]
		}]
	},
    {
		name: '6'
	},
    {
		name: '7'
	},
    {
		name: '8',
        children: [{
            name: '9',
            children: [{
                name: '10'
            }]
        }]
	}
];
// 打印出1、2、3、4...10
(function printName(obj){
	obj.map(item => {
		console.log(item.name);
		if (item.children && item.children.length>0) printName(item.children) 
	})
})(json)

// 打印出1、3、6、7、8、2、4、9、5、10...

(function printName(items){
	var arr = [];
	items.map(item => {
		console.log(item.name);
		if(item.children){
			// arr.push.apply( arr, item.children )
			arr.push(...item.children)
		}
	});
	if(arr.length>0){ 
		printName(arr);
	}
})(json);
