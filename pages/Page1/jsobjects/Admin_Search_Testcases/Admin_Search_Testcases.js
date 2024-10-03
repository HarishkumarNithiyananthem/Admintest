export default {
	inputs:[],
	test_increment: 0,
	unique_list:[],
	
	
	
	//function testing
	func_testing:async()=>{
		// return chance.
	},
	
	//widget testing
	add_data_to_widget:async(list_of_inputtype, unique_check=true, no_of_test = 5)=>{
		this.inputs=[]
		if(this.test_increment<no_of_test){
			this.test_increment = this.test_increment+1
		for(let i=0;i<list_of_inputtype.length;i++){
			switch(list_of_inputtype[i])
				{
					case 'name':
						this.inputs.push(chance.name());
						break;
					case 'email':
						this.inputs.push(chance.email());
						break;
					case 'bool':
						this.inputs.push(chance.bool());
						break;
				}
		}
		if(this.test_increment==0 && unique_check){
			this.unique_list = this.inputs
		}
		}else{
			this.inputs = this.unique_list
		}
		
	},
	check_function:async()=>{
		this.add_data_to_widget(['name','email','bool'])
		await Organization_Create.onClick.replace('{{','')
		return this.inputs
	}
	
	
}